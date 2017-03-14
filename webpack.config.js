
/**
 * webpacck 配置文件
 * @type {Object}
 */
var webpack = require('webpack')
var path = require('path')

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	entry:{
		vendor:['react','react-dom','react-router'],
		app:[
			'webpack/hot/dev-server',
			'webpack-hot-middleware/client',
			 path.resolve(__dirname,'./app/main.js')
			]
	},
	output:{
		path: __dirname + '/dist/',
		publicPath:'/dist/',
		filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].bundle.js'
	},
	module:{
		loaders:[
			{   
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
            },
            {
            	test: /\.css?$/,
            	exclude:/(node_modules)/,
            	loader: ExtractTextPlugin.extract({ fallback:'style-loader',use:'css-loader' })
            },
            // {
            // 	test:/\.less?$/,
            // 	exclude:/(node_modules)/,
            // 	loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader!autoprefixer-loader')
            // },
			{ 
				test:/\.html$/,
				exclude: /(node_modules)/,
				loader:'html-loader?attrs=img:src img:data-src'
			},
			{ 
				test:/\.(png|jpg|gif)$/,
				exclude: /(node_modules)/,
				loader: 'url-loader?limit=8192'
			},
			{ 
				test:/\.jsx$/,
				exclude: /(node_modules)/,
				loaders:['jsx-loader','babel-loader?presets[]=es2015,presets[]=react']
			},
			{
				test:/\.json$/,
				exclude:/(node_modules)/,
				loader:'json-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
		  "process.env": {
		    NODE_ENV: JSON.stringify("production")
		  }
		}),
		new webpack.HotModuleReplacementPlugin(), //热加载
		new webpack.optimize.MinChunkSizePlugin({ //压缩代码
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
        	output:{
        		comments:false
        	},
        	compress:{
        		warnings:false
        	}
        }),
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            minChunks: Infinity
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8000'}),
		new HtmlWebpackPlugin({
			title:'React商城',
			filename: "index.html",
			template: 'app/index.html',
			hash:true,
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			}
		})
	]
}

