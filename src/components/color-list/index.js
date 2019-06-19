/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import ColorPicker from './picker';
import { deleteColor, updateColor } from '../../store';

const ColorList = ( { colors, del, update } ) =>
	colors.map( ( color, i ) => {
		return (
			<ColorPicker
				key={ `color-${ i }` }
				color={ color }
				index={ i }
				onRemove={ () => del( i ) }
				onChange={ ( { hex = '' } ) => update( hex, i ) }
				disableRemove={ colors.length === 1 }
			/>
		);
	} );

ColorList.propTypes = {
	// from redux
	del: PropTypes.func.isRequired,
	update: PropTypes.func.isRequired,
	colors: PropTypes.array.isRequired,
};

export default connect(
	( state ) => ( {
		colors: state.colors,
	} ),
	( dispatch ) => ( {
		del: ( position ) => dispatch( deleteColor( position ) ),
		update: ( color, position ) => dispatch( updateColor( color, position ) ),
	} )
)( ColorList );
