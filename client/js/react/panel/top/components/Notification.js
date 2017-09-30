/**
 * Created by ermakof on 30.09.17.
 */
import React from 'react';
import NotificationSystem from 'react-notification-system';
import { translate } from 'react-i18next';

import options from "../../../../options"

import * as C from '../constants'

class Notification extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.notificationSystem = this.refs.notificationSystem;
    }

    componentWillReceiveProps(newProps) {
        const {notificationProps, t} = newProps;
        let {data, type} = notificationProps;

        if(!type) return;

        let level = null;

        switch (type) {
            case C.NOTIFY_EVENTS_DANGER: {
                level = "warning";
                break;
            }
            case C.NOTIFY_EVENTS_ACCEPTED: {
                level = "success";
                break;
            }
            case C.NOTIFY_EVENTS_INFO: {
                level = "info";
                break;
            }
            default: {}
        }

        let title = t("counters." + level),
            fields = [],
            key = 0;

        if (data) {
            data.id && fields.push(<p key={++key}> {t("popup.id")}: {data.id}         </p>);
            data.name && fields.push(<p key={++key}> {t("popup.name")}: {data.name}   </p>);
            data.mac && fields.push(<p key={++key}> {t("popup.mac")}: {data.mac}      </p>);
            data.msg && fields.push(<p key={++key}> {'Сообщение: '}: {data.msg}       </p>);
        }

        let children = !!fields.length && fields;

        let position = "br";
        this.notificationSystem.addNotification({
            title,
            children,
            level,
            position
        });

    }

    render() {
        return <NotificationSystem ref="notificationSystem"/>
    }
}

export default translate('events')(Notification);