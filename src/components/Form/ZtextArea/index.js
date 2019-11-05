import React from "react";
import "../index.less";

class ZtextArea extends React.Component {

    render() {
        const {onChange, value} = this.props;
        return (
            <div className="z-textarea">
                <textarea rows="8" onChange={(e) => onChange(e.target.value)} value={value}/>
            </div>
        )
    }
}

export default ZtextArea;