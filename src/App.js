/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Flag from './flag';
import { BI_COLORS, TRANS_COLORS, GAY_COLORS } from './colors';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Flag colors={GAY_COLORS} />
			</div>
		);
	}
}

export default App;
