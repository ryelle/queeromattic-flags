/**
 * External dependencies
 */
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import Gridicon from 'gridicons';
import PropTypes from 'prop-types';
import { ratio } from 'get-contrast';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { ALL_COLORS } from '../../utils/colors';
import Button from '../button';

const Wrapper = styled.div`
	padding-bottom: 8px;
	display: flex;
`;

const DropButton = styled( Button )`
	background: ${ ( { color } ) => color };
	color: ${ ( { ratioToWhite } ) =>
		ratioToWhite < 1.5 ? 'rgba( 34, 34, 34, 0.7 )' : 'white' };
`;

const CloseIcon = styled( Gridicon )`
	color: var(--warning-color);
`;

const Input = styled.input`
	flex: 1;
	padding: 5px 10px;
	border-width: 1px 0;
`;

const StyledPicker = styled( CirclePicker )`
	margin-bottom: 30px;

	div {
		padding: 5px;
	}
`;

function getDefaultColors() {
	return ALL_COLORS;
}

const ColorPicker = ( { color, disableRemove, index, onChange, onRemove } ) => {
	const [isOpen, setIsOpen] = useState(false); // eslint-disable-line
	// Set ratio to an arbitray "failing" number
	let ratioToWhite = 1;
	try {
		ratioToWhite = ratio( color, 'white' );
	} catch ( error ) {}

	return (
		<div className="form-field color-picker" style={ { marginBottom: isOpen ? '30px' : 0 } }>
			<Wrapper>
				<DropButton
					ratioToWhite={ ratioToWhite }
					color={ color }
					onClick={ () => setIsOpen( ! isOpen ) }
					aria-label={ `Open color picker for row ${ index }` }
				>
					<Gridicon icon="ink" />
				</DropButton>
				<Input
					type="text"
					value={ color }
					aria-label={ `Color for row ${ index }` }
					onChange={ ( event ) => onChange( { hex: event.target.value } ) }
				/>
				<Button
					className="button-close"
					onClick={ onRemove }
					aria-label={ `Delete row ${ index }` }
					disabled={ disableRemove }
				>
					<CloseIcon icon="cross-small" />
				</Button>
			</Wrapper>
			{ isOpen ? (
				<StyledPicker
					width={ '100%' }
					circleSize={ 40 }
					circleSpacing={ 0 }
					color={ color }
					onChangeComplete={ onChange }
					colors={ getDefaultColors() }
				/>
			) : null }
		</div>
	);
};

ColorPicker.propTypes = {
	color: PropTypes.string.isRequired,
	disableRemove: PropTypes.bool,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default ColorPicker;
