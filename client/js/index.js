/**
 * Created by ermak on 30.09.17.
 */
import "../css/react-bootstrap-table-all.min.css";
import "../css/react-simpletabs.min.css";
import "../css/tabs-custom.css";
import "./libs/bootstrap/fonts/glyphicons-halflings-regular.ttf";
import "./libs/bootstrap/css/bootstrap-theme.css";
import "./libs/bootstrap/css/bootstrap.css";
import "../css/client.css";

import i18next from "i18next";
import "../js/utils/log/";
import "./utils/utils"
import {localeRu, localeEn} from "./init";
import "./databind/streams";
import "./react/dialog";
import "./leaflet/init";
import "./react/panel/";
import "./api/settings";
import './databind/carriers'

require("font-awesome-webpack");
require("../css/fonts/material-icons.css");

window.clientType = 'admin';