var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var express = require('express')
var WebpackDevMiddleware = require('webpack-dev-middleware')
var WebpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

process.env.NODE_ENV = 'production'

var app = express()
var compiler = webpack(config)

app.use(WebpackDevMiddleware(compiler,{
	publicPath:config.output.publicPath,
	stats:{ colors:true }
}))

app.use(WebpackHotMiddleware(compiler))

app.listen(8000,function(){
	console.log('listen port 8000')
})