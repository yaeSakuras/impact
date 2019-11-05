export default `
### url查询字符串转换成对象

1. 通过 \`replace\` 方法实现转换，代码如下：

\`\`\`js
let obj = {};

decodeURIComponent(str).replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => obj[k] = v);
\`\`\`

2. 通过 \`new URLSearchParams\` 方法实现转换，代码如下：

\`\`\`js
let obj = {};

for (let [key, value] of (new URLSearchParams(str).entries())) {
    obj[key] = value;
}
\`\`\`

> 需要注意是 \`new URLSearchParams\` 需要较高版本的浏览器支持
`;