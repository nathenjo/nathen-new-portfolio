import Image from 'next/image';
import React from 'react';
import SocialLink from './socialLink';

export default function Footer(props) {

 const { propClass, links, setPageLoc } = props;

    return (
        <footer className={`footer-component ${propClass}`}>
            <section className='socials'>
                <SocialLink
                    icon='bi-linkedin'
                    link='https://www.linkedin.com/in/nathen-johnson-67155920b/'
                />
                <SocialLink
                    icon='bi-github'
                    link='https://github.com/nathenjo'
                />
            </section>

            <section className='sitemap'>
                {links.map((link, index) => {
                    return (<a key={index} onClick={() => setPageLoc({link}.toLowerCase())} href={link.toLowerCase()}>{link}</a>)
                })}
            </section>

            <section className='mini-bio'>
                <div class='image-header'>
                    <Image
                        src='/nate-headshot.jpg'
                        width='100'
                        height='100'
                    />
                    <h3>Portfolio for Nathen Johnson</h3>
                </div>
                <p>Professionally certified Full Stack Developer through Bottega University. Currently working for Florence One School District as a Full Stack Developer, formally called an Applications Developer.</p>
                <p>Website made with React, NextJS, and SCSS</p>

            </section>
        </footer>
    );
}