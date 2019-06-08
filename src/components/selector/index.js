/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { updateFlag } from '../../store';

const Selector = ( { label, onChange, options, selected } ) => {
	return (
		<div className="form-field">
			<label htmlFor="existing-flags" className="form-label">
				{ label }
			</label>
			<select
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
			</select>
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
