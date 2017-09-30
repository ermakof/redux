import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import TopPanel from './containers/TopPanel'
import {startListeners} from './listeners'

let store = createStore(rootReducer);

startListeners(store);

// store.subscribe(() =>
//     console.debug(store.getState())
// );

let getApp = () => {
    return <Provider store={store}>
        <TopPanel />
    </Provider>
};

export default getApp