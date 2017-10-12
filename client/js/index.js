/**
 * Created by ermak on 30.09.17.
 */
import React from 'react';
import ReactDom from 'react-dom';

import "./init";
import TopPanel from './topPanel';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

/**
 * Top панель
 */
ReactDom.render(
    <I18nextProvider i18n={ i18n }>
        <TopPanel/>
    </I18nextProvider>,
    document.getElementById('top_panel')
);
