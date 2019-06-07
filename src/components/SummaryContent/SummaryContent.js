import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import * as assetsLibrary from '../../assets/assetsLibrary';

const summaryContent = (props) => {
    console.log(props);
    return (
        <header className="py-5 mb-5">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-md-6">
                        <h1 className="mb-2 special-title">{props.summary.title}</h1>
                        <p className="lead mb-5">
                            {
                                props.summary.description.map((desc, i) => (
                                    <Aux key={i}>
                                        {desc}<br />
                                    </Aux>
                                ))
                            }
                        </p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={assetsLibrary.mainHeaderImage} alt={props.summary.title} height="380"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default summaryContent;