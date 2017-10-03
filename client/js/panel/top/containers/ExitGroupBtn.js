/**
 * Created by ermak on 02.06.17.
 */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/editing";
import ExitGroupBtn from "../components/ExitGroupBtn";

const mapStateToProps = (state, ownProps) => {
    let btn = state.topPanel.exitGroupBtn;
    let setting = state.topPanel.selectSettings;
    return {
        isSave: btn.isSave,
        btnProps: setting.list[ownProps.name],
        visible: btn.visible
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
};

const exitGroupBtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExitGroupBtn);

export default exitGroupBtn
