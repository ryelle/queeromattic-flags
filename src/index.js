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
	}
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		line-height: 1.5;
	}

	h1 {
		margin-top: 0;
		font-size: 1.4rem;
		line-height: 1.3;
	}

	button, select {
		cursor: pointer;
	}

	a, button, input, select {
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
