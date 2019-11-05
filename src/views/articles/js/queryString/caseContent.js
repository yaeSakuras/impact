import React, {useEffect, useState} from "react";
import CaseInput from "@/components/CaseInput";
import CodeBlock from "@/components/Code";
import { queryString } from "@/utils/queryString";

const inputRef = React.createRef();

function CaseContent() {
    const [text, setText] = useState('');

    useEffect(() => {
        if(!text){
            const ref = inputRef.current.props.form;
            ref.setFieldsValue({
                text: "?name=zzh&age=%E5%8C%97%E4%BA%AC"
            });
        }
    },[text]);

    const onTransForm = (e) => {
        e.preventDefault();
        const ref = inputRef.current.props.form;
        const text = queryString(2,ref.getFieldValue("text"));
        setText(JSON.stringify(text,null,2));
    };

    return (
        <div>
            <CaseInput wrappedComponentRef={inputRef}/>
            <div className="z-btn-content">
                <a href="#javascript" onClick={onTransForm} role="button" className="z-button z-button-primary">转换</a>
            </div>
            {
                text ? <CodeBlock value={text} language="js"/> : null
            }
        </div>
    )
}

export default CaseContent;