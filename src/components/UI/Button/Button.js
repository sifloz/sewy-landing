import React from 'react';

const button = (props) => {
    return (
        <button 
            className="btn btn-primary" 
            type={props.type ? props.type : ''}
            data-toggle={props.modal ? 'modal' : ''}
            data-target={props.modal ? props.modal : ''}
        >
            {props.children}
        </button>
    );
};

export default button;