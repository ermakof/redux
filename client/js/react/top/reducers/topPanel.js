/**
 * Created by ermakof on 30.09.17.
 */
import * as C from "../constants";
import options from "./../../../options";

const initialStateStyles = (isOpen) => ({
    color: {
        background: options.panel.top.settings.styles.color.background,
        font: options.panel.top.settings.styles.color.font
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
    styles: initialStateStyles(false),
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
            newState.createMap.visible = true;
            return newState;
        }
        case C.ACTIVATE_REFERENCE_POINT_MODE: {
            return newState;
        }
        case C.OPEN_REFERENCE_POINT_MODAL: {
            newState.referencePoint.visible = true;
            newState.referencePoint.points = action.payload.points;
            return newState;
        }
        case C.CLOSE_REFERENCE_POINT_MODAL: {
            newState.referencePoint.visible = false;
            newState.selectSettings.item = null;
            newState.exitGroupBtn.visible = false;
            return newState;
        }
        case C.SAVE_REFERENCE_POINT_MODAL: {
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
            newState.createMap.visible = false;
            return newState;
        }
        case C.CLOSE_MAP_DELETE_MODAL: {
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
            return newState;
        }
        case C.OPEN_DIALOG_INFO: {
            newState.info.isOpen = true;
            newState.info.data = action.data;
            return newState;
        }
        case C.CLOSE_DIALOG_INFO: {
            newState.info.isOpen = false;
            newState.info.data = null;
            return newState;
        }
        case C.OPEN_POPUP_EDIT_DIALOG: {
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
            newState.popupEditDialog.mac = null;
            newState.popupEditDialog.typeAction = null;
            newState.popupEditDialog.type = null;
            newState.popupEditDialog.data = {};
            newState.popupEditDialog.feature = {};
            newState.popupEditDialog.feature_id = null;
            return newState;
        }
        case C.SAVE_POPUP_EDIT_DIALOG: {
            const {type, feature, feature_id, mac} = newState.popupEditDialog,
                data = action.payload.data;
            if (type === 'background') {
            } else if (type === 'anchor' || type === 'repeater') {
                let device = deviceList.getDeviceByMac(mac);
                let loc = {
                    lon: data.loc.lon * 1,
                    lat: data.loc.lat * 1,
                    alt: data.loc.alt * 1
                };
                if (data.type == "add") {
                } else if (data.type == "remove"){
                } else {
                }
            } else {
            }
            return newState;
        }
        case C.CHANGE_MAP_EDIT_DIALOG: {
            let {type} = action.payload;
            newState[type].isOpen = false;
            switch (type) {
                case "MapEditPropsModal":
                    newState[type].data["file"] = document.querySelector("input[name=background]").files[0];
                    break;
                case "createMapDialog":
                    newState[type].data["file"] = document.querySelector("input[name=background]").files[0];
                    break;
                case "editBackgroundDialog":
                    break;
                default:
                    newState.feature.properties = Object.assign({}, newState.feature.properties, newState[type].data);
            }
            return newState;
        }
        case C.REMOVE_MAP_EDIT_DIALOG: {
            let mapId = action.payload;
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
            return newState;
        }
        case C.OPEN_MAP_EDIT: {
            return state;
        }
        case C.OPEN_MAP_EDIT_PROPS_MODAL: {
            newState.editMapProps.visible = true;
            return newState;
        }
        case C.CHANGE_BACKGROUND_MAP_EDIT_PROPS_MODAL: {
            newState.editMapProps.img = action.event.target;
            return newState;
        }
        case C.SAVE_MAP_EDIT_PROPS_MODAL: {
            newState.editMapProps.visible = false;
            return newState;
        }
        case C.CLOSE_MAP_EDIT_PROPS_MODAL: {
            newState.editMapProps.visible = false;
            return newState;
        }
        case C.DELETE_MAP_EDIT_PROPS_MODAL: {
            newState.editMapProps.visible = false;
            return newState;
        }
        case C.MAP_HOMEWARD: {
            return state;
        }
        case C.OPEN_MAP_ROOT: {
            newState.rootMap.isOpen = true;
            return newState;
        }
        case C.CLOSE_MAP_ROOT: {
            newState.rootMap.isOpen = false;
            return newState;
        }
        case C.EDITING_DATA__SELECT: {
            let item = action.itemSelectedMenu;
            newState.selectSettings.item = item;
            let props = newState.selectSettings.list[item];
            if (item == "settings") {
                props.activated = true;
            } else {
                newState.disabled = true;
                if (item == "anchor") {
                } else if (item == "referencePoint") {
                } else if (item == "background") {
                }
                newState.exitGroupBtn.visible = true;
            }
            if (newState.selectSettings.list[item]) {
                newState.selectSettings.options = newState.selectSettings.list[item].options;
            }
            return newState;
        }
        case C.EDITING_DATA__CANCEL: {
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
                    break;
                }
                case "referencePoint": {
                    if (action.feature.isActivated == undefined ||
                        action.feature.isActivated) {
                    }
                    break;
                }
                case "landmarks": {
                    if (action.feature.isActivated == undefined ||
                        action.feature.isActivated) {
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
                }
            }
            newState.selectSettings.item = null;
            newState.exitGroupBtn.visible = false;
            return newState;
        }
        case C.EDITING_DATA__SAVE: {
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
                    break;
                }
                default: {
                    if (props && props.options) {
                        let options = props.options;
                        if (options.edit) options.edit.activated = false;
                        if (options.create) options.create.activated = false;
                        if (options.delete) options.delete.activated = false;
                    }
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

