import React, { useEffect, useState } from 'react';

import TitleCase from './capitalize';

export default function SocialLink(props) {

    const { propClass, icon, link } = props;

    const [title, setTitle] = useState('');

    useEffect(() => {
        let type = icon.split('-')[1];
        console.log(type);
        setTitle((TitleCase(type)));
    }, [])

    return (
        <a className={`social-link-component ${propClass}`} href={link} target='_blank'>
            <i className={`icon ${icon}`}></i>
            <span>{title}</span>
        </a>
    );
}