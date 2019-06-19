/**
 * External dependencies
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { find } from 'lodash';

/**
 * Internal dependencies
 */
import Flag from '../src/components/flag';
import { list } from '../src/utils/colors';

function buildSVG( markup ) {
	const headers =
		'<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
		'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
	return (
		headers +
		markup.replace(
			'<svg ',
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
		)
	);
}

export function getSvgFromColors( colors ) {
	if ( -1 !== colors.indexOf( '-' ) ) {
		const localList = colors.split( '-' );
		const markup = renderToString(
			<Flag colors={ localList.map( ( item ) => '#' + item ) } />
		);
		return buildSVG( markup );
	}
	return false;
}

export function getSvgFromName( name ) {
	const flag = find( list, { value: name } );
	if ( flag ) {
		const { colors = [] } = flag;
		const markup = renderToString( <Flag type={ name } colors={ colors } /> );
		return buildSVG( markup );
	}
	return false;
}
