const {
    override,
    addWebpackAlias,
    addLessLoader
} = require('customize-cra');

const path = require("path");

module.exports = override(
    //别名配置
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "./src"),
        ["@views"]: path.resolve(__dirname, "./src/views"),
        ["@components"]: path.resolve(__dirname, "./src/components")
    }),
    addLessLoader({
        strictMath: true,
        noIeCompat: true
    })
);