const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'eval-source-map',
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  module: {
    rules: [{
      test: /(\.js|\.jsx?)$/,
      use: {
        loader: "babel-loader",
      },
      exclude: /node_modules/
    },{
      test: /\.css$/,
      // exclude: /node_modules/,
      use:[{
        loader: "style-loader"
      },{
        loader: "css-loader"
      },{
        loader: "postcss-loader"
      }]
    },{
      test: /\.less$/,
      use:[{
        loader: "style-loader"
      },{
        loader: "css-loader"
      },{
        loader: "less-loader"
      }]
    },{
      test: /\.(png|jpg|gif|JPG|GIF|PNG|BMP|bmp|JPEG|jpeg)$/,
      exclude: /node_modules/,
      use: [
          {
              loader: 'url-loader',
              options: {
                  limit: 8192
              }
          },{
            loader: 'file-loader'
          }
      ]
  }]
  },
  plugins: [
    new webpack.BannerPlugin('bySusie'),
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   template: __dirname + "/app/index.tmpl.html"
    // }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.sass', '.scss', '.less', 'jsx']
  }
};