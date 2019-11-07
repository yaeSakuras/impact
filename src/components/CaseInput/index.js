import React from "react";
import {createForm} from 'rc-form';
import ZtextArea from "@/components/Form/ZtextArea";

class CaseInput extends React.Component{
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                {
                    getFieldDecorator("text")(<ZtextArea row={this.props.row}/>)
                }
            </div>
        )
    }
}

export default createForm()(CaseInput);