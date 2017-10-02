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
} from "./constants/settings";

//todo архитектурно будет более красиов, если ты вынесешь это в отельную папочку и будешь подключать, потому что на уровне корня это не смотрится
let setDefaultSettingsOptions = options => {

    options[devicesPanelIntervalUpdate] = 100;
    options[devicesPanelDeviceHeaderType] = "title";

    options[devicePropsShow.devType] = true;
    options[devicePropsShow.mac] = true;
    options[devicePropsShow.title] = true;
    options[devicePropsShow.isOnMap] = false;
    options[devicePropsShow.battery] = true;
    options[devicePropsShow.imu] = false;
    options[devicePropsShow.features] = false;
    options[devicePropsShow.location] = true;
    options[devicePropsShow.state] = false;
    options[devicePropsShow.cycle] = true;
    options[devicePropsShow.version] = false;
    options[devicePropsShow.ts] = false;

    options[mapDevicesClusterSize] = 1;
    options[mapDeviceExtendedInfoVisibility] = true;

    options[eventVisibilityPopUpField.id] = false;
    options[eventVisibilityPopUpField.name] = true;
    options[eventVisibilityPopUpField.mac] = true;
    options[eventVisibilityPopUpField.deviceName] = true;
    options[eventVisibilityPopUpField.post] = true;
    options[eventVisibilityPopUpField.area] = true;
    options[eventVisibilityPopUpField.time] = false;
    options[eventVisibilityPopUpField.timeConfirmation] = true;
    options[eventVisibilityPopUpField.signalLevel] = false;
    options[eventVisibilityPopUpField.batteryLevel] = true;

    options[eventTableField.num] = true;
    options[eventTableField.id] = true;
    options[eventTableField.mac] = true;
    options[eventTableField.deviceName] = true;
    options[eventTableField.name] = true;
    options[eventTableField.time] = true;
    options[eventTableField.managerName] = false;
    options[eventTableField.timeConfirmation] = false;
};

export default setDefaultSettingsOptions;