import React from 'react';

import Aux from '../../hoc/Aux/Aux';

const instructions = (props) => {
    let transformedInstructions = null;
    console.log('PROPS; '+props.instructions);
    
    if(props.instructions) {
        transformedInstructions = Object.keys(props.instructions)
        .map((inst, i) => {
            let instruction = null;
            let instructionImage = null;
            let instructionDescrption = null;

            instructionImage = (
                <div className="col-md-5 text-center mt-5">
                    <img src={props.instructions[inst].image} alt={props.instructions[inst].title} height="450"/>
                </div>
            );

            instructionDescrption = (
                <div className={'col-md-7 mt-3 ' + (props.instructions[inst].mockupPosition === 'right' ? 'text-right' : '')}>
                    <h2>{props.instructions[inst].title}</h2>
                    { props.instructions[inst].highlight &&
                        <h5>{props.instructions[inst].highlight}</h5>
                    }
                    <p>
                        {
                            props.instructions[inst].description.map((desc, i) => (
                                <Aux key={i}>{desc}<br/></Aux>
                            ))
                        }
                    </p>
                </div>
            );

            if(props.instructions[inst].mockupPosition === 'left') {
                instruction = (
                    <div key={i} className="row align-items-center">
                        {instructionImage}
                        {instructionDescrption}
                    </div>
                );
            } else {
                instruction = (
                    <div key={i} className="row align-items-center">
                        {instructionDescrption}
                        {instructionImage}
                    </div>
                );
            }
            
            return instruction;
        });
    }

    
    //console.log(transformedInstructions);

    return (
        <Aux>
            {transformedInstructions}
        </Aux>
    );
};

export default instructions;