import React from "react";
import {router} from 'dva';
import './index.less';

const {Link} = router;

function Container(props) {

    return (
        <div className="z-container">
            <div className="z-navbar">
                <div className="z-title">笔记文档</div>
                <div className="z-links">
                    <div className="z-nav-item"><Link to="/home/javascript">JavaScript</Link></div>
                    <div className="z-nav-item"><Link to="/home/css">CSS</Link></div>
                    <div className="z-nav-item"><Link to="/home/reactor">React</Link></div>
                    <div className="z-nav-item"><Link to="/home/other">Other</Link></div>
                </div>
            </div>
            <div className="z-page">
                {props.children}
            </div>
        </div>
    )
}

export default Container;