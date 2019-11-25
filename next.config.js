const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

module.exports = withLess(withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|gif|jpg|jpeg|svg|woff|woff2|ttf|eot)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10, // при 10000 инлайнит шрифты в base64
            name: '[name].[ext]', // [path][name].[hash].[ext]
          }
        }
      ]
    });
    return config;
  }
}));
