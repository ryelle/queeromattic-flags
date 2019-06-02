module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: true,
				},
			},
		],
		[
			'@babel/preset-react',
			{
				development: process.env.BABEL_ENV === 'development',
			},
		],
	],
};
