import React from 'react';
import Offer from './Offer';
import Vita from './Vita';
import Building from './Building';
import Team from './Team';
import Contract from './Contract';

const DefaultComponent = () => {
    return (
        <div>
            <Offer />
            <Vita />
            <Building />
            <Team />
            <Contract />
        </div>
    );
};

export default DefaultComponent;
