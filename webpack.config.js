//Webpack requires this to work with directories
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const mode = process.env.NODE_ENV;

const entry = {
    main: "./src/js/main.js",
    modernizr: "./src/js/modernizr.js",
};

if (mode === "production") {
    entry["main.min"] = "./src/js/main.js";
    entry["modernizr.min"] = "./src/js/modernizr.js";
}

module.exports = {
    mode,

    devtool: false,

    entry,

    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "[name].js",
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
            }),
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
