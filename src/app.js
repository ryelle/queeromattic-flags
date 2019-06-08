/**
 * External dependencies
 */
import React, { Component } from 'react';
import { find, isEqual, random } from 'lodash';
import Gridicon from 'gridicons';
import { hot } from 'react-hot-loader/root';

/**
 * Internal dependencies
 */
import ColorPicker from './components/color-picker';
import Credits from './components/credits';
import Flag from './components/flag';
import { list } from './utils/colors';

const PLACEHOLDER = '#33333A';

// Uses global list
function getRandomFlag() {
	const index = random( list.length - 1 );
	return list[ index ];
}

function getSvgUrl( colors ) {
	const existingFlag = find( list, ( item ) => isEqual( colors, item.colors ) );
	if ( existingFlag ) {
		return `/name/${ existingFlag.value }.svg`;
	}
	const colorsList = colors.map( ( c ) => c.replace( '#', '' ) ).join( '-' );
	return `/hex/${ colorsList }.svg`;
}

class App extends Component {
	constructor( props ) {
		super( props );
		const { value, colors } = getRandomFlag();
		this.state = {
			selected: value,
			colors,
		};

		this.renderColorRow = this.renderColorRow.bind( this );
		this.updateColor = this.updateColor.bind( this );
		this.addRow = this.addRow.bind( this );
		this.deleteRow = this.deleteRow.bind( this );
		this.setFlag = this.setFlag.bind( this );
	}

	updateColor( i ) {
		return ( { hex } ) => {
			this.setState( ( { colors } ) => ( {
				colors: [
					...colors.slice( 0, i ),
					hex.toUpperCase(),
					...colors.slice( i + 1 ),
				],
			} ) );
		};
	}

	addRow() {
		this.setState( ( { colors } ) => ( {
			colors: [ ...colors, PLACEHOLDER ],
		} ) );
	}

	deleteRow( i ) {
		return () => {
			this.setState( ( { colors } ) => {
				return {
					colors: [ ...colors.slice( 0, i ), ...colors.slice( i + 1 ) ],
				};
			} );
		};
	}

	setFlag( event ) {
		const item = find( list, { value: event.target.value } );
		if ( item ) {
			this.setState( {
				selected: item.value,
				colors: item.colors,
			} );
		}
	}

	renderColorRow( color, i ) {
		return (
			<ColorPicker
				key={ `color-${ i }` }
				color={ color }
				deleteRow={ this.deleteRow( i ) }
				index={ i }
				onChange={ this.updateColor( i ) }
			/>
		);
	}

	render() {
		const { colors, selected } = this.state;
		return (
			<div className="app">
				<div className="form-upper">
					<h1>Build your own WordPress Pride flag</h1>
					<div className="form-field">
						<label htmlFor="existing-flags" className="form-label">
							Select a preset flag
						</label>
						<select
							id="existing-flags"
							onChange={ this.setFlag }
							onBlur={ this.setFlag }
							value={ selected }>
							{ list.map( ( { label, value } ) => (
								<option key={ value } value={ value }>
									{ label }
								</option>
							) ) }
						</select>
					</div>
				</div>
				<div className="form-lower">
					<p>
						Customize the colors using the fields below. You can also
						add or remove rows as you need
					</p>
					{ colors.map( this.renderColorRow ) }
					<button onClick={ this.addRow }>
						<Gridicon icon="plus-small" />
						<span>Add Row</span>
					</button>
				</div>
				<div className="flag-container">
					<Flag type="stripe" colors={ this.state.colors } />
					<a className="button" href={ getSvgUrl( this.state.colors ) }>
						Download SVG
					</a>
				</div>
				<Credits />
			</div>
		);
	}
}

export default hot( App );
