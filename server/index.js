/* eslint-disable no-console */
/**
 * External dependencies
 */
import Express from 'express';
import path from 'path';
import webpack from 'webpack';

/**
 * Internal dependencies
 */
import { getSvgFromColors, getSvgFromName } from './svg';

const mode = process.env.NODE_ENV || 'development';
const app = Express();
app.set( 'port', process.env.PORT || 5000 );
app.set( 'views', path.resolve( __dirname, './views' ) );

if ( 'development' === mode ) {
	// Tell express to use the webpack-dev-middleware and use the webpack.config.js
	// configuration file as a base.
	const config = require( '../webpack.config.js' );
	const compiler = webpack( config );
	app.use(
		require( 'webpack-dev-middleware' )( compiler, {
			// noInfo: true,
			publicPath: config.output.publicPath,
		} )
	);
	app.use( require( 'webpack-hot-middleware' )( compiler ) );
}

app.use( '/static', Express.static( path.resolve( __dirname, '../build' ) ) );

app.get( '/', function( req, res ) {
	res.sendFile( path.resolve( __dirname, './views/index.html' ) );
} );

app.get( '/hex/:colors.svg', function( req, res ) {
	const { colors = '' } = req.params;
	const markup = getSvgFromColors( colors );
	if ( markup ) {
		res.setHeader( 'Content-Type', 'image/svg+xml' );
		return res.send( markup );
	}
	res.status( 400 ).send( "Sorry, I don't understand your colors request!" );
} );

app.get( '/name/:name.svg', function( req, res ) {
	const { name = '' } = req.params;
	const markup = getSvgFromName( name );
	if ( markup ) {
		res.setHeader( 'Content-Type', 'image/svg+xml' );
		return res.send( markup );
	}
	res
		.status( 400 )
		.send(
			`Sorry, I don't have ${ name } on file. ` +
				'Maybe you should <a href="https://github.com/ryelle/queeromattic-flags/issues/new?labels=flag%20suggestion">make a suggestion on the repo</a>?'
		);
} );

app.listen( app.get( 'port' ), function() {
	console.log( 'Node app is running at localhost: ' + app.get( 'port' ) );
} );
