import React, {useEffect, useState} from "react";
import CaseInput from "@/components/CaseInput";
import CodeBlock from "@/components/Code";
import { objectToStr } from "@/utils/objectToStr";
const inputRef = React.createRef();

function CaseContent() {
    const [text, setText] = useState('');

    useEffect(() => {
        if(!text){
            const ref = inputRef.current.props.form;
            const obj = {
                name:"zzh",
                age:25,
                address:"hubei"
            };
            ref.setFieldsValue({
                text: JSON.stringify(obj,null,2)
            });
        }
    },[text]);

    const onTransForm = (e) => {
        e.preventDefault();
        const ref = inputRef.current.props.form;
        setText(objectToStr(JSON.parse(ref.getFieldValue("text"))));
    };

    return (
        <>
            <CaseInput wrappedComponentRef={inputRef}/>
            <div className="z-btn-content">
                <a href="#javascript" onClick={onTransForm} role="button" className="z-button z-button-primary">转换</a>
            </div>
            {
                text ? <CodeBlock value={text} language="js"/> : null
            }
        </>
    )
}

export default CaseContent;