import React from "react";
import Article from "@/layout/Article";
import md from './md';
import CaseContent from "./caseContent";
function ObjectToStr() {
    return (
        <Article md={md} content={<CaseContent />}/>
    )
}

export default ObjectToStr;