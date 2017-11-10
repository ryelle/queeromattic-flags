/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal dependencies
 */
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// CSS
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
