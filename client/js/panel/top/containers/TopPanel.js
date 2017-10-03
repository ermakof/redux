/**
 * Created by ermak on 02.08.16.
 */
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import TopPanel from '../components/TopPanel'
import * as actions from '../actions/panel'

const mapStateToProps = (state, ownProps) => {
    return {
        isOpen: state.topPanel.styles.visible,
        isLoad: state.topPanel.isLoad
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
};

const topPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopPanel);

export default topPanel
