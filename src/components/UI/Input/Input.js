import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

const input = (props) => {
    
    let activeClassName = 'form-control';

    if(props.touched && props.isValid) {
        activeClassName += ' is-valid';
    } /*else if (props.touched && !props.isValid) {
        activeClassName += ' is-invalid';
    }*/
    if(props.touched && props.invalid) {
        activeClassName += ' is-invalid';
    }
    
    return (
        <Aux>
            <input 
                type={props.type}
                className={activeClassName} 
                placeholder={props.placeholder}
                aria-label={props.placeholder} 
                onChange={props.changed}
                value={props.value}
                />
        </Aux>
    );
};

export default input;