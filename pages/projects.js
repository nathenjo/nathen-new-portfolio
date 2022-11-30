import React from 'react';

import NavComponent from '../components/nav';

export default function Projects({navLinks, windowWidth}) {

    return (
        <div>
            <NavComponent propClass={'projects-nav'} navLinks={navLinks} windowWidth={windowWidth} />
            Projects
        </div>
    );
}