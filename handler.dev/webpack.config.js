const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: path.join(__dirname, 'app.ts'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.mjs', '.json', '.ts'],
    symlinks: false,
    cacheWithContext: false,
  },
  optimization: {
    minimize: false,
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '..', 'handler'),
    filename: 'app.js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [[path.resolve(__dirname, 'node_modules')]],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, 'package*.json'), to: path.join(__dirname, '..', 'handler') }],
    }),
  ],
};
