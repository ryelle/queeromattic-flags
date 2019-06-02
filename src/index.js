/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal dependencies
 */
import App from './app';

// This is a hack to reset the DOM. Why is this needed?
document.getElementById( 'root' ).innerHTML = '';

ReactDOM.render(
	<App />,
	document.getElementById( 'root' ),
);
