/**
 * Created by ermakof on 30.09.17.
 */
import CSSModules from "react-css-modules";
import styles from "../css/style.scss";
import React, {PropTypes, Component} from 'react'
import {translate} from "react-i18next";
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ReactTooltip from 'react-tooltip';

class SelectMap extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {t, selectMap, listMaps, idSelectedMap, disabled} = this.props;

        let data = null;
        if (listMaps && listMaps.length > 0) {
            data = listMaps.map(item => {
                return {value: item.map_id, label: `${item.name}`}
            });
        }

        let change = (idMap) => {
            if (idMap) {
                selectMap(idMap);
                hideToolTip();
            }
        };
        let hideToolTip = () =>  ReactTooltip.hide();

        return <div styleName="select">
            <ReactTooltip id='selectMap' type="info" place="bottom">
                <span>{t('select.toolTip')}</span>
            </ReactTooltip>
            <div data-tip data-for='selectMap'>
                <Select placeholder={t('select.placeHolder')}
                        autofocus
                        options={data}
                        simpleValue
                        clearable={false}
                        name="rtls-maps"
                        disabled={disabled}
                        value={idSelectedMap}
                        onChange={change}
                        searchable={true}
                        onOpen={hideToolTip}
                />
            </div>
        </div>
    }
}

export default translate('maps')(CSSModules(SelectMap, styles));