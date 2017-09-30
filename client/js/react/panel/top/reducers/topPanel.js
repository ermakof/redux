/**
 * Created by sinires on 22.07.16.
 */
import _ from "underscore";
import i18next from "i18next";
import * as C from "./../constants";
import * as D from "../../devices/constants";
import dispatcher from "./../../../../databind/dispatcher";
import {deviceList} from "../../../../databind/devices";
import options from "./../../../../options";
import {settingObject} from "../../../../api/settings";
import storage from "../../../../api/localStorage";

import {
    topPanelIsOpen,
} from '../../../../constants/settings'
import settings from "../../../../api/settings"
import manager from "../../../../leaflet/mapManager";

const initialStateStyles = (isOpen) => ({
    color: {
        background: options.settings.panel.maps.styles.color.background,
        font: options.settings.panel.maps.styles.color.font
    },
    visible: isOpen
});
const initialStatePopupEditDialog = () => {
    let init = {
        type: false,
        data: {},
        feature: {}
    };
    return init;
};

const initialStateCreateMap = () => ({
    disabled: false,
    visible: false,
    img: null
});

const initialStateDeleteMap = () => ({
    disabled: false,
    visible: false
});

const initialStateReferencePointMap = () => ({
    disabled: false,
    isEnable: false,
    visible: false,
    points: {}
});

const initialStateSelectSettings = () => {
    let getDefaultOption = (flag) => ({
        isVisible: true,
        activated: flag == true
    });
    let menu = {
        list: {
            'settings': {
                icon: "fa fa-cog",
                activated: false
            },
            'null': null,
            'map': {
                options: {
                    edit: {isVisible: false},
                    create: getDefaultOption(),
                    delete: getDefaultOption(),
                    quit: {type: "EXIT"}
                }
            },
            'null': null,
            'geometry': {
                header: true
            },
            'background': {
                options: {
                    edit: null,
                    create: null,
                    delete: null,
                    quit: {type: "SAVE"}
                },
                mapRequired: true
            },
            'anchor': {
                options: {
                    edit: null,
                    create: null,
                    delete: null,
                    quit: {type: "SAVE"}
                },
                mapRequired: true
            },
            'graph': {
                options: {
                    edit: getDefaultOption(),
                    create: getDefaultOption(),
                    delete: getDefaultOption()
                },
                mapRequired: true
            },
            'wall': {
                options: {
                    edit: getDefaultOption(),
                    create: getDefaultOption(),
                    delete: getDefaultOption()
                },
                mapRequired: true
            },
            'area': {
                options: {
                    edit: getDefaultOption(),
                    create: getDefaultOption(),
                    delete: getDefaultOption()
                },
                mapRequired: true
            },
            'referencePoint': {
                options: {
                    edit: null,
                    create: null,
                    delete: null,
                    quit: {type: "EXIT"}
                },
                mapRequired: true
            },
            'landmark': {
                options: {
                    edit: getDefaultOption(),
                    create: getDefaultOption(),
                    delete: getDefaultOption()
                },
                mapRequired: true
            }
        },
        item: null,
        update: new Date().getTime(),
        disabled: false
    };
    return menu;
};

const initialStateEditMapProps = () => ({
    disabled: false,
    visible: false,
    img: null
});

const initialStateInfo = () => ({
    isOpen: null,
    data: null
});

const initialExitGroupBtn = () => ({
    isSave: false,
    visible: false
});

const initialEditGroupBtn = () => ({
    name: null
});

const initialStateRootMap = () => ({
    isOpen: false,
    disabled: false
});

const initialStateApp = () => ({
    mapRoot: false
});

const initialState = {
    app: initialStateApp(),
    popupEditDialog: initialStatePopupEditDialog(),
    createMap: initialStateCreateMap(),
    deleteMap: initialStateDeleteMap(),
    referencePoint: initialStateReferencePointMap(),
    selectSettings: initialStateSelectSettings(),
    editMapProps: initialStateEditMapProps(),
    info: initialStateInfo(),
    rootMap: initialStateRootMap(),
    styles: initialStateStyles(settings.get(topPanelIsOpen) || false),
    exitGroupBtn: initialExitGroupBtn(),
    editGroupBtn: initialEditGroupBtn(),
    isLoad: false
};

const topPanel = (state = initialState, action) => {
    let newState = Object.assign({}, state),
        actionStatus = action.payload;

    if (action && action.payload && (typeof action.payload == "object"))
        actionStatus = action.payload.actionStatus;

    switch (action.type) {
        case C.OPEN_MAP_CREATE_MODAL: {
            dispatcher.event(options.eventType.local.notifications.hide, {});
            newState.createMap.visible = true;
            return newState;
        }
        case C.ACTIVATE_REFERENCE_POINT_MODE: {
            dispatcher.event(options.eventType.local.map.referenceMode.start);
            return newState;
        }
        case C.OPEN_REFERENCE_POINT_MODAL: {
            dispatcher.event(options.eventType.local.notifications.hide, {});
            newState.referencePoint.visible = true;
            newState.referencePoint.points = action.payload.points;
            return newState;
        }
        case C.CLOSE_REFERENCE_POINT_MODAL: {
            dispatcher.event(options.eventType.local.notifications.show, {});
            newState.referencePoint.visible = false;
            newState.selectSettings.item = null;
            newState.exitGroupBtn.visible = false;
            return newState;
        }
        case C.SAVE_REFERENCE_POINT_MODAL: {
            dispatcher.event(options.eventType.local.notifications.hide, {});
            newState.referencePoint.visible = false;
            newState.selectSettings.item = null;
            newState.exitGroupBtn.visible = false;
            manager.sendReferencePoints4ResizeMap(action.payload);
            return newState;
        }

        case C.CHANGE_BACKGROUND_MAP_CREATE_MODAL: {
            newState.createMap.img = action.event.target;
            return newState;
        }
        case C.SAVE_MAP_CREATE_MODAL: {
            manager.createNewMap(newState.createMap.img);
            newState.createMap.visible = false;
            return newState;
        }
        case C.CLOSE_MAP_CREATE_MODAL: {
            dispatcher.event(options.eventType.local.notifications.show, {});
            newState.createMap.visible = false;
            return newState;
        }
        case C.CLOSE_MAP_DELETE_MODAL: {
            dispatcher.event(options.eventType.local.notifications.show, {});
            newState.deleteMap.visible = false;
            return newState;
        }
        case C.SELECT_ELEMENT_STYLE: {
            newState.settings.selectedProp = action.value;
            return newState;
        }
        case C.CHECKED_NOTIFICATIONS: {
            newState.settings.items.showNotification = action.flag;
            let notifications = options.eventType.local.notifications;
            dispatcher.event(notifications[action.flag ? 'show' : 'hide'], {});
            return newState;
        }
        case C.OPEN_DIALOG_INFO: {
            dispatcher.event(options.eventType.local.notifications.hide, {});
            newState.info.isOpen = true;
            newState.info.data = action.data;
            return newState;
        }
        case C.CLOSE_DIALOG_INFO: {
            newState.info.isOpen = false;
            newState.info.data = null;
            dispatcher.event(options.eventType.local.notifications.show, {});
            return newState;
        }
        case C.OPEN_POPUP_EDIT_DIALOG: {
            dispatcher.event(options.eventType.local.notifications.hide, {});
            let {type, data, device, feature, feature_id, typeAction, mac} = JSON.parse(JSON.stringify(action.payload));
            newState.popupEditDialog.mac = mac;
            newState.popupEditDialog.type = type;
            newState.popupEditDialog.data = data || {};
            newState.popupEditDialog.device = device || {};
            newState.popupEditDialog.feature = feature || {};
            newState.popupEditDialog.feature_id = feature_id;
            newState.popupEditDialog.typeAction = typeAction || "";
            return newState;
        }
        case C.CLOSE_POPUP_EDIT_DIALOG: {
            let mac = newState.popupEditDialog.mac;
            dispatcher.event(options.eventType.local.popupDialog.editAnchor.close, {mac: mac});
            newState.popupEditDialog.mac = null;
            newState.popupEditDialog.typeAction = null;
            newState.popupEditDialog.type = null;
            newState.popupEditDialog.data = {};
            newState.popupEditDialog.feature = {};
            newState.popupEditDialog.feature_id = null;
            dispatcher.event(options.eventType.local.notifications.show, {});
            return newState;
        }
        case C.SAVE_POPUP_EDIT_DIALOG: {
            const {type, feature, feature_id, mac} = newState.popupEditDialog,
                data = action.payload.data;
            if (type === 'background') {
                dispatcher.event(options.eventType.local.map.updateBackground, {
                    data: data,
                    toServer: false
                });
            } else if (type === 'anchor' || type === 'repeater') {
                let device = deviceList.getDeviceByMac(mac);
                let loc = {
                    lon: data.loc.lon * 1,
                    lat: data.loc.lat * 1,
                    alt: data.loc.alt * 1
                };
                if (data.type == "add") {
                    dispatcher.event(options.eventType.local.edit.anchor.add, {device, loc});
                } else if (data.type == "remove"){
                    dispatcher.event(options.eventType.local.edit.anchor.remove, {device, mac});
                } else {
                    dispatcher.event(options.eventType.local.edit.anchor.location, {device, mac, loc});
                }
            } else {
                dispatcher.event(options.eventType.local.edit.geometry.popupChange, {
                    ...newState.popupEditDialog,
                    type,
                    data,
                    feature,
                    feature_id
                });
            }
            return newState;
        }
        case C.CHANGE_MAP_EDIT_DIALOG: {
            let {type} = action.payload;
            newState[type].isOpen = false;
            switch (type) {
                case "MapEditPropsModal":
                    newState[type].data["file"] = document.querySelector("input[name=background]").files[0];
                    dispatcher.event(options.eventType.local.map.updateCurrentMap, {
                        data: newState[type].data,
                        toServer: false
                    });
                    break;
                case "createMapDialog":
                    newState[type].data["file"] = document.querySelector("input[name=background]").files[0];
                    break;
                case "editBackgroundDialog":
                    dispatcher.event(options.eventType.local.map.updateBackground, {
                        data: newState[type].data,
                        toServer: false
                    });
                    break;
                default:
                    newState.feature.properties = Object.assign({}, newState.feature.properties, newState[type].data);
            }
            dispatcher.event(options.eventType.local.notifications.show, {});
            return newState;
        }
        case C.REMOVE_MAP_EDIT_DIALOG: {
            let mapId = action.payload;
            dispatcher.event(options.eventType.local.map.removeFromServer, {
                mapId: mapId,
                toServer: false
            });
            return newState;
        }
        case C.UPDATE_PANEL_COLOR_BACKGROUND: {
            let rgb = action.data.rgb;
            let rgba = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
            newState.styles.color.background = rgba;
            return newState;
        }
        case C.UPDATE_PANEL_COLOR_FONT: {
            let rgb = action.data.rgb;
            let rgba = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
            newState.styles.color.font = rgba;
            return newState;
        }
        case C.SHOW_PANEL: {
            let isOpen = action.isOpen;
            if (action.isLoad) {
                newState.isLoad = action.isLoad;
            }
            newState.styles.visible = isOpen;
            dispatcher.fire({
                type: options.eventType.local.panel.setStyle,
                data: {
                    name: "top",
                    value: isOpen ? options.settings.panel.events.styles.height.min : '0px'
                }
            });
            settings.set(topPanelIsOpen, isOpen);
            return newState;
        }
        case C.OPEN_MAP_EDIT: {
            dispatcher.event(options.eventType.local.notifications.hide, {});
            // let data = {background: ""};
            // dispatcher.event(options.eventType.local.edit.dialog.open, {dialog: `mapDialog`, data});
            // console.info("Open edit map dialog");
            return state;
        }
        case C.OPEN_MAP_EDIT_PROPS_MODAL: {
            dispatcher.event(options.eventType.local.notifications.hide, {});
            newState.editMapProps.visible = true;
            return newState;
        }
        case C.CHANGE_BACKGROUND_MAP_EDIT_PROPS_MODAL: {
            newState.editMapProps.img = action.event.target;
            return newState;
        }
        case C.SAVE_MAP_EDIT_PROPS_MODAL: {
            newState.editMapProps.visible = false;
            dispatcher.event(options.eventType.local.map.updateCurrentMap, {
                data: newState.editMapProps,
                toServer: false
            });
            dispatcher.event(options.eventType.local.notifications.show, {});
            return newState;
        }
        case C.CLOSE_MAP_EDIT_PROPS_MODAL: {
            newState.editMapProps.visible = false;
            dispatcher.event(options.eventType.local.notifications.show, {});
            return newState;
        }
        case C.DELETE_MAP_EDIT_PROPS_MODAL: {
            newState.editMapProps.visible = false;
            dispatcher.event(options.eventType.local.map.removeFromServer, {
                mapId: map.currentMap.geoJSON.id,
                toServer: false
            });
            return newState;
        }
        case C.MAP_HOMEWARD: {
            dispatcher.event(options.eventType.local.map.homeward);
            return state;
        }
        case C.OPEN_MAP_ROOT: {
            newState.rootMap.isOpen = true;
            dispatcher.event(options.eventType.local.map.root.open, {
                mapRoot: true,
                mapId: newState.selectMap.idSelectedMap || storage.get('currentMap'),
                mapList: newState.selectMap.listMaps
            });
            return newState;
        }
        case C.CLOSE_MAP_ROOT: {
            newState.rootMap.isOpen = false;
            dispatcher.event(options.eventType.local.map.root.close, {
                mapRoot: false,
                mapId: newState.selectMap.idSelectedMap
            });
            return newState;
        }
        case C.EDITING_DATA__SELECT: {
            dispatcher.event(options.eventType.local.notifications.hide, {});
            let item = action.itemSelectedMenu;
            newState.selectSettings.item = item;
            let props = newState.selectSettings.list[item];
            if (item == "settings") {
                props.activated = true;
            } else {
                newState.disabled = true;
                if (item == "anchor") {
                    dispatcher.event(options.eventType.local.edit.anchor.start, {});
                } else if (item == "referencePoint") {
                    dispatcher.event(options.eventType.local.map.referenceMode.start);
                } else if (item == "background") {
                    dispatcher.event(options.eventType.local.map.featureEdit.start, {
                        id: "background",
                        mode: "edit"
                    });
                }
                newState.exitGroupBtn.visible = true;
            }
            if (newState.selectSettings.list[item]) {
                newState.selectSettings.options = newState.selectSettings.list[item].options;
            }
            return newState;
        }
        case C.EDITING_DATA__CANCEL: {
            dispatcher.event(options.eventType.local.notifications.show, {});
            newState.disabled = false;
            let item = newState.selectSettings.item;
            let props = newState.selectSettings.list[item];
            switch (item) {
                case "settings": {
                    props.activated = false;
                    break;
                }
                case "map": {
                    // Hide map edit buttons
                    break;
                }
                case "anchor": {
                    dispatcher.event(options.eventType.local.edit.anchor.stop, {isSave: false});
                    break;
                }
                case "referencePoint": {
                    if (action.feature.isActivated == undefined ||
                        action.feature.isActivated) {
                        dispatcher.event(options.eventType.local.map.referenceMode.stop);
                    }
                    break;
                }
                case "landmarks": {
                    if (action.feature.isActivated == undefined ||
                        action.feature.isActivated) {
                        dispatcher.event(options.eventType.local.map.landmark.stop);
                    }
                    break;
                }
                default: {
                    props = newState.selectSettings.list[item];
                    if (props && props.options) {
                        let options = props.options;
                        if (options.edit) options.edit.activated = false;
                        if (options.create) options.create.activated = false;
                        if (options.delete) options.delete.activated = false;
                    }
                    dispatcher.event(options.eventType.local.map.featureEdit.stop, {
                        id: item,
                        isSave: false
                    });
                }
            }
            newState.selectSettings.item = null;
            newState.exitGroupBtn.visible = false;
            return newState;
        }
        case C.EDITING_DATA__SAVE: {
            dispatcher.event(options.eventType.local.notifications.show, {});
            newState.disabled = false;
            let item = newState.selectSettings.item;
            let props = newState.selectSettings.list[item];
            switch (item) {
                case "settings": {
                    props.activated = false;
                    break;
                }
                case "map": {
                    // Hide map edit buttons
                    break;
                }
                case "anchor": {
                    dispatcher.event(options.eventType.local.edit.anchor.stop, {isSave: true});
                    break;
                }
                default: {
                    if (props && props.options) {
                        let options = props.options;
                        if (options.edit) options.edit.activated = false;
                        if (options.create) options.create.activated = false;
                        if (options.delete) options.delete.activated = false;
                    }
                    dispatcher.event(options.eventType.local.map.featureEdit.stop, {
                        id: item,
                        isSave: true
                    });
                }
            }
            newState.selectSettings.item = null;
            newState.exitGroupBtn.visible = false;
            return newState;
        }
        case C.EDITING_DATA__EDIT: {
            let item = newState.selectSettings.item;
            if (item == "map") {
                newState.editMapProps.visible = true;
            } else {
                let props = newState.selectSettings.list[item];
                props.options.create.activated = false;
                props.options.delete.activated = false;
                let flag = false;
                if (props && props.options && props.options.edit) {
                    flag = !props.options.edit.activated;
                    props.options.edit.activated = flag;
                    newState.selectSettings.update = new Date().getTime();
                }
                dispatcher.event(options.eventType.local.map.featureEdit[flag ? 'start' : 'stop'], {
                    id: item,
                    mode: "edit"
                });
            }
            return newState;
        }
        case C.EDITING_DATA__CREATE: {
            let item = newState.selectSettings.item;
            if (item == "map") {
                newState.createMap.visible = true;
            } else {
                let props = newState.selectSettings.list[item];
                props.options.edit.activated = false;
                props.options.delete.activated = false;
                let flag = false;
                if (props && props.options && props.options.create) {
                    flag = !props.options.create.activated;
                    props.options.create.activated = flag;
                    newState.selectSettings.update = new Date().getTime();
                }
                dispatcher.event(options.eventType.local.map.featureEdit[flag ? 'start' : 'stop'], {
                    id: item,
                    mode: "create"
                });
            }
            return newState;
        }
        case C.EDITING_DATA__DELETE: {
            let item = newState.selectSettings.item;
            if (item == "map") {
                newState.deleteMap.visible = true;
            } else {
                let props = newState.selectSettings.list[item];
                props.options.edit.activated = false;
                props.options.create.activated = false;
                let flag = false;
                if (props && props.options && props.options.delete) {
                    flag = !props.options.delete.activated;
                    props.options.delete.activated = flag;
                    newState.selectSettings.update = new Date().getTime();
                }
                dispatcher.event(options.eventType.local.map.featureEdit[flag ? 'start' : 'stop'], {
                    id: item,
                    mode: "delete"
                });
            }
            return newState;
        }
        case C.DEACTIVATE_REFERENCE_MODE: {
            newState.referencePoint.active = false;
            return newState;
        }
        default:
            return state
    }
};

export default topPanel

