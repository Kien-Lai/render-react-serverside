const path = require('path');

module.exports = 
{
    entry: ["babel-polyfill","./app/app.js"],
    output: {
        path: path.resolve(__dirname+'/public'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}