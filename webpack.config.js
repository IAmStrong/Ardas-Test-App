const webpack = require('webpack');
const path = require('path');

const config = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', 'jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'react-hot-loader',
      }, {
        loader: 'babel-loader',
      }],
    }, {
      test: /\.(js|jsx)$/,  // добавил линтер
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        emitWarning: true,
        configFile: path.join(__dirname, '.eslintrc.js'),
      },
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'less-loader',
      }],
    }, {
      test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'url-loader',
      }],
    }, {
      test: /\.ico$/,
      exclude: /node_modules/,
      use: [{
        loader: 'file-loader?name=[name].[ext]',
      }],
    }],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
