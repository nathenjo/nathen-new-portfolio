import React, { useEffect, useState } from 'react';

export default function NavComponent(props) {

    const { propClass, navLinks, setPageLoc } = props;

    const [showLink, setShowLinks] = useState(false);
    const [iconType, setIconType] = useState({});

    useEffect(() => {
        if (showLink) {
            setIconType('bi-arrow-up-left-circle');
        } else {
            setIconType('bi-arrow-down-right-circle');
        }
        let selector = document.querySelector('.toggleDiv');
        let selector2 = document.querySelector('.icon');
        document.addEventListener('click', function(e) {
            if (e.target != selector && e.target != selector2 && showLink == true) {
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
        <nav className={`nav-component ${propClass}`}>
            <div onClick={toggleLinkState} className='toggleDiv'>
                <i onClick={toggleLinkState} className={`icon ${iconType}`}></i>
            </div>
            <section className={`${setLinkClass()} link-wrapper`}>
            {navLinks.map((item, index) => {
                    return (<a key={index} onClick={() => setPageLoc({item}.toLowerCase())} href={item.toLowerCase()}>{item}</a>)
                })}
            </section>
        </nav>
    );
}