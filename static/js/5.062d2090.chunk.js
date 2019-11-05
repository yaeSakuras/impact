(window.webpackJsonpimpact=window.webpackJsonpimpact||[]).push([[5],{319:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(73),l="\n### url\u67e5\u8be2\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u5bf9\u8c61\n\n1. \u901a\u8fc7 `replace` \u65b9\u6cd5\u5b9e\u73b0\u8f6c\u6362\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a\n\n```js\nlet obj = {};\n\ndecodeURIComponent(str).replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => obj[k] = v);\n```\n\n2. \u901a\u8fc7 `new URLSearchParams` \u65b9\u6cd5\u5b9e\u73b0\u8f6c\u6362\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a\n\n```js\nlet obj = {};\n\nfor (let [key, value] of (new URLSearchParams(str).entries())) {\n    obj[key] = value;\n}\n```\n\n> \u9700\u8981\u6ce8\u610f\u662f `new URLSearchParams` \u9700\u8981\u8f83\u9ad8\u7248\u672c\u7684\u6d4f\u89c8\u5668\u652f\u6301\n",o=n(72),i=n(97),u=n(59);var s=r.a.createRef();var f=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){n||s.current.props.form.setFieldsValue({text:"?name=zzh&age=%E5%8C%97%E4%BA%AC"})}),[n]),r.a.createElement("div",null,r.a.createElement(i.a,{wrappedComponentRef:s}),r.a.createElement("div",{className:"z-btn-content"},r.a.createElement("a",{href:"#javascript",onClick:function(e){e.preventDefault();var t=function(t,n){var a={};try{if(1===t&&decodeURIComponent(n).replace(/([^?&=]+)=([^&]+)/g,(function(e,t,n){return a[t]=n})),2===t){var r=!0,c=!1,l=void 0;try{for(var i,u=new URLSearchParams(n).entries()[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var s=i.value,f=Object(o.a)(s,2),m=f[0],h=f[1];a[m]=h}}catch(v){c=!0,l=v}finally{try{r||null==u.return||u.return()}finally{if(c)throw l}}}return a}catch(e){console.log(e)}}(2,s.current.props.form.getFieldValue("text"));c(JSON.stringify(t,null,2))},role:"button",className:"z-button z-button-primary"},"\u8f6c\u6362")),n?r.a.createElement(u.a,{value:n,language:"js"}):null)};t.default=function(){return r.a.createElement(c.a,{md:l,content:r.a.createElement(f,null)})}},59:function(e,t,n){"use strict";var a=n(52),r=n(53),c=n(57),l=n(54),o=n(80),i=n(58),u=n(1),s=n.n(u),f=window.hljs,m=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).setRef=n.setRef.bind(Object(o.a)(n)),n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"setRef",value:function(e){this.codeEl=e}},{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){f.highlightBlock(this.codeEl)}},{key:"render",value:function(){return s.a.createElement("pre",null,s.a.createElement("code",{ref:this.setRef,className:"language-".concat(this.props.language)},this.props.value))}}]),t}(s.a.PureComponent);t.a=m},73:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=(n(74),n(98)),l=n.n(c),o=n(59);t.a=function(e){return r.a.createElement("div",{className:"z-article-content"},r.a.createElement("div",{className:"z-article-header"},"title"),r.a.createElement("div",{className:"z-article-body"},r.a.createElement("div",{className:"z-article-left z-markdown"},r.a.createElement(l.a,{source:e.md,renderers:{code:o.a}})),r.a.createElement("div",{className:"z-article-right"},e.content)))}},74:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";var a=n(52),r=n(53),c=n(57),l=n(54),o=n(58),i=n(1),u=n.n(i),s=n(127),f=(n(96),function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.value;return u.a.createElement("div",{className:"z-textarea"},u.a.createElement("textarea",{rows:"8",onChange:function(e){return t(e.target.value)},value:n}))}}]),t}(u.a.Component)),m=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return u.a.createElement("div",null,e("text")(u.a.createElement(f,null)))}}]),t}(u.a.Component);t.a=Object(s.a)()(m)}}]);
//# sourceMappingURL=5.062d2090.chunk.js.map