/**
 * Created by ermak on 02.06.17.
 */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import EditGroupBtn from "../components/EditGroupBtn";

const mapStateToProps = (state, ownProps) => {
    let setting = state.topPanel.selectSettings;
    return {
        visible: setting.item == ownProps.name,
        title: ownProps.title,
        btnProps: setting.list[ownProps.name],
        enabled: setting.list[ownProps.name],
        update: setting.update,
        idSelectedMap: state.mapSelect.idSelectedMap
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
};

const editGroupBtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditGroupBtn);

export default editGroupBtn
