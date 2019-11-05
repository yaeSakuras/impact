import React from 'react';

const pathname = window.location.pathname;

function JavaScript(props) {

    const data = [{
        href:'#/js/queryString',
        title:"url地址查询字符串"
    },{
        href:'#/js/objectToStr',
        title:"对象转换成查询字符串"
    }].map(item => {
        return {
            href:`${pathname}${item.href}`,
            title:item.title
        }
    });

    return (
        <div className="z-article-list">
            <ul>
                {
                    data.map((item,index) => {
                       return <li key={index}><a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
                    })
                }
            </ul>
        </div>
    )
}

export default JavaScript;