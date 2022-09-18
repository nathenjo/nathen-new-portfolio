import React, { useState } from "react";

import NavComponent from "../components/nav";
import SkillCard from "../components/skillCard";

export default function Index() {

    const navLinks = ['Home', 'About', 'Projects', 'Contact'];

    const [pageLoc, setPageLoc] = useState('home');

    return(
        <div className='index'>
            <NavComponent navLinks={navLinks} propClass='index-nav' setPageLoc={setPageLoc} />

            <section className='content'>
                <SkillCard
                    imageSrc='/python-logo.png'
                    cardTitle='Python'
                    cardCaption='Professionally certified in Python development through Bottega University, Full Stack Certificate'
                />
                <SkillCard
                    imageSrc='/javascript-logo.svg'
                    cardTitle='Javascript'
                    cardCaption='Professionally certified in Javascript development through Bottega University, Full Stack Certificate, including modern ES6 syntax and JQuery'
                />
                <SkillCard
                    imageSrc='/react-logo.png'
                    cardTitle='React'
                    cardCaption='Professionally certified in React development through Bottega University, Full Stack Certificate'
                />
            </section>

            <footer>
                <section className='socials'>

                </section>

                <section className='sitemap'>

                </section>

                <section className='mini-bio'>

                </section>
            </footer>
        </div>

    )
}