/**
 * Created by ermak on 03.02.17.
 */
import * as C from "../constants"

export const editAction = (actionStatus, isSave) => ({
    type: C.EDIT_ACTION,
    payload: {actionStatus, isSave}
});

export const editDialog = () => ({
    type: C.OPEN_MAP_EDIT
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

export const setSettingValue = (key, value, id) => ({
    type: C.SET_NEW_SETTING_VALUE_BY_KEY,
    key,
    value,
    id,
    itemSelectedMenu: "settings"
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
