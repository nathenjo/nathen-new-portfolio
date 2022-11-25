import React, { useEffect, useState } from 'react';

import TitleCase from './capitalize';

export default function SocialLink(props) {

    const { icon, link } = props;

    const [title, setTitle] = useState('');

    useEffect(() => {
        let type = icon.split('-')[1];
        setTitle((TitleCase(type)));
    }, [])

    return (
        <a className={`social-link-component ${title.toLowerCase()}`} href={link} target='_blank'>
            <i className={`icon ${icon}`}></i>
            <span>{title}</span>
        </a>
    );
}