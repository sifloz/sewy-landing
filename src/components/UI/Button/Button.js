import React from 'react';

const button = (props) => {
    return (
        <button 
            className="btn btn-primary" 
            type={props.type ? props.type : ''}
            data-toggle={props.modal ? 'modal' : ''}
            data-target={props.modal ? props.modal : ''}
            disabled={props.disabled}
            style={{cursor: props.disabled ? 'not-allowed' : 'pointer'}}
            onClick={props.submit ? props.submit : null}
        >
            {props.children}
        </button>
    );
};

export default button;