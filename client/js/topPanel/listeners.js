/**
 * Created by ermak on 30.07.17.
 */

let store = null;

export const startListeners = (redux) => {

    store = redux;

    // Тут инициализируются слушатели внешних событих,
    // которые будут передавать (dispatch) действия (actions) в хранилище (store)

};
