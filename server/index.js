/**
 * External dependencies
 */
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';

/**
 * Internal dependencies
 */
import App from '../src/App';
import assets from '../build/asset-manifest.json';

const app = Express();
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, './views'));
app.use('/static', Express.static(path.resolve(__dirname, '../build/static')));

const pageTitle = 'Queeromattic Flags';

app.get('/', function(req, res) {
	const markup = renderToString(<App />);
	const jsFile = '/' + assets['main.js'];
	const cssFile = '/' + assets['main.css'];
	return res.render('index', { pageTitle, cssFile, jsFile, markup });
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
