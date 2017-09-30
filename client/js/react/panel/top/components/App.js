import React, {Component} from 'react'
import {translate} from "react-i18next";
import CSSModules from "react-css-modules"
import styles from '../css/style.scss'

import MapSelect from '../containers/MapSelect'
import Notification from "../containers/Notification"

// import SettingsSelect from '../containers/SettingsSelect'
// import MapHomewardBtn from "../containers/MapHomewardBtn"
// import MeasureDistanceBtn from "../containers/MeasureDistanceBtn"
// import PopupEditDialog from "../containers/PopupEditDialog"
// import MapCreateModal from "../containers/MapCreateModal"
// import MapDeleteModal from "../containers/MapDeleteModal"
import RTModeSelect from '../containers/RTModeSelect'
// import ReportsBtn from "./ReportsBtn"
// import ARMSelect from "../containers/ARMSelect"
// import ReferencePointDialog from "../containers/MapReferencePointModal"

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {t, idSelectedMap, listMaps, mapRoot, referencePoint} = this.props;
        let leftGroup = null;
        let middleGroup = null;
        let rightGroup = null;

        leftGroup = <div styleName="left-group">
            <MapSelect />
        </div>;
        middleGroup = <div styleName="middle-group">
            {/*<SettingsSelect />*/}
            {/*<MapCreateModal />*/}
            {/*<MapDeleteModal />*/}
            {/*<PopupEditDialog />*/}
        </div>;
        rightGroup = <div styleName="right-group">
            <div styleName="right-group-inner">
                {/*<ReportsBtn />*/}
                {/*<ARMSelect />*/}
                {/*<MapHomewardBtn />*/}
                <RTModeSelect />
                {/*<MeasureDistanceBtn />*/}
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
