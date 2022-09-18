import React, { useEffect, useState } from 'react';

export default function NavComponent(props) {

    const { propClass, navLinks, setPageLoc } = props;

    const [showLink, setShowLinks] = useState(false);
    const [iconType, setIconType] = useState({});

    useEffect(() => {
        
    })

    useEffect(() => {
        if (showLink) {
            setIconType('bi-arrow-up-left-circle');
        } else {
            setIconType('bi-arrow-down-right-circle');
        }
        let selector = document.querySelector('.icon');
        document.addEventListener('click', function(e) {
            if (e.target != selector && showLink == true) {
                toggleLinkState()
            }
        })
    }, [showLink])

    const setLinkClass = () => {
        if (showLink) {
            return 'show-links';
        } else {
            return 'hide-links';
        }
    }

    const toggleLinkState = () => {
        setShowLinks(!showLink);
    }

    return(
        <nav onClick={toggleLinkState} className={`nav-component ${propClass}`}>
            <i className={`icon ${iconType}`}></i>
            <section className={`${setLinkClass()} link-wrapper`}>
            {navLinks.map((item, index) => {
                    return (<a key={index} onClick={() => setPageLoc({item}.toLowerCase())} href={item.toLowerCase()}>{item}</a>)
                })}
            </section>
        </nav>
    );
}