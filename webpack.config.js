var webpack = require('webpack'),
    path = require('path'),
    CompressionPlugin = require("compression-webpack-plugin"),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    rxPaths = require('rxjs/_esm5/path-mapping');

module.exports = function(options, args)
{
    var debug = !!options && !!options.debug;

    var config =
    {
        entry: 
        {
            bundle: [path.join(__dirname, "lib/hello-world.js")]
        },
        output:
        {
            path: path.join(__dirname, 'public'),
            filename: '[name].js',
            chunkFilename: `[name].js`
        },
        mode: 'production',
        devtool: 'source-map',
        target: 'web',
        optimization: 
        {
            minimizer: [new UglifyJsPlugin(
            {
                sourceMap: true,
                uglifyOptions: 
                {
                    mangle: true,
                    compress: 
                    {
                        global_defs: 
                        {
                            'ngDevMode': false,
                        },
                        keep_fargs: false,
                        passes: 3,
                        pure_getters: true,
                        unsafe: true,
                    }
                }
            })]
        },
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