import React, {Component} from 'react'
import {translate} from "react-i18next";
import CSSModules from "react-css-modules"
import styles from '../css/style.scss'

// import SettingsSelect from '../containers/SettingsSelect'
// import MapSelect from '../containers/MapSelect'
// import MapHomewardBtn from "../containers/MapHomewardBtn"
// import MeasureDistanceBtn from "../containers/MeasureDistanceBtn"
// import PopupEditDialog from "../containers/PopupEditDialog"
// import MapCreateModal from "../containers/MapCreateModal"
// import MapDeleteModal from "../containers/MapDeleteModal"
// import RTModeSelect from '../containers/RTModeSelect'
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

        {/*if (mapRoot) {*/}
            {/*leftGroup = <div styleName="left-group">*/}
                {/*<p1>{t("rootMap.title")}</p1>*/}
            {/*</div>;*/}
            {/*let mapId = idSelectedMap || storage.get('currentMap');*/}
            {/*let mapInfo = listMaps.find(item => {*/}
                {/*return item.map_id == mapId*/}
            {/*});*/}
            {/*middleGroup = <div styleName="middle-group">*/}
                {/*<p2>{`${t("rootMap.selected")}: ${mapInfo.name} (${mapInfo.map_id})`}</p2>*/}
            {/*</div>;*/}
            {/*rightGroup = <div styleName="right-group">*/}
            {/*</div>*/}
        {/*} else {*/}
            {/*leftGroup = <div styleName="left-group">*/}
                {/*<MapSelect />*/}
            {/*</div>;*/}
            {/*middleGroup = <div styleName="middle-group">*/}
                {/*<SettingsSelect />*/}
                {/*<MapCreateModal />*/}
                {/*<MapDeleteModal />*/}
                {/*<PopupEditDialog />*/}
            {/*</div>;*/}
            {/*rightGroup = <div styleName="right-group">*/}
                {/*<div styleName="right-group-inner">*/}
                    {/*<ReportsBtn />*/}
                    {/*<ARMSelect />*/}
        //             <MapHomewardBtn />
        //             <RTModeSelect />
        //             <MeasureDistanceBtn />
        //         </div>
        //     </div>;
        // }

        return <div styleName="content">
            {leftGroup}
            {middleGroup}
            {rightGroup}
        </div>
    };
}

export default translate('maps')(CSSModules(App, styles))
