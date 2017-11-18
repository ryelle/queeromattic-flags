/**
 * External dependencies
 */
import React, { Component } from 'react';
import Gridicon from 'gridicons';
import { find, random } from 'lodash';

/**
 * Internal dependencies
 */
import ColorPicker from 'components/color-picker';
import Credits from 'components/credits';
import Flag from 'components/flag';
import { list } from 'utils/colors';

const PLACEHOLDER = '#33333A';

function getRandomFlag(list = []) {
	const index = random(list.length - 1);
	return list[index];
}

class App extends Component {
	state = {
		selected: '',
		colors: [PLACEHOLDER],
	};

	constructor(props) {
		super(props);
		const { value, colors } = getRandomFlag(list);
		this.state = {
			selected: value,
			colors,
		};
	}

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
		const { selected } = this.state;
		return (
			<div className="form-field">
				<label htmlFor="existing-flags" className="form-label">
					Select a preset flag
				</label>
				<select
					id="existing-flags"
					onChange={this.setFlag}
					value={selected}>
					{list.map(({ label, value }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
			</div>
		);
	};

	renderCustomize = () => {
		const { colors } = this.state;
		return (
			<div className="form-lower">
				<p>
					Customize the colors using the fields below. You can also
					add or remove rows as you need.
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
				<div className="form-upper">
					<h1>Build your own WordPress Pride flag</h1>
					{this.renderColorSelect()}
				</div>
				{this.renderCustomize()}
				<Flag colors={this.state.colors} />
				<Credits />
			</div>
		);
	}
}

export default App;
