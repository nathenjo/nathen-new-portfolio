import Image from 'next/image';
import React from 'react';
import SocialLink from './socialLink';
import Placeholder from './placeholder';

export default function Footer(props) {

 const { propClass, links, setPageLoc } = props;

    return (
        <footer className={`footer-component ${propClass}`}>
            <section className='socials'>
                <h3>Socials</h3>
                <div className='social-links'>
                    <SocialLink
                        icon='bi-linkedin'
                        link='https://www.linkedin.com/in/nathen-johnson-67155920b/'
                    />
                    <SocialLink
                        icon='bi-github'
                        link='https://github.com/nathenjo'
                    />
                </div>
            </section>

            <Placeholder />

            <section className='mini-bio'>
                <div className='image-header'>
                    <Image
                        src='/nate-headshot.jpg'
                        width='100'
                        height='100'
                        className='footer-profile-pic'
                    />
                    <h3>Portfolio for Nathen Johnson</h3>
                </div>
                <p>Professionally certified Full Stack Developer through Bottega University. Currently working for Florence One School District as a Full Stack Developer, formally called an Applications Developer.</p>
                <code>Website made with React, NextJS, and SCSS</code>
            </section>
        </footer>
    );
}