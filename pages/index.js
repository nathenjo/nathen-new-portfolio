import React from "react";
import ProjectPreview from "../components/skillCard";

export default function Index() {

    const navLinks = ['Home', 'About', 'Projects', 'Contact'];

    return(
        <div className='index'>
            <nav>
                {navLinks.map(item => {
                    return (<a href={item.toLowerCase()}>{item}</a>)
                })}
            </nav>

            <section className='content'>
                <SkillCard
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