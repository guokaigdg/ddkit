const path = require('path');

const config = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     use: ['awesome-typescript-loader'],
            // },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
};

module.exports = config;
