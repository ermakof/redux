/**
 * Created by ermakof on 30.09.17.
 */
import i18next from "i18next";
import * as C from "../constants";
import options from "./../../options";

import {
    commonLng,
} from '../../constants/settings'

const initialState = () => {
    let init = {
        visible: false,
        selectedProp: "font",
        selectedTab: "common",
        items: options.settings.admin,
        old: options.settings.admin,
        selected: {
            key: null,
            val: null
        }
    };
    let lng = init.items[commonLng];
    if (lng == undefined) {
        init.items[commonLng] = i18next.language;
    }
    return init;
};

const settings = (state = initialState(), action) => {

    if (action.itemSelectedMenu !== "settings") {
        return state;
    }

    let newState = Object.assign({}, state);

    switch (action.type) {
        case C.SET_NEW_SETTING_VALUE_BY_KEY: {
            if (action.key == commonLng) {
                i18next.changeLanguage(action.value, (err, t) => {
                    console.log(t('common:language'));
                });
            }
            newState.items[action.key] = action.value;
            newState.selected = {
                key: action.key,
                val: action.value
            };
            return newState;
        }
        case C.EDITING_DATA__SAVE: {
            newState.visible = false;
            return newState;
        }
        case C.EDITING_DATA__CANCEL: {
            newState.visible = false;
            return newState;
        }
        case C.EDITING_DATA__SELECT: {
            newState.visible = true;
            return newState;
        }
        default:
            return state
    }
};

export default settings

