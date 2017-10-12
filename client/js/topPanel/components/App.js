import React, {Component} from 'react'
import {translate} from "react-i18next";
import CSSModules from "react-css-modules"
import styles from '../css/style.scss'

import MapSelect from '../containers/MapSelect'
import SettingsSelect from '../containers/SettingsSelect'
import RTModeSelect from '../containers/RTModeSelect'

import Notification from "../containers/Notification"

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {t, idSelectedMap, listMaps, referencePoint} = this.props;
        let leftGroup = null;
        let middleGroup = null;
        let rightGroup = null;

        leftGroup = <div styleName="left-group">
            <MapSelect />
        </div>;
        middleGroup = <div styleName="middle-group">
            <SettingsSelect />
        </div>;
        rightGroup = <div styleName="right-group">
            <div styleName="right-group-inner">
                <RTModeSelect />
            </div>
        </div>;

        return <div styleName="content">
            {leftGroup}
            {middleGroup}
            {rightGroup}
            <Notification />
        </div>
    };
}

export default translate('maps')(CSSModules(App, styles))
