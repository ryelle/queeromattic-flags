/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';
import Gridicon from 'gridicons';
import { uniq } from 'lodash';

/**
 * Internal dependencies
 */
import { BI_COLORS, TRANS_COLORS, GAY_COLORS } from './colors';

function getDefaultColors() {
	return uniq([...GAY_COLORS, ...BI_COLORS, ...TRANS_COLORS]);
}

class ColorPicker extends Component {
	static propTypes = {
		color: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
	};

	state = {
		isOpen: true,
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
		const { color } = this.props;
		return (
			<div className="form-field color-picker">
				<div className="color-picker__header">
					<input
						type="text"
						value={color}
						onChange={this.updateColorInput}
					/>
				</div>
				{isOpen ? this.renderPicker() : null}
			</div>
		);
	}
}

export default ColorPicker;
