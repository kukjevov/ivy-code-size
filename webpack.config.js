var webpack = require('webpack'),
    path = require('path'),
    CompressionPlugin = require("compression-webpack-plugin"),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    rxPaths = require('rxjs/_esm5/path-mapping');

module.exports = function(options, args)
{
    var debug = !!options && !!options.debug;

    var config =
    {
        entry: 
        {
            bundle: [path.join(__dirname, "lib/entry.js")]
        },
        output:
        {
            path: path.join(__dirname, 'public'),
            filename: '[name].js',
            chunkFilename: `[name].js`
        },
        mode: 'development',
        devtool: 'source-map',
        target: 'web',
        resolve:
        {
            extensions: ['.js'],
            alias: rxPaths(),
            mainFields: ['browser', 'esm2015', 'module', 'main']
        },
        plugins:
        [
            new webpack.DefinePlugin(
            {
                ngDevMode: false
            })
        ]
    };

    config.plugins.push(new CompressionPlugin({test: /\.js$|\.css$/}));

    //this is used for debugging speed of compilation
    if(debug)
    {
        config.plugins.push(new BundleAnalyzerPlugin());
    }

    return config;
}