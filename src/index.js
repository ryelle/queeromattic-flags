/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

/**
 * Internal dependencies
 */
import App from './app';
import store from './store';

const GlobalStyle = createGlobalStyle`
	:root {
		--primary-color: #3EA7D5;
		--warning-color: #c25e4a;
	}

	[disabled] {
		--warning-color: #e8bcbc;
	}

	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		line-height: 1.5;
	}

	input,
	select {
		border: 1px solid #ccc;
		font-size: inherit;
	}

	button, select {
		cursor: pointer;
	}

	*:focus {
		outline-color: var( --primary-color );
	}
`;

// This is a hack to reset the DOM. Why is this needed?
document.getElementById( 'root' ).innerHTML = '';

ReactDOM.render(
	<Fragment>
		<GlobalStyle />
		<Provider store={ store }>
			<App />
		</Provider>
	</Fragment>,
	document.getElementById( 'root' )
);
