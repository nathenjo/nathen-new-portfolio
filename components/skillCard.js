import React, { useEffect, useState } from "react";
import Image from 'next/image';

export default function SkillCard(props) {
    
    const { imageSrc, cardTitle, cardCaption, projects } = props;

    const [cardFlip, setCardFlip] = useState('front');

    useEffect(() => {
        if (cardFlip == 'front') {
            
        }
    }, [])
    
    return (
        <div className='skill-card'>
            <div class='card-front'>
                <Image
                    src={imageSrc}
                    className='card-img'
                    width='150px'
                    height='150px'
                />
                <h2>{cardTitle}</h2>
                <p>{cardCaption}</p>
            </div>
            <div class='card-back'>
                <h2>Projects</h2>
                <ul>
                    {projects.length > 0 && projects.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}