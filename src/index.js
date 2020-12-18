import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';

import { StateProvider } from './store';

const AppStatefull = () => (
  <StateProvider>
    <App />
  </StateProvider>
);

ReactDOM.render(<AppStatefull />, document.getElementById('root'));