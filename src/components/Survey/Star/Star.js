import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

const star = (props) => (
    <Aux>
        <input type="radio" id={props.starId} name="rating" value={props.starValue} />
        <label htmlFor={props.starId} title={props.starTitle}>{props.starValue}</label>
    </Aux>
);

export default star;