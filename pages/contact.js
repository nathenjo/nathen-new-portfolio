import React from 'react';

import NavComponent from '../components/nav';

export default function Contact({navLinks, windowWidth}) {

    return (
        <div>
            <NavComponent propClass={'contact-nav'} navLinks={navLinks} windowWidth={windowWidth} />
            Contact Page
        </div>
    );
}