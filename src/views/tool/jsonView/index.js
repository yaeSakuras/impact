import React, {useState} from "react";
import ZtextArea from "@/components/Form/ZtextArea";
import AlphaLayout from "@/layout/AlphaLayout";
import ReactJson from "react-json-view";

const json = {
    "no-undef": "off",
    "no-restricted-globals": "off",
    "no-unused-vars": "off"
};

function Left(props) {
    const onChange = (text)=> {
        props.onChangeTxt(text);
    };

    return (
        <div className="z-view-input">
            <ZtextArea onChange={onChange} value={props.text} row={30} />
        </div>
    )
}

function Right(props) {
    let object = {};
    try {
        object = JSON.parse(props.text);
    } catch(e) {
        object = console.log(e);
    }

    return (
        <div className="z-view-scroll">
            <ReactJson displayDataTypes={false} src={object}/>
        </div>
    )
}

function JsonView() {
    const [text, setText] = useState(JSON.stringify(json));

    const onChangeTxt = (data)=> {
        setText(data);
    };

    return (
        <AlphaLayout left={<Left text={text} onChangeTxt={onChangeTxt}/>} right={<Right text={text}/>}/>
    )
}

export default JsonView;