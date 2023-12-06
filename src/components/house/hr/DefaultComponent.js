import React from 'react';
import Villa from './Villa';
import Area from './Area';
import About from './About';
import Info from './Info';
import Photos from './Photos';

const DefaultComponent = () => {
    return (
        <div>
            <Villa />
            <Area />
            <About />
            <Info />
            <Photos />
        </div>
    );
};

export default DefaultComponent;
