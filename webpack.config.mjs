import { join } from 'path';
import webpack from 'webpack';

export const entry = './src/app/page.js';
export const output = {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
};
export const resolve = {
    extensions: ['.js', '.jsx']
};
// eslint-disable-next-line @next/next/no-assign-module-variable
const module = {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
    },
    {
      test: /\.(js|jsx)$/,
      use: [
        {
          loader: `val-loader`,
        },
      ],
    },
    ]
};
export const devtool = 'cheap-module-eval-source-map';
export const devServer = {
    contentBase: join(__dirname, 'public')
};
export default module;