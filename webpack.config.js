const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv = {}) => {
  const isDevelopment = argv.mode === 'development';

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      filename: 'dnl_periodswebresource.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          exclude: /node_modules/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images',
            },
          },
        },
        {
          test: /\.module\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      hot: true,
      open: true,
    },
    optimization: {
      minimize: !isDevelopment,
    },
  };
};
