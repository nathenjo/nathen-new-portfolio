import React from 'react';

import NavComponent from '../components/nav';

export default function About({navLinks, windowWidth}) {

    return (
        <div className='about-wrapper'>
            <NavComponent propClass={'about-nav'} navLinks={navLinks} windowWidth={windowWidth} />
            About page
        </div>
    );
}