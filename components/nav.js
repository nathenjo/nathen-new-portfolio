import React, { useEffect, useState } from 'react';

export default function NavComponent(props) {

    const { propClass, navLinks, setPageLoc, windowWidth } = props;

    const [showLink, setShowLinks] = useState(false);
    const [iconType, setIconType] = useState({});
    const [navClass, setNavClass] = useState('desktop-nav');
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        if (windowWidth > 850) {
            setNavClass('desktop-nav');
            setMobileView(false);
        } else {
            setNavClass('nav-component');
            setMobileView(true);
        }
    }, [])

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
        <nav className={`${navClass} ${propClass}`}>
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