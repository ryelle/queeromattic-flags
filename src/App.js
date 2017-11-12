/**
 * External dependencies
 */
import React, { Component } from 'react';
import Gridicon from 'gridicons';
import { range } from 'lodash';

/**
 * Internal dependencies
 */
import ColorPicker from './color-picker';
import Flag from './flag';

class App extends Component {
	state = {
		colors: [],
		rows: 3,
	};

	updateColor = i => ({ hex }) => {
		this.setState(prevState => {
			const colors = prevState.colors;
			colors[i] = hex;
			return { colors };
		});
	};

	addRow = () => {
		this.setState(prevState => ({ rows: prevState.rows + 1 }));
	};

	renderColorRow = i => {
		const color = this.state.colors[i] || '';
		return (
			<ColorPicker
				color={color}
				onChange={this.updateColor(i)}
				key={`color-${i}`}
			/>
		);
	};

	renderForm = () => {
		const { rows } = this.state;
		return (
			<div className="form">
				<h1>Build your own Queeromattic flag</h1>
				<p>
					Customize the colors using the fields below, add or remove
					rows as you need.
				</p>
				{range(rows).map(this.renderColorRow)}
				<button onClick={this.addRow}>
					<Gridicon icon="plus-small" /> Add Row
				</button>
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
