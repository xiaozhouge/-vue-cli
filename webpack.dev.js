const merge=require('webpack-merge');
const common=require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports=merge(common,{
    devtool:'inline-source-map',
    plugins:[
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer:{
        contentBase: './dist',
        hot: true,
        host:'localhost',
        port:8090,
        // 设置自动拉起浏览器
        open:true
    },
    mode:'development'
})