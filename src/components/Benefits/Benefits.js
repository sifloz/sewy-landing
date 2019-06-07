import React from 'react';

import * as assetsLibrary from '../../assets/assetsLibrary';
import {benefitsLibrary} from './benefitsLibrary';
import Benefit from './Benefit/Benefit';

const benefits = (props) => {

    let benefitsView = null;

    if(props.clientView) {
        benefitsView = benefitsLibrary.client;
    } else {
        benefitsView = benefitsLibrary.business;
    }

    return (
        <div className="row">
            {
                Object.keys(benefitsView).map((bnf) => (
                    <Benefit image={benefitsView[bnf].image} 
                        title={benefitsView[bnf].title} 
                        description={benefitsView[bnf].description} />
                ))
            }
        </div>
    );
};

export default benefits;