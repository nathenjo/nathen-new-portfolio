import React from "react";
import Image from 'next/image';

export default function SkillCard(props) {
    
    const { imageSrc, cardTitle, cardCaption } = props;
    
    return (
        <div className='project-preview'>
            <Image
                src={imageSrc}
                className='card-img'
                width='150px'
                height='150px'
            />
            <h2>{cardTitle}</h2>
            <p>{cardCaption}</p>
        </div>
    )
}