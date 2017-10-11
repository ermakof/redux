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

class EditGroupBtn extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {editingDataEdit, editingDataCreate, editingDataDelete} = this.props;
        const {t, visible, disabled, title, btnProps, idSelectedMap} = this.props;

        let rez = null;
        if (visible) {
            let editBtn = {
                visible: true,
                activated: false,
                tag: null
            };
            let createBtn = {
                visible: true,
                activated: false,
                tag: null
            };
            let deleteBtn = {
                visible: true,
                activated: false,
                tag: null
            };
            if (btnProps) {
                let options = btnProps.options;
                if (options) {
                    if (options.edit) {
                        editBtn.visible = options.edit.isVisible;
                        editBtn.activated = options.edit.activated;
                    } else {
                        editBtn.visible = false;
                    }
                    if (options.create) {
                        createBtn.visible = options.create.isVisible;
                        createBtn.activated = options.create.activated;
                    } else {
                        createBtn.visible = false;
                    }
                    if (options.delete) {
                        deleteBtn.visible = options.delete.isVisible;
                        deleteBtn.activated = options.delete.activated;
                    } else {
                        deleteBtn.visible = false;
                    }
                }
            }
            let countBtn = 0;
            if (editBtn.visible) {
                editBtn.tag = <Button disabled={disabled}
                                      onClick={editingDataEdit}>
                    <i data-tip data-for='editBtnIcon'
                       className="fa fa-pencil fa-1x"
                       style={{
                           color: `#0000${editBtn.activated ? 'FF' : '00'}`,
                           cursor: 'pointer'
                       }}>
                    </i>
                </Button>;
                countBtn++;
            }
            if (createBtn.visible) {
                createBtn.tag = <Button disabled={disabled}
                                        onClick={editingDataCreate}>
                    <i data-tip data-for='createBtnIcon'
                       className="fa fa-plus fa-1x"
                       style={{
                           color: `#0000${createBtn.activated ? 'FF' : '00'}`,
                           cursor: 'pointer'
                       }}>
                    </i>
                </Button>;
                countBtn++;
            }
            if (deleteBtn.visible) {
                deleteBtn.tag = <Button disabled={disabled || idSelectedMap == null}
                                        onClick={editingDataDelete}>
                    <i data-tip data-for='deleteBtnIcon'
                       className="fa fa-trash fa-1x"
                       style={{
                           color: `#0000${deleteBtn.activated ? 'FF' : '00'}`,
                           cursor: 'pointer'
                       }}>
                    </i>
                </Button>;
                countBtn++;
            }
            if (countBtn > 0) {
                rez = <div>
                    <ReactTooltip id='editBtnIcon' place="bottom" type="info">
                        <span>{t("btn.edit.tooltip")}</span>
                    </ReactTooltip>
                    <ReactTooltip id='createBtnIcon' place="bottom" type="info">
                        <span>{t("btn.create.tooltip")}</span>
                    </ReactTooltip>
                    <ReactTooltip id='deleteBtnIcon' place="bottom" type="info">
                        <span>{t('btn.delete.tooltip')}</span>
                    </ReactTooltip>
                    <ButtonGroup>
                        {editBtn.tag}
                        {createBtn.tag}
                        {deleteBtn.tag}
                    </ButtonGroup>
                </div>
            }
        }
        return <div styleName="edit-btn-grp">
            <p>{title}</p>
            {rez}
        </div>
    }
}

export default translate('maps')(CSSModules(EditGroupBtn, styles));