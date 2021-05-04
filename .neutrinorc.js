const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const styles = require('@neutrinojs/style-loader');

module.exports = {
  options: {
    root: __dirname
  },
  use: [
    airbnb(),
    react({
      html: {
        title: 'G2i-Trivia'
      },
      style: {
        test: /\.(css|sass|scss)$/,
        loaders: [
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader',
            useId: 'sass'
          }
        ]
      }
    }),
    jest()
  ]
};
