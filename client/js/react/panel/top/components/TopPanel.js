/**
 * Created by ermak on 11.06.16.
 */
import React, {PropTypes, Component} from 'react'
import {translate} from "react-i18next";
import CSSModules from "react-css-modules";
import styles from "../css/style.scss";
import App from "../containers/App"

class TopPanel extends Component {

    constructor(props) {
        super(props);
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(first) {
        const {showPanel,isOpen} = this.props;
        if (!first) showPanel(!isOpen);
    }

    componentWillMount() {
        this.togglePanel(true);
    }

    componentDidMount() {
        const {showPanel, isOpen} = this.props;
        showPanel(isOpen, true);
    }

    render() {
        const {showPanel, isOpen} = this.props;

        let custom = {
            height: "50px",
            top: isOpen ? "0px" : "-50px"
        };

        return (<div>
            <input styleName="open" id="top-box" type="checkbox" hidden/>
            <label styleName='top-btn'
                   id="topBtn"
                   htmlFor="top-box"
                   onClick={()=> {this.togglePanel(false)}}
                   style={{top: isOpen ? "50px" : "0px"}}>
                <i className={`fa fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
            </label>
            <div styleName='top-panel' id="topPanel" style={custom}>
                <App />
            </div>
        </div>)
    }
}

export default translate('top')(CSSModules(TopPanel, styles));
