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
    ControlLabel
} from "react-bootstrap";
import {
    commonLng
} from '../../../../constants/settings'

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

        //todo вынести в качестве методов
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
                        <hr/>
                        <h2>{t("settings.devices.body.title")}</h2>
                        <ControlLabel>{t("settings.devices.body.choose")}</ControlLabel>
                    </Tab>
                    <Tab eventKey={2} title={t("settings.area.title")}>
                        <h1>{t("settings.area.title")}</h1>
                        <hr/>
                        <div styleName="tab-block-row">
                            <div styleName="tab-block-col">
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
                        </div>
                    </Tab>
                    <Tab eventKey={5} title={t("settings.filters.title")}>
                        <h1>{t("settings.filters.choose")}</h1>
                        <hr/>
                        <div styleName="tab-block-row">
                            <div styleName="tab-block-col">
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