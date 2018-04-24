const merge=require('webpack-merge');
const UglifyJSPuligin=require('uglifyjs-webpack-plugin');
const common=require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports=merge(common,{
    devtool:'source-map',
    plugins:[
       new UglifyJSPuligin({
            sourceMap: true
        }) ,
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            hash:true,
            title:'I love China',
        })
    ],
    mode:'production'

})