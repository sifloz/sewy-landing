import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

const instruction = (props) => {
    
    let instructionImage = null;
    let instructionDescrption = null;
    let instruction = null;
    
    instructionImage = (
        <div className={'col-md-5 text-center wow animated zoomIn ' + (props.instructionData.mockupPosition === 'right' ? 'mt-3' : 'mt-5')}>
            <img src={props.instructionData.image} alt={props.instructionData.title} height="450"/>
        </div>
    );

    instructionDescrption = (
        <div className={'col-md-7 ' + (props.instructionData.mockupPosition === 'right' ? 'mt-5 text-right' : 'mt-3')}>
            <h2>{props.instructionData.title}</h2>
            { props.instructionData.highlight &&
                <h5>{props.instructionData.highlight}</h5>
            }
            <p>
                {
                    props.instructionData.description.map((desc, i) => (
                        <Aux key={i}>{desc}<br/></Aux>
                    ))
                }
            </p>
        </div>
    );
    
    if(props.instructionData.mockupPosition === 'left') {
        instruction = (
            <div className="row align-items-center">
                {instructionImage}
                {instructionDescrption}
            </div>
        );
    } else {
        instruction = (
            <div className="row align-items-center">
                {instructionDescrption}
                {instructionImage}
            </div>
        );
    }
   
    return (
        <Aux>
            {instruction}
        </Aux>
    );
};

export default React.memo(instruction);