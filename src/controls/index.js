/**
 * Internal dependencies
 */
import './style.css';
import ColorPicker from './picker';
import FlagSelect from './flag-select';
import {
	getFlagFromColors,
	getFlagFromName,
	getRandomColor,
} from '../utils/colors';
import { useFlag } from '../use-flag';

export default function Controls() {
	const [ flag, setFlag ] = useFlag();
	const { colors, value } = flag;

	function onChange( newColors ) {
		const newValue = getFlagFromColors( newColors )?.value || 'custom';
		setFlag( { ...flag, colors: newColors, value: newValue } );
	}

	function add() {
		onChange( [ ...colors, getRandomColor() ] );
	}
	function del( position ) {
		onChange( [
			...colors.slice( 0, position ),
			...colors.slice( position + 1 ),
		] );
	}
	function update( color, position ) {
		onChange( [
			...colors.slice( 0, position ),
			color.toUpperCase(),
			...colors.slice( position + 1 ),
		] );
	}
	function updateFlag( event ) {
		const newFlag = getFlagFromName( event.target.value );
		if ( newFlag ) {
			setFlag( newFlag );
		} else {
			onChange( [
				getRandomColor(),
				getRandomColor(),
				getRandomColor(),
			] );
		}
	}

	return (
		<>
			<FlagSelect value={ value } onChange={ updateFlag } />
			<hr />
			{ colors.length ? (
				<>
					{ colors.map( ( color, i ) => (
						<ColorPicker
							key={ `color-${ i }` }
							color={ color }
							index={ i }
							onRemove={ () => del( i ) }
							onChange={ ( { hex = '' } ) => update( hex, i ) }
							isRemovable={ colors.length > 1 }
						/>
					) ) }
					<div className="form-field add-color">
						<button onClick={ add }>Add Color</button>
					</div>
				</>
			) : (
				<p>No configuration options</p>
			) }
		</>
	);
}
