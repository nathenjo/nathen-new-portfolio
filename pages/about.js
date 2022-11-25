import React from 'react';

import NavComponent from '../components/nav';

export default function About(props) {

    const {} = props;

    return (
        <div className='about-wrapper'>
            <NavComponent propClass={'about-nav'} navLinks={navLinks} setPageLoc={setPageLoc} windowWidth={windowWidth} />
            About page
        </div>
    );
}