/**
 * Created by ermakof on 30.09.17.
 */
import * as C from "./../constants";
import options from "./../../../options";

const initialState = {
    rtMode: false,
    rtConsist: options.rtMode,
    list: {
        'trace': {
            icon: "fa fa-paw"
        },
        'radius': {
            icon: "fa fa-life-ring"
        },
        'metering': {
            icon: "fa fa-circle-o-notch"
        }
    },
    item: null
};

const selectRTMode = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case C.MAP_RTMODE: {
            return state;
        }
        case C.MAP_RTCONSIST: {
            const rtConsist = action.rtConsist;
            newState.rtConsist = rtConsist;
            return newState;
        }
        default:
            return state
    }
};

export default selectRTMode

