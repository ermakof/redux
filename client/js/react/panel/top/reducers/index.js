import {combineReducers} from "redux";
import topPanel from "./topPanel";
import mapSelect from "./mapSelect";

const rootReducer = combineReducers({
    topPanel,
    mapSelect
});

export default rootReducer
