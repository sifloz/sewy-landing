import React from 'react';

const textarea = (props) => (
    <textarea 
        className="form-control form-rounded" 
        id={props.id} rows={props.rows} 
        placeholder={props.placeholder}
        onChange={props.changed}
        value={props.opinionText}
    ></textarea>
);

export default textarea;