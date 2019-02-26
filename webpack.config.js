const path = require('path')
const CleanWepackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry : path.resolve(__dirname, './src/index.js'),
    output: {
        path : path.resolve(__dirname, 'dist'), 
        filename : '[name].js'
    }, 
    mode: 'development',
    devtool : 'inline-source-map',
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/, 
                exclude: /node_modules/,
                use :{
                    loader: "babel-loader"
                }      
            },
            {
                test : /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins : [
        new CleanWepackPlugin(['dist'])
    ]   
}