/**
 * Created by ermak on 03.02.17.
 */
import * as C from "../constants"

export const selectMap = (selectedMap) => ({
    type: C.SELECT_MAP,
    selectedMap
});

export const updateListMaps = (listMaps) => ({
    type: C.UPDATE_LIST_MAPS,
    listMaps
});
