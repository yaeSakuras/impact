import React, {useEffect, useState} from "react";
import CaseInput from "@/components/CaseInput";
import CodeBlock from "@/components/Code";

const inputRef = React.createRef();

function CaseContent() {
    const [text, setText] = useState('');

    useEffect(() => {
        if(!text){
            const ref = inputRef.current.props.form;
            ref.setFieldsValue({
                text: "qwe"
            });
        }
    },[text]);

    const onTransForm = (e) => {
        e.preventDefault();
        const ref = inputRef.current.props.form;
        const text = ref.getFieldValue("text");
        setText(text);
    };

    return (
        <div>
            <CaseInput wrappedComponentRef={inputRef}/>
            <div className="z-btn-content">
                <a onClick={onTransForm} role="button" className="z-button z-button-primary">转换</a>
            </div>
            {
                text ? <CodeBlock value={text} language="js"/> : null
            }
        </div>
    )
}

export default CaseContent;