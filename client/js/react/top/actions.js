/**
 * Created by ermak on 01.02.17.
 */
import * as C from "./constants"

export const savePopupEditDialog = (data) => {
    return {
        type: C.SAVE_POPUP_EDIT_DIALOG,
        payload: {data}
    }
};

export const openPopupEditDialog = (data) => ({
    type: C.OPEN_POPUP_EDIT_DIALOG,
    payload: {...data}
});

export const closePopupEditDialog = (data) => ({
    type: C.CLOSE_POPUP_EDIT_DIALOG,
    data: {...data}
});

export const activateReferncePointMode = () => ({
    type: C.ACTIVATE_REFERENCE_POINT_MODE
});

export const openPopupRPDialog = (data) => ({
    type: C.OPEN_REFERENCE_POINT_MODAL,
    payload: {...data}
});

export const closePopupRPDialog = (data) => ({
    type: C.CLOSE_REFERENCE_POINT_MODAL,
    payload: {...data}
});

export const savePopupRPDialog = (data) => ({
    type: C.SAVE_REFERENCE_POINT_MODAL,
    payload: {...data}
});

export const changePopupEditDialog = (type, name, value, path) => ({
    type: C.CHANGE_MAP_EDIT_DIALOG,
    payload: {type, name, value, path}
});

export const removeMapEditDialog = (data) => ({
    type: C.REMOVE_MAP_EDIT_DIALOG,
    payload: data
});

export const openInfo = (data) => ({
    type: C.OPEN_DIALOG_INFO,
    data
});

export const closeInfo = () => ({
    type: C.CLOSE_DIALOG_INFO
});

export const openDialogReferencePoint = (data) => ({
    type: C.OPEN_DIALOG_REFERENCE_POINT,
    data
});

export const closeDialogReferencePoint = () => ({
    type: C.CLOSE_DIALOG_REFERENCE_POINT
});

export const saveMapCreateModal = () => ({
    type: C.SAVE_MAP_CREATE_MODAL
});

export const openMapCreateModal = () => ({
    type: C.OPEN_MAP_CREATE_MODAL
});

export const closeMapCreateModal = () => ({
    type: C.CLOSE_MAP_CREATE_MODAL
});

export const closeMapDeleteModal = () => ({
    type: C.CLOSE_MAP_DELETE_MODAL
});

export const changeBackgroundMapCreateModal = (event) => ({
    type: C.CHANGE_BACKGROUND_MAP_CREATE_MODAL,
    event
});

export const editAction = (actionStatus, isSave) => ({
    type: C.EDIT_ACTION,
    payload: {actionStatus, isSave}
});

export const editActionArea = (payload) => ({
    type: C.EDIT_ACTION_AREA,
    payload
});

export const editActionGraph = (payload) => ({
    type: C.EDIT_ACTION_GRAPH,
    payload
});

export const editActionWall = (payload) => ({
    type: C.EDIT_ACTION_WALL,
    payload
});

export const editActionBoundsBg = (payload) => ({
    type: C.EDIT_ACTION_BOUNDS_BG,
    payload
});

export const editActionLandmarks = (payload) => ({
    type: C.EDIT_ACTION_LANDMARKS,
    payload
});

export const editAnchors = (isActive, isSave) => ({
    type: C.EDIT_ACTION_ANCHORS,
    isActive,
    isSave
});

export const selectMap = (selectedMap) => ({
    type: C.SELECT_MAP,
    selectedMap
});

export const updateListMaps = (listMaps) => ({
    type: C.UPDATE_LIST_MAPS,
    listMaps
});

export const showPanel = (isOpen, isLoad) => ({
    type: C.SHOW_PANEL,
    isOpen,
    isLoad
});

export const selectElementStyle = (value) => ({
    type: C.SELECT_ELEMENT_STYLE,
    value
});

export const checkedNotifications = (flag) => ({
    type: C.CHECKED_NOTIFICATIONS,
    flag
});

export const setSettingValue = (key, value, id) => ({
    type: C.SET_NEW_SETTING_VALUE_BY_KEY,
    key,
    value,
    id,
    itemSelectedMenu: "settings"
});

export const openMapEdit = () => ({
    type: C.OPEN_MAP_EDIT
});

export const editDialog = () => ({
    type: C.OPEN_MAP_EDIT
});

export const openMapEditPropsModal = () => ({
    type: C.OPEN_MAP_EDIT_PROPS_MODAL
});

export const saveMapEditPropsModal = () => ({
    type: C.SAVE_MAP_EDIT_PROPS_MODAL
});

export const closeMapEditPropsModal = () => ({
    type: C.CLOSE_MAP_EDIT_PROPS_MODAL
});

export const changeBackgroundMapEditPropsModal = (event) => ({
    type: C.CHANGE_BACKGROUND_MAP_EDIT_PROPS_MODAL,
    event
});

export const deleteMapModal = (event) => ({
    type: C.DELETE_MAP_EDIT_PROPS_MODAL,
    event
});

export const homewardMap = (event) => ({
    type: C.MAP_HOMEWARD
});

export const openRootMap = () => ({
    type: C.OPEN_MAP_ROOT
});

export const closeRootMap = (mapId) => ({
    type: C.CLOSE_MAP_ROOT,
    mapId
});

export const rtModeMap = (status) => ({
    type: C.MAP_RTMODE,
    status
});

export const toggleRtConsist = (rtConsist) => ({
    type: C.MAP_RTCONSIST,
    rtConsist
});

export const toggleRtTrace = (status) => ({
    type: C.MAP_RTTRACE,
    status
});

export const editingDataSelect = (itemSelectedMenu) => ({
    type: C.EDITING_DATA__SELECT,
    itemSelectedMenu
});

export const editingDataCancel = (feature, itemSelectedMenu) => ({
    type: C.EDITING_DATA__CANCEL,
    feature,
    itemSelectedMenu
});

export const editingDataSave = (itemSelectedMenu) => ({
    type: C.EDITING_DATA__SAVE,
    itemSelectedMenu
});

export const editingDataEdit = () => ({
    type: C.EDITING_DATA__EDIT
});

export const editingDataCreate = () => ({
    type: C.EDITING_DATA__CREATE
});

export const editingDataDelete = () => ({
    type: C.EDITING_DATA__DELETE
});

export const toggleMeasureDistance = () => ({
    type: C.TOGGLE_MEASURE_DISTANCE
});

export const deactivateMeasureDistance = () => ({
    type: C.DEACTIVATE_MEASURE_DISTANCE
});

export const deactivateReferenceMode = () => ({
    type: C.DEACTIVATE_REFERENCE_MODE
});

export const actionAddAcceptedNotify = (data) => {
    return {
        type: C.NOTIFY_EVENTS_ACCEPTED,
        data
    }
};

export const actionAddInfoNotify = (data) => {
    return {
        type: C.NOTIFY_EVENTS_INFO,
        data
    }
};

export const actionAddDangerNotify = (data) => {
    return {
        type: C.NOTIFY_EVENTS_DANGER,
        data
    }
};

export const togglePanel = (data) => {
    return {
        type: C.TOGGLE_PANEL,
        data
    }
}
