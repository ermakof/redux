/**
 * Created by ermak on 03.02.17.
 */
import * as C from "../constants"

export const actionAddAcceptedNotify = (data) => {
    return {
        type: C.NOTIFY_EVENTS_ACCEPTED,
        data
    }
};

export const actionAddInfoNotify = (data) => {
    return {
        type: C.NOTIFY_EVENTS_INFO,
        data
    }
};

export const actionAddDangerNotify = (data) => {
    return {
        type: C.NOTIFY_EVENTS_DANGER,
        data
    }
};
