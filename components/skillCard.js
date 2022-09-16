import React from "react";

export default function SkillCard(props) {
    
    const { cardTitle, cardCaption } = props;
    
    return (
        <div className='project-preview'>
            <img src=''
            <h2>{cardTitle}</h2>
            <p>{cardCaption}</p>
        </div>
    )
}