/**
 * External dependencies
 */
import React from 'react';
import { renderToString } from 'react-dom/server';

/**
 * Internal dependencies
 */
import Flag from '../src/components/flag';

export function buildSVG( colors ) {
	const markup = renderToString( <Flag colors={ colors } /> );
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
