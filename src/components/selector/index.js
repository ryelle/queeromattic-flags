/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

/**
 * Internal dependencies
 */
import { updateFlag } from '../../store';

const Select = styled.select`
	-webkit-appearance: none;
	appearance: none;
	margin: 1em 0 2em;
	padding: 7px 32px 7px 16px;
	width: 100%;
	background: #f4f4f5
		url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10px' height='7px' viewBox='0 0 20 14'%3E%3Cpolygon fill='%23888' points='20 0 10 13.2617233 0 0'%3E%3C/polygon%3E%3C/svg%3E")
		no-repeat 95% center;
	border-radius: 0;
`;

const Selector = ( { label, onChange, options, selected } ) => {
	return (
		<div>
			<label htmlFor="existing-flags">{ label }</label>
			<Select
				id="existing-flags"
				onChange={ onChange }
				onBlur={ onChange }
				value={ selected }
			>
				{ options.map( ( { label: name, value } ) => (
					<option key={ value } value={ value }>
						{ name }
					</option>
				) ) }
			</Select>
		</div>
	);
};

Selector.propTypes = {
	label: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	// from redux
	onChange: PropTypes.func.isRequired,
	selected: PropTypes.string.isRequired,
};

export default connect(
	( state ) => ( {
		selected: state.name,
	} ),
	( dispatch ) => ( {
		onChange: ( event ) => dispatch( updateFlag( event.target.value ) ),
	} )
)( Selector );
