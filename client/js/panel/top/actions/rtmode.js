/**
 * Created by ermak on 03.02.17.
 */
import * as C from "../constants"

export const rtModeMap = (status) => ({
    type: C.MAP_RTMODE,
    status
});

export const toggleRtConsist = (rtConsist) => ({
    type: C.MAP_RTCONSIST,
    rtConsist
});

export const toggleRtTrace = (status) => ({
    type: C.MAP_RTTRACE,
    status
});
