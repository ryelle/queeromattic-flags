/**
 * Internal dependencies
 */
import { list } from '../utils/colors';

export default function FlagSelect( { value, onChange } ) {
	return (
		<div className="form-field flag-select">
			{ /* eslint-disable-next-line jsx-a11y/no-onchange */ }
			<select onChange={ onChange } value={ value }>
				<option value={ 'custom' }>Custom</option>
				{ list.map( ( { label, value: slug } ) => (
					<option key={ slug } value={ slug }>
						{ label }
					</option>
				) ) }
			</select>
		</div>
	);
}
