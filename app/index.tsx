import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import serviceWorker from '../serviceWorker/serviceWorker';

ReactDOM.render(<App />,
  document.getElementById('root'),
);

serviceWorker.register();
