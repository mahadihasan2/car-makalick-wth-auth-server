import React from 'react';
import Bennar from '../Bennar/Bennar';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;