const {resolve, join} = require('path')
const webpack = require('webpack')

module.exports = env => {
  const addPlugin = (add, plugin) => add ? plugin : undefined
  const ifProd = plugin => addPlugin(env.prod, plugin)
  const ifDev = plugin => addPlugin(env.dev, plugin)
  const removeEmpty = array => array.filter(i => !!i)

  return {
    devtool: env.prod ? 'source-map' : 'eval',
    debug: true,
    entry: removeEmpty([
      './src/index.js',
    ]),
    context: resolve(__dirname, ''),
    output: {
      path: join(__dirname, 'dist'),
      filename: env.prod ? 'measurement.min.js' : 'measurement.js',
      publicPath: ''
    },
    module: {
      loaders: [
        { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
        { test: /\.json$/, loaders: ["json"], exclude: /node_modules/},
      ]
    },
    plugins: removeEmpty([
      ifProd(new webpack.optimize.DedupePlugin()),
      ifProd(new webpack.LoaderOptionsPlugin({
         minimize : true,
         debug: false
      })),
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        }
      })),
    ]),
    resolve: {
      extensions: ['', '.js', '.json']
    }

  }
}
