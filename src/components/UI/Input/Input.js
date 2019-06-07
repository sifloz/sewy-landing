import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

const input = (props) => {
    return (
        <Aux>
            <input 
                type={props.type}
                className={'form-control ' + (props.isValid ? 'is-valid' : '')} 
                placeholder={props.placeholder}
                aria-label={props.placeholder} />
        </Aux>
    );
};

export default input;