import React from "react";
import Article from "@/layout/Article";
import md from './md';
import CaseContent from "./caseContent";
function JudgmentType() {
    return (
        <Article md={md} content={<CaseContent />}/>
    )
}

export default JudgmentType;