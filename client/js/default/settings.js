/**
 * Created by ermak on 09.03.17
 */
'use strict';

import {
    mapDeviceExtendedInfoVisibility,
    devicesPanelIntervalUpdate,
    devicePropsShow,
    devicesPanelDeviceHeaderType,
    mapDevicesClusterSize,
    eventVisibilityPopUpField,
    eventTableField,
} from "../constants/settings";

let setDefaultSettingsOptions = options => {

    options[devicesPanelIntervalUpdate] = 100;
    options[devicesPanelDeviceHeaderType] = "title";

};

export default setDefaultSettingsOptions;