/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal dependencies
 */
import App from './App';

// CSS
import './style.css';

ReactDOM.render(
	<App generateRandom={false} />,
	document.getElementById('root'),
);
