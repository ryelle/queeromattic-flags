/**
 * External dependencies
 */
import React, { Component } from 'react';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import { BI_COLORS } from './colors';
import ColorPicker from './color-picker';
import Flag from './flag';

class App extends Component {
	state = {
		colors: BI_COLORS,
		rows: BI_COLORS.length,
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

	renderColorRow = (color, i) => {
		return (
			<ColorPicker
				color={color}
				onChange={this.updateColor(i)}
				key={`color-${i}`}
			/>
		);
	};

	renderForm = () => {
		const { colors } = this.state;
		return (
			<div className="form">
				<h1>Build your own WordPress Pride flag</h1>
				<p>
					Customize the colors using the fields below, add or remove
					rows as you need.
				</p>
				{colors.map(this.renderColorRow)}
				<button onClick={this.addRow}>
					<Gridicon icon="plus-small" /> Add Row
				</button>
			</div>
		);
	};

	render() {
		return (
			<div className="app">
				{this.renderForm()}
				<Flag colors={this.state.colors} />
			</div>
		);
	}
}

export default App;
