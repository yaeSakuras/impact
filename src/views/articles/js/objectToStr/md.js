export default `
### 对象转换成查询字符串

1. 通过 \`entries\` 和 \`map\` 方法实现转换，代码如下：

\`\`\`js
function objectToStr(obj){
    return Object.entries(obj).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&')
}
\`\`\`

2. 通过 \`keys\` 和 \`map\` 方法实现转换，代码如下：

\`\`\`js
function objectToStr(obj){
    return Object.keys(obj).map(key => \`\${key}=\${encodeURIComponent(obj[key])}\`).join('&')
}
\`\`\`
`;
