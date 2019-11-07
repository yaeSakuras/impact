import React from "react";
import "../index.less";

class ZtextArea extends React.Component {

    render() {
        const {onChange, value, row} = this.props;
        let r = row ? row : 8;
        return (
            <div className="z-textarea">
                <textarea rows={r} onChange={(e) => onChange(e.target.value)} value={value}/>
            </div>
        )
    }
}

export default ZtextArea;