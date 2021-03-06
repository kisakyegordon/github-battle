var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve('', 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },

    module:{
       rules:[
           {test: /\.(js)$/, use: 'babel-loader'},
           {test: /\.css$/, use: ['style-loader', 'css-loader']}
       ]
    },
    devServer:{
        historyApiFallback: true,
        port: process.env.PORT
    },

    plugins: [ new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
};

