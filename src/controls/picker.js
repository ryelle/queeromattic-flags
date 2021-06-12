/**
 * External dependencies
 */
import { useState } from 'react';
import { CirclePicker } from 'react-color';
import { ratio } from 'get-contrast';

/**
 * Internal dependencies
 */
import { ALL_COLORS } from '../utils/colors';
import IconInk from '../assets/ink.svg';
import IconClose from '../assets/cross.svg';

function DropButton( { ratioToWhite, color, ...props } ) {
	const style = {
		color: ratioToWhite < 1.5 ? 'rgba( 34, 34, 34, 0.7 )' : 'white',
		backgroundColor: color,
	};

	return (
		<button style={ style } { ...props }>
			<IconInk />
		</button>
	);
}

export default function ColorPicker( {
	color,
	index,
	isRemovable,
	onChange,
	onRemove,
} ) {
	const [ isOpen, setIsOpen ] = useState( false );
	// Set ratio to an arbitray "failing" number
	let ratioToWhite = 1;
	try {
		ratioToWhite = ratio( color, 'white' );
	} catch ( error ) {}

	return (
		<div
			className="form-field color-picker"
			style={ { marginBottom: isOpen ? '30px' : 0 } }
		>
			<div className={ `row ${ isRemovable ? 'has-x' : 'has-no-x' }` }>
				<DropButton
					ratioToWhite={ ratioToWhite }
					color={ color }
					onClick={ () => setIsOpen( ! isOpen ) }
					aria-label={ `Open color picker for row ${ index }` }
				/>
				<input
					type="text"
					value={ color }
					aria-label={ `Color for row ${ index }` }
					onChange={ ( event ) =>
						onChange( { hex: event.target.value } )
					}
				/>
				{ isRemovable && (
					<button
						className="button-close"
						onClick={ onRemove }
						aria-label={ `Delete row ${ index }` }
					>
						<IconClose />
					</button>
				) }
			</div>
			{ isOpen ? (
				<CirclePicker
					width={ '100%' }
					circleSize={ 40 }
					circleSpacing={ 0 }
					color={ color }
					onChangeComplete={ onChange }
					colors={ ALL_COLORS }
				/>
			) : null }
		</div>
	);
}
