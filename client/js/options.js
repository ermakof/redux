/**
 * Created by ermakof on 30.09.17.
 */

'use strict';

import setDefaultSettingsOptions from "./defaultSettings"

window.clientType = 'admin';

let options = {
    ip: "127.0.0.1",
    panel: {
        top: {
            settings: {
                styles: {
                    color: {
                        background: "change_background_color_panel",
                        font: "change_background_color_font"
                    }
                },
            },
            map: {
                list: [{
                    "map_id": "001",
                    "name": "Карта 1"
                }, {
                    "map_id": "002",
                    "name": "Карта 2"
                }, {
                    "map_id": "003",
                    "name": "Карта 3"
                }],
                idSelected: "001"
            },
            rtMode: {
                radius: false,
                trace: false,
                metering: false
            }
        }
    },
    settings: {
        admin: {}
    }
};

setDefaultSettingsOptions(options.settings[window.clientType]);

export default options;
