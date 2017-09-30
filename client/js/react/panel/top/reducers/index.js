import {combineReducers} from "redux";
import topPanel from "./topPanel";
import selectRTMode from "./selectRTMode";
import measureDistance from "./measureDistance";
import mapSelect from "./mapSelect";
import settings from "./settings"
import selectARM from "./selectARM"

const rootReducer = combineReducers({
    topPanel,
    selectRTMode,
    measureDistance,
    mapSelect,
    settings,
    selectARM
});

export default rootReducer
