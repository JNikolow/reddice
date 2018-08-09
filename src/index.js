import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
