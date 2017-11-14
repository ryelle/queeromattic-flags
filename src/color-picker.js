/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import { ALL_COLORS } from './colors';

function getDefaultColors() {
	return ALL_COLORS;
}

class ColorPicker extends Component {
	static propTypes = {
		color: PropTypes.string.isRequired,
		deleteRow: PropTypes.func.isRequired,
		index: PropTypes.number,
		onChange: PropTypes.func.isRequired,
	};

	state = {
		isOpen: false,
	};

	updateColorInput = event => {
		const value = event.target.value;
		this.props.onChange({ hex: value });
	};

	toggleColorPicker = () => {
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));
	};

	renderPicker = () => {
		const { color, onChange } = this.props;
		return (
			<CirclePicker
				color={color}
				onChangeComplete={onChange}
				colors={getDefaultColors()}
			/>
		);
	};

	render() {
		const { isOpen } = this.state;
		const { color, index } = this.props;
		return (
			<div className="form-field color-picker">
				<div className="color-picker__header">
					<button
						onClick={this.toggleColorPicker}
						aria-label={`Open color picker for row ${index}`}>
						<Gridicon icon="ink" />
					</button>
					<input
						type="text"
						value={color}
						aria-label={`Color for row ${index}`}
						onChange={this.updateColorInput}
					/>
					<button
						onClick={this.props.deleteRow}
						aria-label={`Delete row ${index}`}>
						<Gridicon icon="cross-small" />
					</button>
				</div>
				{isOpen ? this.renderPicker() : null}
			</div>
		);
	}
}

export default ColorPicker;
