import React from 'react';
import Banner from '../components/banner/Banner';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import PassionDesign from '../components/PassionDesign';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <PassionDesign></PassionDesign>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;