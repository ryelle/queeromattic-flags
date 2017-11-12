/**
 * External dependencies
 */
import React, { Component } from 'react';
import { range } from 'lodash';

/**
 * Internal dependencies
 */
import Flag from './flag';
import { BI_COLORS, TRANS_COLORS, GAY_COLORS } from './colors';

class App extends Component {
	state = {
		colors: [],
		rows: 3,
	};

	updateColor = i => event => {
		const value = event.target.value;
		this.setState(prevState => {
			const colors = prevState.colors;
			colors[i] = value;
			return { colors };
		});
	};

	selectRowCount = event => {
		this.setState({ rows: event.target.value });
	};

	renderColorRow = i => {
		return (
			<div className="form-field" key={`color-${i}`}>
				<input type="text" onChange={this.updateColor(i)} />
			</div>
		);
	};

	renderForm = () => {
		const { colors, rows } = this.state;
		return (
			<div className="form">
				<div className="form-field">
					<label htmlFor="stripe-count" className="form-label">
						How many stripes on the flag?
					</label>
					<select
						id="stripe-count"
						className="form-input"
						onChange={this.selectRowCount}
						value={rows}>
						{range(1, 8).map(i => (
							<option key={`val-${i}`}>{i}</option>
						))}
					</select>
				</div>
				{range(rows).map(this.renderColorRow)}
			</div>
		);
	};

	render() {
		console.log(this.state.colors);
		return (
			<div className="app">
				{this.renderForm()}
				<Flag colors={this.state.colors} />
			</div>
		);
	}
}

export default App;
