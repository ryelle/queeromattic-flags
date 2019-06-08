/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { flowRight as compose } from 'lodash';
import Gridicon from 'gridicons';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import ColorPicker from './components/color-picker';
import Credits from './components/credits';
import Flag from './components/flag';
import Selector from './components/selector';

import { addColor, deleteColor, updateColor } from './store';
import { getSvgUrl, list } from './utils/colors';

const App = ( { add, colors, del, update } ) => (
	<div className="app">
		<div className="form-upper">
			<h1>Build your own WordPress Pride flag</h1>
			<Selector label="Select a preset flag" options={ list } />
		</div>
		<div className="form-lower">
			<p>
				Customize the colors using the fields below. You can also add or remove
				rows as you need
			</p>
			{ colors.map( ( color, i ) => {
				return (
					<ColorPicker
						key={ `color-${ i }` }
						color={ color }
						deleteRow={ () => del( i ) }
						index={ i }
						onChange={ ( { hex = '' } ) => update( hex, i ) }
					/>
				);
			} ) }
			<button onClick={ () => add( '#33333A' ) }>
				<Gridicon icon="plus-small" />
				<span>Add Row</span>
			</button>
		</div>
		<div className="flag-container">
			<Flag type="stripe" colors={ colors } />
			<a className="button" href={ getSvgUrl( colors ) }>
				Download SVG
			</a>
		</div>
		<Credits />
	</div>
);

App.propTypes = {
	// from redux
	add: PropTypes.func.isRequired,
	del: PropTypes.func.isRequired,
	update: PropTypes.func.isRequired,
	colors: PropTypes.array.isRequired,
};

export default compose(
	connect(
		( state ) => ( {
			colors: state.colors,
		} ),
		( dispatch ) => ( {
			add: ( color ) => dispatch( addColor( color ) ),
			del: ( position ) => dispatch( deleteColor( position ) ),
			update: ( color, position ) => dispatch( updateColor( color, position ) ),
		} )
	),
	hot
)( App );
