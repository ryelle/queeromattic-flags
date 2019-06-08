/**
 * External dependencies
 */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

/**
 * Internal dependencies
 */
import App from './app';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #3EA7D5;
  }
`;

// This is a hack to reset the DOM. Why is this needed?
document.getElementById( 'root' ).innerHTML = '';

ReactDOM.render(
	<Fragment>
		<GlobalStyle />
		<App />
	</Fragment>,
	document.getElementById( 'root' )
);
