import React from "react";

function AlphaLayout(props) {
    return (
        <div className="z-article-content">
            <div className="z-article-header">标 题</div>
            <div className="z-article-body">
                <div className="z-article-left">
                    {props.left}
                </div>
                <div className="z-article-right">
                    {props.right}
                </div>
            </div>
        </div>
    )
}

export default AlphaLayout;