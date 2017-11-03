const CONFIG = require('./config');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const extractLESS = new ExtractTextPlugin('style/[name].style.css');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
// const HappyPack = require('happypack');
// const os = require("os")
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();

// var StatsPlugin = require('stats-webpack-plugin');
module.exports = {
	entry: {
		main: CONFIG.ENTRY_PATH
		// vendor: ['react', 'react-dom'],
	},
	output: {
		filename: '[name].[hash:4].js',
		// filename: '[name].js',
		path: CONFIG.OUTPUT_PATH
	},

	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'@src': path.resolve(__dirname, '../src'),
			'@component': path.resolve(__dirname, '../src/component'),
			'@container': path.resolve(__dirname, '../src/container'),
			'@asset': path.resolve(__dirname, '../src/asset'),
			'@react': path.resolve(__dirname, '../src/minReact/react/index.js'),
			'$': path.resolve(__dirname, '../src/asset/global')
		}
	},

	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
				"presets": ["react"]
			}
		}, {
			test: /\.(less|css)$/,
			loader: ["style-loader", "css-loader", "less-loader"]
		}, {
			test: /\.(png|jpg)$/,
			exclude: /(node_modules)/,
			loader: 'url-loader?limit=8198&name=images/[name].[ext]'
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)\w*/,
			loader: 'url-loader?limit=1000000'
		}]
	},
	plugins: [
		// new webpack.optimize.UglifyJsPlugin({
		// 	sourceMap: false,
		// 	compress: {
		// 		warnings: false
		// 	}
		// }),
		// new HappyPack({
		// 	id: 'happybabel',
		// 	loaders: ['babel-loader'],
		// 	threadPool: happyThreadPool,
		// 	cache: true,
		// 	verbose: true
		// }),
		// new ParallelUglifyPlugin({
		// 	cacheDir: '.cache/',
		// 	uglifyJS:{
		// 		output: {
		// 			comments: false
		// 		},
		// 		compress: {
		// 			warnings: false
		// 		}
		// 	}
		// }),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			favicon: path.resolve(__dirname, '../src/asset/image/favicon.png'),
			inject: true
		})
		// new DashboardPlugin(dashboard.setData),
		// new StatsPlugin('stats.json', {
		//     chunkModules: true,
		//     exclude: [/node_modules[\\\/]react/]
		// }),
		// extractLESS
	]
};