/**
 * External dependencies
 */
const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const NODE_ENV = process.env.NODE_ENV || 'development';
const BUILD_DIR = path.join( __dirname, 'build' );

module.exports = {
	mode: NODE_ENV,
	entry: {
		index: './src/index.js',
	},
	output: {
		filename: '[name].js',
		path: BUILD_DIR,
		publicPath: '/',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: BUILD_DIR,
		port: 8089,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										useBuiltIns: 'entry',
										corejs: 3,
									},
								],
								[
									'@babel/preset-react',
									{
										development:
											process.env.BABEL_ENV ===
											'development',
									},
								],
							],
							plugins: [
								[ '@babel/plugin-transform-react-jsx' ],
							],
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				use: {
					loader: '@svgr/webpack',
				},
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin( {
			React: 'react',
		} ),
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],
};
