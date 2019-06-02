/* eslint-disable no-console */
/**
 * External dependencies
 */
import Express from 'express';
import React from 'react';
import { find } from 'lodash';
import { renderToString } from 'react-dom/server';
import path from 'path';

/**
 * Internal dependencies
 */
import assets from '../build/asset-manifest.json';
import Flag from '../src/components/flag';
import Skeleton from '../src/components/skeleton';
import { list } from '../src/utils/colors';

const app = Express();
app.set( 'port', process.env.PORT || 5000 );
app.set( 'view engine', 'pug' );
app.set( 'views', path.resolve( __dirname, './views' ) );
app.use( '/static', Express.static( path.resolve( __dirname, '../build/static' ) ) );

const pageTitle = 'WordPress Pride Flag Generator';

app.get( '/', function( req, res ) {
	const markup = renderToString( <Skeleton /> );
	const jsFile = assets.index;
	const vendorFiles = assets.vendor;
	const cssFile = assets.style;
	return res.render( 'index', { pageTitle, cssFile, jsFile, vendorFiles, markup } );
} );

function buildSVG( colors ) {
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

app.get( '/hex/:colors.svg', function( req, res ) {
	const { colors = '' } = req.params;
	if ( -1 !== colors.indexOf( '-' ) ) {
		const localList = colors.split( '-' );
		res.setHeader( 'Content-Type', 'image/svg+xml' );
		return res.send( buildSVG( localList.map( ( item ) => '#' + item ) ) );
	}
	res.status( 400 ).send( "Sorry, I don't understand your colors request!" );
} );

app.get( '/name/:name.svg', function( req, res ) {
	const { name = '' } = req.params;
	const { colors = [] } = find( list, { value: name } );
	if ( colors.length ) {
		res.setHeader( 'Content-Type', 'image/svg+xml' );
		return res.send( buildSVG( colors ) );
	}
	res
		.status( 400 )
		.send(
			`Sorry, I don't have ${ name } on file.` +
				'Maybe you should <a href="https://github.com/ryelle/queeromattic-flags/issues/new?labels=flag%20suggestion">make a suggestion on the repo</a>?'
		);
} );

app.listen( app.get( 'port' ), function() {
	console.log( 'Node app is running at localhost:' + app.get( 'port' ) );
} );
