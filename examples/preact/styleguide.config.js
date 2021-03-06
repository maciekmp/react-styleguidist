module.exports = {
	components: 'src/components/**/[A-Z]*.js',
	defaultExample: true,
	webpackConfig: {
		resolve: {
			alias: {
				react: 'preact-compat',
				'react-dom': 'preact-compat',
			},
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules',
				},
			],
		},
	},
};
