const paths = require('./paths');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  module: {
    rules: [
      // {
      //   test: /\.(png|jpg)$/,
      //   use: ['file-loader'],
      // },
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   type: 'asset',
      // },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      // {
      //   test: /\.js$/,
      //   exclude: ['/node_modules/'],
      //   use: {
      //     loader: 'babel-loader',
      //   },
      // },
      {
        test: /\.(js|.jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },

      // {
      //
      //   exclude: ['/node_modules/'],
      //   use: [
      //     {
      //       loader: 'ts-loader',
      //       options: {
      //         // disable type checker - we will use it in fork plugin
      //         transpileOnly: true,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: paths.eslintGlob,
      },
    }),
  ],
  stats: {
    errorDetails: true,
  },
};