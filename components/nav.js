import React, { useEffect, useState } from 'react';

export default function NavComponent(props) {

    const { propClass, navLinks, windowWidth } = props;

    const [showLink, setShowLinks] = useState(false);
    const [iconType, setIconType] = useState({});
    const [navClass, setNavClass] = useState('desktop-nav');
    const [mobileView, setMobileView] = useState(false);
    const [mobileClass, setMobileClass] = useState('');

    useEffect(() => {
        if (windowWidth > 850) {
            setNavClass('desktop-nav');
            setMobileView(false);
            setMobileClass('');
        } else {
            setNavClass('nav-component');
            setMobileView(true);
            setMobileClass(`${setLinkClass()} link-wrapper`)
        }
    }, [windowWidth])

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
        setMobileClass(`${setLinkClass()} link-wrapper`)
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
            {mobileView && <div onClick={() => toggleLinkState} className='toggleDiv'>
                <i onClick={toggleLinkState} className={`icon ${iconType}`}></i>
            </div>}
            <section className={mobileClass}>
            {navLinks.map((item, index) => {
                    return (<a key={index} href={item.toLowerCase().replace('home', '/')}>{item}</a>)
                })}
            </section>
        </nav>
    );
}