/**
 * Created by ermak on 30.09.17.
 */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/rtmode";
import RTModeSelect from "../components/RTModeSelect";

const mapStateToProps = (state, ownProps) => {
    let menu = state.selectRTMode;
    return {
        item: menu.item,
        list: menu.list
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
};

const rtModeSelect = connect(
    mapStateToProps,
    mapDispatchToProps
)(RTModeSelect);

export default rtModeSelect
