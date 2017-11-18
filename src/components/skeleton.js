/**
 * External dependencies
 */
import React, { Component } from 'react';

/**
 * External dependencies
 */
import Credits from './credits';

class Skeleton extends Component {
	render() {
		return (
			<div>
				<h1>Build your own WordPress Pride flag</h1>
				<p>You need to enable JavaScript to run this app.</p>
				<Credits />
			</div>
		);
	}
}

export default Skeleton;
