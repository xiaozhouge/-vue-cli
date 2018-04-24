const path=require('path');
const CleanWebpackPlugin=require('clean-webpack-plugin');
// const vueLoaderConfig = require('vue-loader.conf')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }
  

module.exports={
    entry:{
        main:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
        }
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: [
                    'vue-loader',
                ]
            },
            {
                test: /\.js$/,
                use:[
                    'babel-loader'
                ]
              },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]  
            },
            {
                test:/\.(png|gif|jpg|svg)$/,
                use:[
                    'file-loader',
                ]  
            },
            {
                test: /\.(less|css)$/,
                use:[ 
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            
        ]
    }
}