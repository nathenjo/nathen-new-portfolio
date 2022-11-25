import React, { useEffect, useState } from "react";
import Footer from "../components/footer";

import NavComponent from "../components/nav";
import Placeholder from "../components/placeholder";
import ProfileCard from "../components/profileCard";
import SkillCard from "../components/skillCard";
import Title from "../components/title";

export default function Index() {

    const [pageLoc, setPageLoc] = useState('home');
    const [skillsSubheading, setSkillsSubheading] = useState('Click');

    const navLinks = ['Home', 'About', 'Projects', 'Contact'];
    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, [])

    useEffect(() => {
        window.addEventListener('resize', function() {
            setWindowWidth(window.innerWidth);
        });
        if (windowWidth < 850) {
            setSkillsSubheading('Tap');
        } else {
            setSkillsSubheading('Click');
        };
    }, [windowWidth])


    return(
        <div className='index'>
            <NavComponent navLinks={navLinks} propClass='index-nav' setPageLoc={setPageLoc} windowWidth={windowWidth} />

            <section className='profile-info'>
                {windowWidth > 850 && <Placeholder propClass='pi-placeholder' />}
                <Title title='Portfolio' propClass='skills-heading' />
                <ProfileCard propClass='index-pc' />
            </section>
            <Title title='Skills' propClass='skills-heading' />
            <div className='skills-subheading'>({skillsSubheading} on card to see details)</div>
            <section className='content'>
                <SkillCard
                    imageSrc='/python-logo.png'
                    cardTitle='Python'
                    cardCaption='Professionally certified in Python development through Bottega University, Full Stack Certificate'
                    projects={['Chat App Capstone API', 'Automation Scripts']}
                />
                <SkillCard
                    imageSrc='/javascript-logo.svg'
                    cardTitle='Javascript'
                    cardCaption='Professionally certified in Javascript development through Bottega University, Full Stack Certificate, including modern ES6 syntax and JQuery'
                    projects={['Personal Portfolio', 'devCamp eCommerce Site', 'Chat App Capstone']}
                />
                <SkillCard
                    imageSrc='/react-logo.png'
                    cardTitle='React'
                    cardCaption='Professionally certified in React development through Bottega University, Full Stack Certificate'
                    projects={['Personal Portfolio', 'devCamp eCommerce Site', 'Chat App Capstone']}
                />
                <SkillCard
                    imageSrc='/git-icon.png'
                    cardTitle='Git'
                    cardCaption='Professionally certified in Git through Bottega University, Full Stack Certificate and regulary use and improve through personal projects'
                    projects={['See GitHub link in footer']}
                />
                <SkillCard
                    imageSrc='/aspnet-logo.png'
                    cardTitle='Virtual Basic/ASP.Net'
                    cardCaption='Professional experience developing ASP.net web applications with Florence Once Schools, Applications Developer'
                    projects={['Supplemental Pay Application', 'Financial Reporting Application', 'Transportation Call Center Application']}
                />
                <SkillCard
                    imageSrc='/mongodb-logo.png'
                    cardTitle='MongoDB'
                    cardCaption='Professionally certified in MongoDB through Bottega University, Full Stack Certificate and regulary use and improve through personal projects'
                    projects={[]}
                />
            </section>
            <section className='footer-section'>
                <Footer
                    propClass='index-footer'
                    links={navLinks}
                    setPageLoc={setPageLoc}
                />
            </section>
        </div>
    )
}