/**
 * Created by ermakof on 30.09.17.
 */
import React from 'react';
import * as C from '../constants'

const initialState = {
    type: null,
    data: null
};

const notification = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    let time = new Date().toLocaleString();
    newState.data = {};
    switch (action.type) {
        case C.SHOW_PANEL: {
            newState.type = C.NOTIFY_EVENTS_INFO;
            newState.data.msg = `${time}: Верхняя панель ${action.isOpen ? 'от' : 'за'}крыта`;
            return newState;
        }
        case C.SELECT_MAP: {
            newState.type = C.NOTIFY_EVENTS_DANGER;
            newState.data.msg = `${time}: Выбрана карта № ${action.selectedMap}`;
            return newState;
        }
        case C.MAP_RTMODE: {
            newState.type = C.NOTIFY_EVENTS_ACCEPTED;
            newState.data.msg = `${time}: ${action.status ? 'А' : 'Деа'}ктивирован режим RT`;
            return newState;
        }
        default:
            return state
    }
    return newState;
};

export default notification
