/**
 * Created by ermak on 30.09.17.
 */
import _ from "underscore";
import * as C from "../constants";
import options from "./../../../options";

const getMapNameById = (mapId, listMaps) => {
    if (_.isArray(listMaps) && listMaps.length > 0) {
        let arr = listMaps.filter(obj => {
            return obj.map_id == mapId
        });
        if (_.isArray(arr) && arr.length > 0) {
            return arr[0].name
        }
    }
    return null;
};

const initialState = {
    disabled: false,
    idSelectedMap: options.panel.top.map.idSelected,
    listMaps: options.panel.top.map.list,
    tsUpdate: new Date().getTime(),
    nameSelectedMap: null
};

const mapSelect = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case C.SELECT_MAP: {
            let newId = _.isString(action.selectedMap) ? action.selectedMap : null;
            let oldId = newState.idSelectedMap;
            if (newId) {
                if (newId == oldId) {
                    return state;
                }
                newState.nameSelectedMap = getMapNameById(newId, newState.listMaps);
            }
            newState.idSelectedMap = newId;
            return newState;
        }
        case C.UPDATE_LIST_MAPS: {
            let mapList = action.listMaps;
            if (mapList.length > 0) {
                let mapId = storage.get("currentMap") || settings.get(selectedMapId) || mapList[0].map_id;
                newState.listMaps = mapList;
                newState.idSelectedMap = mapId;
                newState.nameSelectedMap = getMapNameById(mapId, mapList);
            }
            return newState;
        }
        default:
            return state
    }
};

export default mapSelect

