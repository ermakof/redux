/**
 * Created by ermak on 01.05.16.
 */

import React from 'react';
import ReactDom from 'react-dom';

import MapsPanel from './top/';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

/**
 * Верхняя панель
 */
ReactDom.render(
    <I18nextProvider i18n={ i18n }>
        <MapsPanel/>
    </I18nextProvider>,
    document.getElementById('top_panel')
);
