/**
 * Created by ermak on 02.06.17.
 */
import React, {PropTypes, Component} from 'react'
import {translate} from "react-i18next";
import CSSModules from "react-css-modules";
import styles from "../css/style.scss";
import {ModalContainer, ModalDialog} from "react-modal-dialog";
import "react-select/dist/react-select.css";
import ReactTooltip from 'react-tooltip';
import {Button, ButtonGroup} from "react-bootstrap";

class ExitBtn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {t, btnProps, editingDataSave, editingDataCancel} = this.props;

        let rez = null;

        if (btnProps) {
            let options = btnProps.options;
            if (options.edit || options.create || options.delete || options.quit) {
                let btnSuccess = null;
                let btnCancel = null;
                let btnExit = null;
                if (options.quit && options.quit.type == "EXIT") {
                    btnExit = <Button data-tip data-for='mapBtnExitId'
                                      onClick={editingDataCancel}>
                        {`${t('btn.close.title')}  `}
                        <i className="fa fa-times"></i>
                    </Button>;
                } else {
                    btnSuccess = <Button data-tip data-for='mapBtnSaveId'
                                         bsStyle="success"
                                         onClick={editingDataSave}>
                        {t('btn.save.title')}
                    </Button>;
                    btnCancel = <Button data-tip data-for='mapBtnCancelId'
                                        onClick={editingDataCancel}>
                        <i className="fa fa-ban"></i>
                    </Button>;
                }
                rez = <div styleName="exit-btn-grp">
                    <ReactTooltip id='mapBtnSaveId' type="info" place="bottom">
                        <span>{t('btn.save.tooltip')}</span>
                    </ReactTooltip>
                    <ReactTooltip id='mapBtnCancelId' type="info" place="bottom">
                        <span>{t('btn.cancel.tooltip')}</span>
                    </ReactTooltip>
                    <ReactTooltip id='mapBtnExitId' type="info" place="bottom">
                        <span>{t('btn.close.tooltip')}</span>
                    </ReactTooltip>
                    <ButtonGroup>
                        {btnSuccess}
                        {btnCancel}
                        {btnExit}
                    </ButtonGroup>
                </div>;
            }
        }

        return <div>{rez}</div>
    }
}

export default translate('maps')(CSSModules(ExitBtn, styles));