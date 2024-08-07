import React, { useEffect, useState } from "react";
import Footer from "../components/footer";

import NavComponent from "../components/nav";
import Placeholder from "../components/placeholder";
import ProfileCard from "../components/profileCard";
import SkillCard from "../components/skillCard";
import Title from "../components/title";

export default function Index({ navLinks, windowWidth }) {

    const [pageLoc, setPageLoc] = useState('home');
    const [skillsSubheading, setSkillsSubheading] = useState('Click');

    useEffect(() => {
        if (windowWidth < 850) {
            setSkillsSubheading('Tap');
        } else {
            setSkillsSubheading('Click');
        };
    }, [windowWidth])

    return(
        <div className='index'>
            {/* <NavComponent navLinks={navLinks} propClass='index-nav' setPageLoc={setPageLoc} windowWidth={windowWidth} /> */}

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
                    projects={[{'text':'Chat App Capstone API','link':''}, {'text':'Automation Scripts','link':''}]}
                />
                <SkillCard
                    imageSrc='/javascript-logo.svg'
                    cardTitle='Javascript'
                    cardCaption='Professionally certified in Javascript development through Bottega University, Full Stack Certificate, including modern ES6 syntax and JQuery'
                    projects={[{'text':'Personal Portfolio','link':''}, {'text':'devCamp eCommerce Site','link':''}, {'text':'Chat App Capstone','link':''}]}
                />
                <SkillCard
                    imageSrc='/react-logo.png'
                    cardTitle='React'
                    cardCaption='Professionally certified in React development through Bottega University, Full Stack Certificate'
                    projects={[{'text':'Personal Portfolio','link':''}, {'text':'devCamp eCommerce Site','link':''}, {'text':'Chat App Capstone','link':''}]}
                />
                <SkillCard
                    imageSrc='/git-icon.png'
                    cardTitle='Git'
                    cardCaption='Professionally certified in Git through Bottega University, Full Stack Certificate and regulary use and improve through personal projects'
                    projects={[{'text':'See GitHub link in footer','link':''}]}
                />
                <SkillCard
                    imageSrc='/aspnet-logo.png'
                    cardTitle='Virtual Basic/ASP.Net'
                    cardCaption='Professional experience developing ASP.Net web applications with Florence Once Schools, Applications Developer'
                    projects={[{'text':'The Shady Rest','link':'https://theshadyrest.com'},{'text':'Supplemental Pay Application','link':''}, {'text':'Financial Reporting Application','link':''}, {'text':'Transportation Call Center Application','link':''}]}
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