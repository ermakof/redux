/**
 * Created by ermak on 30.09.17.
 */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import SettingsSelect from "../components/SettingsSelect";

const mapStateToProps = (state, ownProps) => {
    let menu = state.topPanel.selectSettings;
    return {
        item: menu.item,
        list: menu.list,
        idSelectedMap: state.mapSelect.idSelectedMap

    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
};

const settingsSelect = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsSelect);

export default settingsSelect
