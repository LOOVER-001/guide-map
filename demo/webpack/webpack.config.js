// 遵循commonJS规范

const path = require('path')
const HtmlWebpackPlugin =  require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')


module.exports = {
    entry: './src/main.js',
    output: {
        // path.resolve(): 解析当前相对路径的绝对路径
        // path.join(): 路径拼接
        // path: path.resolve('./dist/'),
        path: path.join(__dirname,'./dist/'),
        filename:'bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true,
        hot: true,
        compress: true,
        port: 3000,
        static: './src'
    },
    plugins:[
        // devserver时，index.html 放服务器根目录下
        // devserver时，index.html 自动引入bundle.js
        // 打包时放到dist目录下
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(
        {patterns: [
            {
                // __dirname 根目录
                from: path.join(__dirname,'assets'),
                to:'assets'
            }
        ]}),
        new webpack.BannerPlugin('版权信息')
    ],
    module: {
        rules: [
            {
                // \转义 $以结尾
                test: /\.css$/,
                // css-loader 解析css文件 style-loader 放到html中
                use:['style-loader','css-loader']
            },
            {
                test: /\.less$/,use:['style-loader','css-loader','less-loader']
            },
            // {
            //     test: /\.(jpg|jpeg|png|gif|woff|Woff2|eot|svg|ttf)$/,use:['file-loader']
            // },
            // {
            //     test: /\.(jpg|jpeg|png|gif)$/,use:{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 5 * 1024,
            //             outputPath: 'images',
            //             name: '[name]-[hash:4].[ext]'
            //         }
            //     }
            // },
            // {
            //     test: /\.(woff|Woff2|eot|svg|ttf)$/,use:['url-loader']
            // }
            {
                test:/\.js$/,
                use:{
                    loader: 'babel-loader'
                    // options: {
                    //     // 预设
                    //     presets:['@bable/env'],
                    //     // 高级
                    //     plugins:['@babel/plugin-proposal-class-properties']
                    // }
                }
            }
        ]
    },
    devtool:'eval-cheap-module-source-map'
}