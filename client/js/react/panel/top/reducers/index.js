import {combineReducers} from "redux";
import topPanel from "./topPanel";
import mapSelect from "./mapSelect";
import notification from "./notification";
import selectRTMode from "./selectRTMode";
import settings from "./settings";

const rootReducer = combineReducers({
    topPanel,
    mapSelect,
    notification,
    selectRTMode,
    settings
});

export default rootReducer
