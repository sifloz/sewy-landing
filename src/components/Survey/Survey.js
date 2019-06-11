import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import Button from '../UI/Button/Button';
import Textarea from '../UI/Textarea/Textarea';
import Star from './Star/Star';

const survey = (props) => {
    
    let stars = [];

    for(let i = 10; i > 0; i--) {
        stars.push(<Star key={'star'+i} starId={'star'+i} starValue={i} starTitle={i+' star'} clicked={props.clickedStar}/>);
    }
    
    return (
        <Aux>
            <div className="row mt-5 pt-5 justify-content-center">
                <div className="col-md-9 text-center">
                    <h2 className="special-title">¿Qué te parece?</h2>
                    <p style={{fontWeight: '500', fontSize: '18px'}}>
                        Estamos acelerando el proceso para llevar Sewy hasta ti.<br/>
                        Por favor, ayudános contestando la siguiente encuesta.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-sm-12 mt-3 mb-5 mx-auto">
                    <div className="text-center">
                        <div className="card-body align-items-center justify-content-center">
                            <label>En una escala del 1 al 10<br/>¿Qué tan probable es que utilices y recomiendes Sewy?</label>
                            <div className="container starrating risingstar d-flex justify-content-center flex-row-reverse">
                                {stars}
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="opinion">
                                    <b className="lead">¡Danos tu opinión!</b><br/>
                                    Coméntanos todas las dudas, preguntas y sugerencias sobre Sewy<br/>
                                    <small>(tu respuesta es anónima)</small>
                                </label>
                                <Textarea id="opinion" rows="5" placeholder="Escribe aquí tus comentarios..." opinionText={props.opinion} changed={props.opinionChanged} />
                            </div>
                            <Button modal="#exampleModal" type='submit' submit={props.submitOpinion}>{props.clientView ? 'Enviar mi opinión' : 'Enviar mi opinión y conocer más'}</Button>
                        </div>
                    </div>	
                </div>
            </div>
        </Aux>
    );
};

export default survey;