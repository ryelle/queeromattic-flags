/**
 * External dependencies
 */
import React, { Component } from 'react';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import { TRANS_COLORS } from './colors';
import ColorPicker from './color-picker';
import Flag from './flag';

class App extends Component {
	state = {
		colors: TRANS_COLORS,
		rows: TRANS_COLORS.length,
	};

	updateColor = i => ({ hex }) => {
		this.setState(({ colors }) => ({
			colors: [
				...colors.slice(0, i),
				hex.toUpperCase(),
				...colors.slice(i + 1),
			],
		}));
	};

	addRow = () => {
		this.setState(({ rows, colors }) => ({
			colors: [...colors, '#333'],
			rows: rows + 1,
		}));
	};

	deleteRow = i => () => {
		this.setState(({ colors, rows }) => {
			return {
				colors: [...colors.slice(0, i), ...colors.slice(i + 1)],
				rows: rows - 1,
			};
		});
	};

	renderColorRow = (color, i) => {
		return (
			<ColorPicker
				key={`color-${i}`}
				color={color}
				deleteRow={this.deleteRow(i)}
				index={i}
				onChange={this.updateColor(i)}
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
					<Gridicon icon="plus-small" />
					<span>Add Row</span>
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
