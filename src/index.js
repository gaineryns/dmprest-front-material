import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import App from './App';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
