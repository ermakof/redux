/**
 * Created by ermak on 31.07.16.
 */
import _ from "underscore";
import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "../../css/style.scss";
import {translate} from "react-i18next";
import {
    Tabs,
    Tab,
    Button,
    Modal,
    FormGroup,
    FormControl,
    ControlLabel,
    Checkbox
} from "react-bootstrap";
import options from '../../../../../options'
import {
    devicePropsShow,
    eventTableField,
    eventVisibilityPopUpField,
    devicesPanelDeviceHeaderType,
    mapDeviceExtendedInfoVisibility,
    devicesPanelIntervalUpdate,
    devicesPanelMaxRTMode,
    devicesPanelTraceSteps,
    commonLng,
    mapDevicesClusterSize,
    mapDeviceVisibleLocationBt,
    graphPropsShow,
    areaPropsShow
} from '../../../../../constants/settings'

import {
    NOTIFY_EVENTS_DANGER,
} from '../../constants'

const CUSTOM = "CUSTOM";

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: _.clone(this.props.items),
            old: _.clone(this.props.items)
        };
    }

    render() {
        const {t, editingDataCancel, editingDataSave, setSettingValue, visible} = this.props;

        if (!visible) {
            return null;
        }

        let owner = this;
        let list = this.state.items;
        let oldList = this.state.old;

        function setValue(e) {
            let {name, value} = e.target;
            list[name] = value;
            owner.setState(list);
        }

        function setChecker(e) {
            let {name, value} = e.target;
            let flag = !list[name];
            list[name] = flag;
            owner.setState({items: list});
        }

        const close = () => {
            owner.setState({items: oldList});
            editingDataCancel(null, "settings");
        };

        const save = () => {
            Object.keys(list).forEach(item => {
                let newVal = list[item];
                let oldVal = oldList[item];
                if (newVal != oldVal) {
                    setSettingValue(item, newVal);
                    console.info(`Save setting item '${item}': ${oldVal} => ${newVal}`);
                }
            });
            editingDataSave("settings");
        };

        let mask = "settings.devices.body.visibility";
        let flags = {
            devType: list[devicePropsShow.devType],
            mac: list[devicePropsShow.mac],
            title: list[devicePropsShow.title],
            isOnMap: list[devicePropsShow.isOnMap],
            battery: list[devicePropsShow.battery],
            imu: list[devicePropsShow.imu],
            features: list[devicePropsShow.features],
            location: list[devicePropsShow.location],
            state: list[devicePropsShow.state],
            cycle: list[devicePropsShow.cycle],
            version: list[devicePropsShow.version],
            ts: list[devicePropsShow.ts],
            carrier: list[devicePropsShow.carrier]
        };
        let groupVisibilityCheck = null;

        let groupTabCountInput = null;
        let dialog = <Modal
            show={true}
            onHide={() => close()}
            container={this}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {t("settings.title")}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey={0} id="settings-panel">
                    <Tab eventKey={0} title={t("settings.common.title")}>
                        <h1>{t("settings.common.title")}</h1>
                        <hr/>
                        <h2>{t("settings.common.lng.title")}</h2>
                        <FormGroup >
                            <ControlLabel>{t("settings.common.lng.choose")}</ControlLabel>
                            <FormControl name={commonLng}
                                         defaultValue={list[commonLng]}
                                         onChange={setValue}
                                         componentClass="select"
                                         placeholder="select">
                                <option value="ru">{t("settings.common.lng.ru")}</option>
                                <option value="en">{t("settings.common.lng.en")}</option>
                            </FormControl>
                        </FormGroup>
                    </Tab>
                    <Tab eventKey={1} title={t("settings.devices.title")}>
                        <h1>{t("settings.devices.title")}</h1>
                        <hr/>
                        <h2>{t("settings.devices.header.title")}</h2>
                        <FormGroup >
                            <ControlLabel>{t("settings.devices.header.choose")}</ControlLabel>
                            <FormControl name={devicesPanelDeviceHeaderType}
                                         onChange={setValue}
                                         componentClass="select"
                                         defaultValue={list[devicesPanelDeviceHeaderType]}
                                         placeholder="select">
                                <option value="title">{t("settings.devices.header.name")}</option>
                                <option value="carrier">{t("settings.devices.header.carrier")}</option>
                                <option value="mac">{t("settings.devices.header.MAC")}</option>
                            </FormControl>
                        </FormGroup>
                        <hr/>

                        <h2>{t("settings.devices.body.title")}</h2>
                        <ControlLabel>{t("settings.devices.body.choose")}</ControlLabel>
                        <div styleName="tab-block-row">
                            <FormGroup styleName="tab-block-col">
                                <Checkbox onChange={setChecker}
                                          checked={flags.devType}
                                          name={devicePropsShow.devType}>{t(`${mask}.devtype`)}</Checkbox>
                            </FormGroup>
                        </div>
                        <div styleName="tab-block-row">
                            <div styleName="tab-block-col">
                                <FormGroup >
                                    <ControlLabel>{t("settings.devices.body.location.visibility.title")}</ControlLabel>
                                    <Checkbox onChange={setChecker}
                                              checked={list[mapDeviceVisibleLocationBt]}
                                              name={mapDeviceVisibleLocationBt}>{t("settings.devices.body.location.visibility.bluetooth")}</Checkbox>
                                </FormGroup>
                            </div>
                            <div styleName="tab-block-col">
                                <FormGroup >
                                    <ControlLabel>{t("settings.devices.body.extendedInfo.title")}</ControlLabel>
                                    <Checkbox onChange={setChecker}
                                              checked={list[mapDeviceExtendedInfoVisibility]}
                                              name={mapDeviceExtendedInfoVisibility}>{t("settings.devices.body.extendedInfo.visibility.title")}</Checkbox>
                                </FormGroup>
                            </div>
                        </div>
                        <div styleName="tab-block-row">
                            <div styleName="tab-block-col">
                                <FormGroup >
                                    <ControlLabel
                                        styleName="tab-block-col-header">{t("settings.devices.body.cluster.title")}</ControlLabel>
                                    <div>{t("settings.devices.body.cluster.size")}: {list[mapDevicesClusterSize]} </div>
                                    <input type="range"
                                           min={1}
                                           max={10000}
                                           name={mapDevicesClusterSize}
                                           onChange={setValue}
                                           value={list[mapDevicesClusterSize]}/>
                                </FormGroup>
                            </div>
                            <div styleName="tab-block-col">
                            </div>
                        </div>

                        <div styleName="tab-block-row">
                            <div styleName="tab-block-col">
                                <FormGroup >
                                    <div styleName="tab-block-row">
                                        <div styleName="tab-block-col">
                                            <ControlLabel styleName="tab-block-col-header">
                                                {t("settings.devices.body.rtMode.title")}
                                            </ControlLabel>
                                        </div>
                                    </div>
                                    <div styleName="tab-block-row">
                                        <div styleName="tab-block-col">
                                        </div>
                                    </div>
                                </FormGroup>
                            </div>
                        </div>

                    </Tab>
                    <Tab eventKey={2} title={t("settings.area.title")}>
                        <h1>{t("settings.area.title")}</h1>
                        <hr/>
                        <div styleName="tab-block-row">
                            <div styleName="tab-block-col">
                                <FormGroup >
                                    <ControlLabel>{t("settings.area.choose")}: </ControlLabel>
                                    <Checkbox onChange={setChecker}
                                              checked={list[areaPropsShow.id]}
                                              name={areaPropsShow.id}>{t("settings.area.id")}</Checkbox>
                                </FormGroup>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={3} title={t("settings.graph.title")}>
                        <h1>{t("settings.graph.title")}</h1>
                        <hr/>
                        <div styleName="tab-block-row">
                            <div styleName="tab-block-col">
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={4} title={t("settings.event.title")}>
                        <h1>{t("settings.event.choose")}</h1>
                        <hr/>
                        <div styleName="tab-block-row">
                            <div styleName="tab-block-col">
                            </div>
                            <div styleName="tab-block-col">
                                <h5 styleName="tab-block-col-header">{t("settings.event.visibility.popups.props._title")}</h5>
                                <FormGroup >
                                    <ControlLabel>{t("settings.event.visibility.popups.props._choose")}:</ControlLabel>
                                    <Checkbox onChange={setChecker}
                                              checked={list[eventVisibilityPopUpField.id]}
                                              name={eventVisibilityPopUpField.id}>{t("settings.event.visibility.popups.props.id")}
                                    </Checkbox>
                                </FormGroup>
                            </div>
                            <div styleName="tab-block-col">
                                <h5 styleName="tab-block-col-header">{t("settings.event.visibility.table.column._title")}</h5>
                                <FormGroup >
                                    <ControlLabel>{t("settings.event.visibility.table.column._choose")}:</ControlLabel>
                                    <Checkbox onChange={setChecker}
                                              checked={list[eventTableField.num]}
                                              name={eventTableField.num}>{t("settings.event.visibility.table.column.num")}</Checkbox>
                                </FormGroup>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={5} title={t("settings.filters.title")}>
                        <h1>{t("settings.filters.choose")}</h1>
                        <hr/>
                        <div styleName="tab-block-row">
                            <div styleName="tab-block-col">
                                {groupVisibilityCheck}
                            </div>
                            <div styleName="tab-block-col">
                                {groupTabCountInput}
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={save}> {t("settings.save")} </Button>
            </Modal.Footer>
        </Modal>;

        return <div styleName="modal">
            {dialog}
        </div>
    };
}

export default translate('maps')(CSSModules(Settings, styles));