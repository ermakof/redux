/**
 * Created by ermakof on 30.09.17.
 */
import CSSModules from "react-css-modules";
import styles from "../css/style.scss";
import React, {PropTypes, Component} from 'react'
import {translate} from "react-i18next";
import 'react-select/dist/react-select.css';
import ReactTooltip from 'react-tooltip';
import SettingsModal from "../containers/SettingsModal"
import ExitGroupBtn from "../containers/ExitGroupBtn"
import EditGroupBtn from "../containers/EditGroupBtn"

import {
    MenuItem,
    DropdownButton
} from "react-bootstrap";


class SettingsSelect extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {t, list, item, editingDataSelect, idSelectedMap} = this.props;

        let menuItems = null;
        if (list) {
            let arr = Object.keys(list);
            menuItems = arr.map((v, ind) => {
                let rez = null;
                if (v == 'null' && list[v] === null) {
                    rez = <MenuItem key={ind} divider/>;
                } else if (list[v] && list[v].header) {
                    rez = <MenuItem key={ind} header>
                        <div styleName="block-row">
                            <div styleName="block-col">
                                {t(`settings.select.items.${v}`).toUpperCase()}
                            </div>
                        </div>
                    </MenuItem>;
                } else {
                    let disable = list[v].mapRequired && idSelectedMap == null;
                    if (list[v] && list[v].icon) {
                        rez = <MenuItem key={ind} eventKey={v} disabled={disable}>
                            <div styleName="block-row">
                                <div styleName="block-col">
                                    <i className={list[v].icon}></i>
                                </div>
                                <div styleName="block-col">
                                    {t(`settings.select.items.${v}`)}
                                </div>
                            </div>
                        </MenuItem>;
                    } else {
                        rez = <MenuItem key={ind} eventKey={v} disabled={disable}>
                            {t(`settings.select.items.${v}`)}
                        </MenuItem>;
                    }
                }
                return rez;
            });
        }

        let data = null;
        let isDisable = false;
        let title = t(`settings.select.items.${item}`).toUpperCase();

        if (item) {
            if (item == "settings") {
                data = <SettingsModal />;
            } else {
                isDisable = true;
                data = <div styleName="btn">
                    <EditGroupBtn name={item} title={title}/>
                    <ExitGroupBtn name={item} />
                </div>;
            }
        }

        let select = (e) => {
            editingDataSelect(e);
        };

        return <div styleName="middle-group">
            <ReactTooltip id='settingsSelectId' type="info" place="right">
                <span>{t('btn.settings.tooltip')}</span>
            </ReactTooltip>
            <DropdownButton data-tip data-for='settingsSelectId'
                            disabled={isDisable}
                            title={t('settings.select.title')}
                            id="bg-vertical-dropdown-2"
                            onSelect={select}
            >
                {menuItems}
            </DropdownButton>
            {data}
        </div>
    }
}

export default translate('maps')(CSSModules(SettingsSelect, styles));