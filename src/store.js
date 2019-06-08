/**
 * External dependencies
 */
import { createStore, combineReducers } from 'redux';
import { find } from 'lodash';

/**
 * Internal dependencies
 */
import { getRandomFlag, list } from './utils/colors';

// Action types
const UPDATE_COLOR = 'UPDATE_COLOR';
const ADD_COLOR = 'ADD_COLOR';
const DELETE_COLOR = 'DELETE_COLOR';
const UPDATE_FLAG = 'UPDATE_FLAG';

// Set up a random initial flag
const { colors: initialColors, value: initialFlag } = getRandomFlag();

// Reducers
// This is an array of hex strings – order matters for display of flag
function colors( state = initialColors, action ) {
	switch ( action.type ) {
		case UPDATE_COLOR:
			return [
				...state.slice( 0, action.position ),
				action.color.toUpperCase(),
				...state.slice( action.position + 1 ),
			];
		case ADD_COLOR:
			return [ ...state, action.color ];
		case DELETE_COLOR:
			return [
				...state.slice( 0, action.position ),
				...state.slice( action.position + 1 ),
			];
		case UPDATE_FLAG:
			return action.colors;
		default:
			return state;
	}
}

// The current flag name
function name( state = initialFlag, action ) {
	switch ( action.type ) {
		case UPDATE_COLOR:
		case ADD_COLOR:
		case DELETE_COLOR:
			return 'custom'; // Any changes make this a custom flag.
		case UPDATE_FLAG:
			return action.name;
		default:
			return state;
	}
}

export default createStore(
	combineReducers( {
		colors,
		name,
	} ),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Actions
export const updateFlag = ( flagName ) => {
	const flag = find( list, ( item ) => item.value === flagName );
	return {
		type: UPDATE_FLAG,
		name: flagName,
		colors: flag.colors,
	};
};

export const updateColor = ( color, position ) => ( {
	type: UPDATE_COLOR,
	position,
	color,
} );

export const addColor = ( color ) => ( {
	type: ADD_COLOR,
	color,
} );

export const deleteColor = ( position ) => ( {
	type: DELETE_COLOR,
	position,
} );
