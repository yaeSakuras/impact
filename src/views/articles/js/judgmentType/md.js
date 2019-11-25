export default `
### javascript类型判断

#### 基本类型的判断：

- 基本类型有 \`str\`、 \`number\`、 \`boolean\`、 \`null\`、 \`undefined\`、 \`symbol\` 

##### 使用\`typeof\`运算符

\`\`\`js
// 字符串
typeof '' === 'string';
typeof 'bla' === 'string';
typeof \`template literal\` === 'string';
typeof '1' === 'string'; // 注意内容为数字的字符串仍是字符串
typeof (typeof 1) === 'string'; // typeof 总是返回一个字符串
typeof String(1) === 'string'; // String 将任意值转换为字符串，比 toString 更安全

// 数值
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管它是 "Not-A-Number" (非数值) 的缩写
typeof Number(1) === 'number'; // Number 会尝试把参数解析成数值

typeof 42n === 'bigint';

// 布尔值
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() 会基于参数是真值还是虚值进行转换
typeof !!(1) === 'boolean'; // 两次调用 ! (逻辑非) 操作符相当于 Boolean()

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol'; 

// Null无法使用typeof运算符
typeof null === 'object';
\`\`\`

#### 引用数据类型的判断：

##### 使用\`Object.prototype.toString\`方法

\`\`\`js
const toString = Object.prototype.toString;

toString.call({}) === '[object Object]';

toString.call([]) === '[object Array]';
\`\`\`
`;