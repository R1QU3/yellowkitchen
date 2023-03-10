const path = require('path');

module.exports = {
  entry: './src/scripts/script.js',
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: 'main.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
