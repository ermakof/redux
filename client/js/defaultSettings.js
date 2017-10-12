/**
 * Created by ermak on 09.03.17
 */
'use strict';

import {
    mapDeviceExtendedInfoVisibility,
    devicesPanelIntervalUpdate,
    devicePropsShow,
    devicesPanelDeviceHeaderType,
    mapDevicesClusterSize
} from "./constants/settings";

let setDefaultSettingsOptions = options => {

    options[devicesPanelIntervalUpdate] = 100;
    options[devicesPanelDeviceHeaderType] = "title";

    options[devicePropsShow.devType] = true;

    options[mapDevicesClusterSize] = 1;
    options[mapDeviceExtendedInfoVisibility] = true;

};

export default setDefaultSettingsOptions;