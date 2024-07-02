import React, { useEffect, useState } from "react";
import Image from 'next/image';

export default function SkillCard(props) {
    
    const { imageSrc, cardTitle, cardCaption, projects } = props;

    const [cardFlip, setCardFlip] = useState(false);
    const [frontRotate, setFrontRotate] = useState('0deg');
    const [backRotate, setBackRotate] = useState('-180deg');

    useEffect(() => {
        if (cardFlip == false) {
            setFrontRotate('0deg');
            setBackRotate('-180deg')
        } else if (cardFlip == true) {
            setFrontRotate('180deg');
            setBackRotate('0deg')
        }
    }, [cardFlip])

    const flipCard = () => {
        setCardFlip(!cardFlip);
    }

    return (
        <div onClick={flipCard} className='skill-card'>
            <div style={{'transform': `rotateY(${frontRotate})`}} className='card-front'>
                <Image
                    src={imageSrc}
                    className='card-img'
                    width='150px'
                    height='150px'
                />
                <h2>{cardTitle}</h2>
                <p>{cardCaption}</p>
            </div>
            <div style={{'transform': `rotateY(${backRotate})`}} className='card-back'>
                <h2>Projects</h2>
                <ol>
                    {projects.length > 0 && projects.map((item, index) => {
                        if (item.link != '') {
                            return <li key={index}><a target='_blank' href={item.link}>{item.text}</a></li>
                        } else {
                            return <li key={index}>{item.text}</li>
                        }
                    })}
                </ol>
            </div>
        </div>
    )
}