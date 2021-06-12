/**
 * External dependencies
 */
import { createContext, useContext, useMemo, useState } from 'react';

const FlagContext = createContext();

function useFlag() {
	const context = useContext( FlagContext );
	if ( ! context ) {
		throw new Error( `useFlag must be used within a FlagProvider` );
	}
	return context;
}

function FlagProvider( props ) {
	const [ flag, setFlag ] = useState( props.value );
	const value = useMemo( () => [ flag, setFlag ], [ flag ] );
	return <FlagContext.Provider { ...props } value={ value } />;
}

export { FlagProvider, useFlag };
