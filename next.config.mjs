/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.js|\.jsx$/,
                use: [
                    {
                        loader: `val-loader`,
                    },
                ],
            },
        );
        return config;
    },
};
export default nextConfig;