/**
 * Created by ermak on 30.09.17.
 */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/selectMap";
import MapSelect from "../components/MapSelect";

const mapStateToProps = (state, ownProps) => {
    let mapSelect = state.mapSelect;
    return {
        idSelectedMap: mapSelect.idSelectedMap,
        listMaps: mapSelect.listMaps,
        disabled: state.topPanel.selectSettings.item != null || mapSelect.idSelectedMap == null,
        tsUpdate: mapSelect.tsUpdate
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
};

const mapSelect = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapSelect);

export default mapSelect
