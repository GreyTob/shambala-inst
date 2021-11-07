import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { Context } from './Context';
import { data } from './content';

const app = (
  <Context.Provider value={ data }>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Context.Provider>
);

ReactDOM.render(app, document.getElementById('shambala'));

reportWebVitals();
