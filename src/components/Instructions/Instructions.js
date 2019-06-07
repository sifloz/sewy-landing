import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Instruction from '../../components/Instructions/Instruction/Instruction';

const instructions = (props) => {
    let transformedInstructions = null;
    console.log('PROPS; '+props.instructions);
    
    if(props.instructions) {
        transformedInstructions = Object.keys(props.instructions)
        .map((inst, i) => {
            return <Instruction key={i} instructionData={props.instructions[inst]} />
        });
    }

    return (
        <Aux>
            {transformedInstructions}
        </Aux>
    );
};

export default instructions;