/**
 * External dependencies
 */
import React, { Component } from 'react';
import Gridicon from 'gridicons';
import { find } from 'lodash';
/**
 * Internal dependencies
 */
import { list } from './colors';
import ColorPicker from './color-picker';
import Flag from './flag';

const PLACEHOLDER = '#33333A';

class App extends Component {
	state = {
		selected: [],
		colors: [PLACEHOLDER],
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
		this.setState(({ colors }) => ({
			colors: [...colors, PLACEHOLDER],
		}));
	};

	deleteRow = i => () => {
		this.setState(({ colors }) => {
			return {
				colors: [...colors.slice(0, i), ...colors.slice(i + 1)],
			};
		});
	};

	setFlag = event => {
		const item = find(list, { value: event.target.value });
		if (item) {
			this.setState({
				selected: item.value,
				colors: item.colors,
			});
		}
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

	renderColorSelect = () => {
		return (
			<select onChange={this.setFlag}>
				{list.map(({ label, value }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
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
				{this.renderColorSelect()}
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
