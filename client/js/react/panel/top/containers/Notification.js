/**
 * Created by ermakof on 30.09.17.
 */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Notification from '../components/Notification'

import * as actions from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {
        notificationProps: state.notification
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(actions, dispatch)
};

const ContainerNotification = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);

export default ContainerNotification
