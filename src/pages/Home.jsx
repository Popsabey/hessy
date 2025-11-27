import React from 'react';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import HowItWorks from '../components/HowItWorks';
import Outcomes from '../components/Outcomes';
import Features from '../components/Features';
import Transformation from '../components/Transformation';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <main>
            <Hero />
            <PainPoints />
            <HowItWorks />
            <Outcomes />
            <Features />
            <Transformation />
            <Pricing />
            <FAQ />
        </main>
    );
};

export default Home;
