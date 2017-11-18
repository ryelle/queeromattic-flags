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
			<div className="skeleton">
				<h1>Build your own WordPress Pride flag</h1>
				<p>The app is loading…</p>
				<Credits />
			</div>
		);
	}
}

export default Skeleton;
