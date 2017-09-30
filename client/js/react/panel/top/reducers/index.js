import {combineReducers} from "redux";
import topPanel from "./topPanel";
import mapSelect from "./mapSelect";
import notification from "./notification";
import selectRTMode from "./selectRTMode";

const rootReducer = combineReducers({
    topPanel,
    mapSelect,
    notification,
    selectRTMode
});

export default rootReducer
