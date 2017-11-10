/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * Internal dependencies
 */
import Flag from './flag';

class App extends Component {
	render() {
		const colors = ['#61CDF6', '#F7ABB8', '#F4F4F5'];
		return (
			<div className="App">
				<Flag colors={colors} />
			</div>
		);
	}
}

export default App;
