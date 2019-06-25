/**
 * External dependencies
 */
const path = require( 'path' );
const webpack = require( 'webpack' );

const NODE_ENV = process.env.NODE_ENV || 'development';
const BUILD_DIR = path.join( __dirname, 'build' );
const isDev = 'development' === NODE_ENV;

module.exports = {
	mode: NODE_ENV,
	entry: {
		index: [
			isDev ? 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000' : false,
			isDev ? 'react-hot-loader/patch' : false,
			'./src/index.js',
		].filter( Boolean ),
	},
	output: {
		filename: '[name].js',
		path: path.resolve( BUILD_DIR, 'js' ),
		publicPath: '/',
	},
	devServer: {
		contentBase: BUILD_DIR,
		port: 8089,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve( 'babel-loader' ),
						options: {
							// Babel uses a directory within local node_modules
							// by default. Use the environment variable option
							// to enable more persistent caching.
							cacheDirectory: process.env.BABEL_CACHE_DIRECTORY || true,
						},
					},
				],
			},
		],
	},
	plugins: [
		isDev ? new webpack.HotModuleReplacementPlugin() : false,
	].filter( Boolean ),
};
