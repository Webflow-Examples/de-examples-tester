const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: './src/main.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },


      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 1337,
  },
  resolve:{
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins:[
    new CopyPlugin({
      patterns: [
          { from: 'src/examples', to: 'public/examples' },
          // You can add more patterns here if needed
      ],
  }),
  ],
  devtool: 'source-map'
};