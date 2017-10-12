/**
 * Created by ermak on 26.10.16.
 */
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import App from "../components/App";

const mapStateToProps = (state, ownProps) => {
    let p = state.topPanel;
    return {
        idSelectedMap: state.mapSelect.idSelectedMap,
        listMaps: state.mapSelect.listMaps,
        referencePoint: p.referencePoint.visible
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
};

const app = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default app
