import React from 'react';

const benefit = (props) => (
    <div className="col-md-4 mb-5">
        <div className="h-100">
            <div className="text-center wow animated jackInTheBox">
                <img src={props.image} alt="like" width="100" height="100"/>
                <h5 className="card-title mt-3">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    </div>
)

export default benefit;