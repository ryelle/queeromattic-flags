/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * External dependencies
 */
import IntersexFlag from './intersex-flag';
import StripedFlag from './striped-flag';

const Flag = ( { type, colors = [] } ) => {
	switch ( type ) {
		case 'intersex':
			return <IntersexFlag colors={ colors } />;
		case 'stripe':
		default:
			return <StripedFlag colors={ colors } />;
	}
};

Flag.propTypes = {
	colors: PropTypes.array.isRequired,
};

export default Flag;
