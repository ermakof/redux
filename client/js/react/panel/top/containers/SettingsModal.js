/**
 * Created by ermak on 04.08.16.
 */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import SettingsModal from "../components/Modal/SettingsModal";

const mapStateToProps = (state, ownProps) => {
    let settings = state.settings;
    return {
        items: settings.items,
        visible: settings.visible
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
};

const settingsModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsModal);

export default settingsModal
