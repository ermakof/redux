/**
 * Created by ermakof on 30.09.17.
 */
import _ from "underscore";
import CSSModules from "react-css-modules";
import styles from "../css/style.scss";
import React, {PropTypes, Component} from 'react'
import {translate} from "react-i18next";
import 'react-select/dist/react-select.css';
import ReactTooltip from 'react-tooltip';

import {
    MenuItem,
    Dropdown,
    Button
} from "react-bootstrap";

class RTModeSelect extends Component {

    constructor(props) {
        super(props);
        let mode = {
            radius: false,
            trace: false,
            metering: false
        };
        this.state = {
            isOpen: false,
            mode: mode,
            disabled: true
        };
    }

    render() {
        let {t, list, rtModeMap, toggleRtConsist} = this.props;

        let owner = this;
        let mode = this.state.mode;
        let disabled = this.state.disabled;
        let style = {color: `#0000${disabled ? '00' : 'FF'}`};

        let setChecker = (value) => {
            let newState = _.clone(owner.state);
            newState.mode[value] = !newState.mode[value];
            owner.setState(newState);
            toggleRtConsist(newState.mode);
        };

        let toggleRTMode = () => {
            let newState = _.clone(owner.state);
            let flag = !owner.state.disabled;
            newState.disabled = flag;
            owner.setState(newState);
            rtModeMap(!flag);
        };

        let toggleDropDown = (e, context) => {
            if (context._targetInst == undefined ||
                context._targetInst._tag == "button") {
                owner.setState({
                    isOpen: !owner.state.isOpen,
                });
            }
        };

        let menuItems = null;
        if (list) {
            let arr = Object.keys(list);
            menuItems = arr.map((val, ind) => {
                let rez = null;
                if (val == 'null' && list[val] === null) {
                    rez = <MenuItem key={ind} divider/>;
                } else if (list[val] && list[val].header) {
                    rez = <MenuItem key={ind} header>
                        <div styleName="block-row">
                            <div styleName="block-col">
                                {t(`rtMode.${val}`).toUpperCase()}
                            </div>
                        </div>
                    </MenuItem>
                } else {
                    let menuIcon = null;
                    if (list[val] && list[val].icon) {
                        menuIcon = <div styleName="rt-menu_block-col-icon">
                            <i className={list[val].icon}></i>
                        </div>
                    }
                    rez = <MenuItem key={ind}
                                    disabled={disabled}
                                    onSelect={setChecker}
                                    eventKey={val}>
                        <div styleName="rt-menu_block-row">
                            {menuIcon}
                            <div styleName="rt-menu_block-col-check">
                                <i className={`fa fa${mode[val] ? '-check' : ''}-square-o`}></i>
                            </div>
                            <div styleName="rt-menu_block-col-text">
                                {t(`rtMode.${val}`)}
                            </div>
                        </div>
                    </MenuItem>;
                }
                return rez;
            });
            menuItems.unshift(<MenuItem key={menuItems.length}
                                        onSelect={toggleRTMode}
                                        eventKey={""}>
                <div styleName="rt-menu_block-row">
                    <div styleName="rt-menu_block-col-text">
                        {t(`rtMode.${disabled ? 'on' : 'off'}`)}
                    </div>
                    <div styleName="rt-menu_block-col-check">
                        <i className={`fa fa-toggle-o${disabled ? 'ff' : 'n'}`} style={style}></i>
                    </div>
                </div>
            </MenuItem>);
        }

        let isDisable = false;

        return <div styleName="middle-group">
            <ReactTooltip id='rtModeSelectId' type="info" place="right">
                <span>{t('rtMode.toolTip')}</span>
            </ReactTooltip>
            <Dropdown disabled={isDisable}
                      id="vertical-drop_down-rt-mode"
                      pullRight
                      open={this.state.isOpen}
                      onToggle={toggleDropDown}
            >
                <Dropdown.Toggle data-tip data-for='rtModeSelectId'>
                    <i className="fa fa-crosshairs" style={style}> </i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {menuItems}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    }
}

class CustomToggle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onClick(e);
    }

    render() {
        return (
            <Button onClick={this.handleClick}>
                {this.props.children}
            </Button>
        );
    }
}

export default translate('maps')(CSSModules(RTModeSelect, styles));