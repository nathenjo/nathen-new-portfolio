import React from 'react';
import SocialLink from './socialLink';

export default function Footer(props) {

 const { propClass, links, setPageLoc } = props;

    return (
        <footer className={`footer-component ${propClass}`}>
            <section className='socials'>
                <SocialLink
                    propClass='linkedin'
                    icon='bi-linkedin'
                    link='https://www.linkedin.com/in/nathen-johnson-67155920b/'
                />
            </section>

            <section className='sitemap'>
                {links.map((link, index) => {
                    return (<a key={index} onClick={() => setPageLoc({link}.toLowerCase())} href={link.toLowerCase()}>{link}</a>)
                })}
            </section>

            <section className='mini-bio'>
                <h3>Portfolio for Nathen Johnson</h3>
                <p>Professionally certified Full Stack Developer through Bottega University. Currently working for Florence One School District as a Full Stack Developer, formally called an Applications Developer.</p>
                <p>Website made with React, NextJS, and SCSS</p>
            </section>
        </footer>
    );
}