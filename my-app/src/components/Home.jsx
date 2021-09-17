import React from 'react';
import Banner from "./Banner";
import Contact from './Contact';
import Profile from './Profile';
import Skill from './Skill';

function Home(){
    return (
        <>
            <Banner />
            <Profile />
            <Skill />
            <Contact />
        </>
    );
}

export default Home;