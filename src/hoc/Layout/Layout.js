import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import * as assetsLibrary from '../../assets/assetsLibrary'; 
import * as displayData from './displayData';
import * as formEntries from './formEntries';
import Modal from '../../components/UI/Modal/Modal';
import Navbar from '../../components/Navbar/Navbar';
import Benefits from '../../components/Benefits/Benefits';
import Instructions from '../../components/Instructions/Instructions';
import Survey from '../../components/Survey/Survey';
import Offer from '../../components/Offer/Offer';
import Footer from '../../components/Footer/Footer';
import SummaryContent from '../../components/SummaryContent/SummaryContent';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import {updateObject, checkValidity} from '../../shared/utility';
import axios from 'axios';
import WOW from 'wowjs';

class Layout extends Component {
    state = {
        instructions: displayData.instructions,
        summaries: displayData.summaries,
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'micorreo@email.com',
            },
            value: '',
            validation: {
                required: true,
                isEmail: true,
            },
            valid: false,
            touched: false,
        },
        telephone: {
            elementType: 'input',
            elementConfig: {
                type: 'tel',
                placeholder: 'Teléfono',
            },
            value: '',
            validation: {
                required: true,
                isPhone: true,
                minLength: 7,
                maxLength: 15,
            },
            valid: false,
            touched: false,
        },
        personName: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Tú nombre',
            },
            value: '',
            validation: {
                required: true,
                minLength: 3,
            },
            valid: false,
            touched: false,
        },
        survey: {
            stars: '',
            opinion: '',
            telephone: '',
        },
        modalIsOpen: false,
        posting: false,
    }

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    emailChangedHandler = (event) => {
        const updatedEmailElement = updateObject(this.state.email, {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.email.validation),
            touched: true,
        });

        this.setState({
            ...this.state,
            email: updatedEmailElement,
        });
    }

    nameChangedHandler = (event) => {
        const updatedNameElement = updateObject(this.state.personName, {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.personName.validation),
            touched: true,
        });

        this.setState({
            ...this.state,
            personName: updatedNameElement,
        });
    }

    telephoneChangedHandler = (event) => {
        const updatedTelephoneElement = updateObject(this.state.telephone, {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.telephone.validation),
            touched: true,
        });

        this.setState({
            ...this.state,
            telephone: updatedTelephoneElement,
        });
    }

    selectedStarHandler = (event) => {
        const updateSelectedStar = updateObject(this.state.survey, {
            stars: event.target.value,
        });

        this.setState({
            ...this.state,
            survey: updateSelectedStar,
        });

        this.ratingStar(event.target.value);
    }

    opinionChangedHandler = (event) => {
        const updatedOpinionElement = updateObject(this.state.survey, {
            opinion: event.target.value,
        });

        this.setState({
            ...this.state,
            survey: updatedOpinionElement,
        }); 
    }

    ratingStar = (ratingData) => {
        const formData = new FormData()
        formData.append(formEntries.GOOGLE_FORM_ENTRY, ratingData)
        formData.append(formEntries.GOOGLE_FORM_RATING_TYPE_ENTRY, this.props.clientView ? 'Cliente' : 'Negocio')

        axios.post(formEntries.GOOGLE_FORM_RATING_ACTION_URL, formData)
            .then((response) => {
                //Response
            }).catch((error) => {
                //Error
            })
    };

    submitSurveyOpinionHandler = () => {
        
        if(this.state.survey.opinion !== '') {
            this.setState({
                ...this.state,
                posting: true,
            })

            const formData = new FormData()
            formData.append(formEntries.GOOGLE_FORM_OPINION, this.state.survey.opinion)
            formData.append(formEntries.GOOGLE_FORM_OPINION_TYPE_ENTRY, this.props.clientView ? 'Cliente' : 'Negocio')

            axios.post(formEntries.GOOGLE_FORM_OPINION_ACTION_URL, formData)
            .then((response) => {
                console.log('[OPINION] RESPONSE: '+response)
                this.setState({
                    ...this.state,
                    survey: {
                        ...this.state.survey,
                        stars: '',
                        opinion: '',
                        telephone: '',
                    },
                    posting: false,
                })
            }).catch((error) => {
                console.log('[OPINION] ERRORR '+error)
                this.setState({
                    ...this.state,
                    survey: {
                        ...this.state.survey,
                        stars: '',
                        opinion: '',
                        telephone: '',
                    },
                    posting: false,
                })
            })
        }
    }

    submitedEmailHandler = () => {
        if (this.state.email.valid) {
            const formData = new FormData()
            formData.append(formEntries.GOOGLE_FORM_EMAIL, this.state.email.value)
            formData.append(formEntries.GOOGLE_FORM_EMAIL_TYPE_ENTRY, this.props.clientView ? 'Cliente' : 'Negocio')
            formData.append(formEntries.GOOGLE_FORM_TELEPHONE, this.state.telephone.value)
            formData.append(formEntries.GOOGLE_FORM_PERSON_NAME, this.state.personName.value)

            axios.post(formEntries.GOOGLE_FORM_EMAIL_ACTION_URL, formData)
            .then((response) => {
                this.setState({
                    ...this.state,
                    email: {
                        ...this.state.email,
                        valid: false,
                        touched: false,
                        value: '',
                    },
                    personName: {
                        ...this.state.personName,
                        valid: false,
                        touched: false,
                        value: '',
                    },
                    telephone: {
                        ...this.state.telephone,
                        valid: false,
                        touched: false,
                        value: '',
                    },
                });
            }).catch((error) => {
                this.setState({
                    ...this.state,
                    email: {
                        ...this.state.email,
                        valid: false,
                        touched: false,
                        value: '',
                    },
                    personName: {
                        ...this.state.personName,
                        valid: false,
                        touched: false,
                        value: '',
                    },
                    telephone: {
                        ...this.state.telephone,
                        valid: false,
                        touched: false,
                        value: '',
                    },
                });
            })
        }
    }
    
    render() {

       let modalDescription = (
            <div>
                Si estás interesado en Sewy y lo que podrá ofrecer.<br/>
                Por favor, escribe tu correo electrónico y te avisamos cuando puedas comenzar a utilizarlo.<br/>
                <small>Prometemos no enviarte Spam.</small>
            </div>
       );

       let disabledButton = null;

       if(!this.props.clientView) {
            disabledButton = this.state.email.valid && this.state.personName.valid && this.state.telephone.valid;

            modalDescription = (
                <div>
                    Para ofrecer tus servicios en Sewy, por favor proporciona los siguientes datos.<br/>
                    <small>No enviaremos Spam</small>
                    <div className="form-row">
                        <div className="col-md-7">
                            <Input 
                                type={this.state.personName.elementConfig.type} 
                                placeholder={this.state.personName.elementConfig.placeholder}
                                isValid={this.state.personName.valid}
                                touched={this.state.personName.touched}
                                changed={(event) => this.nameChangedHandler(event)}
                                value={this.state.personName.value}
                            />
                        </div>
                        <div className="col-md-5">
                            <Input 
                                type={this.state.telephone.elementConfig.type} 
                                placeholder={this.state.telephone.elementConfig.placeholder}
                                isValid={this.state.telephone.valid}
                                touched={this.state.telephone.touched}
                                changed={(event) => this.telephoneChangedHandler(event)}
                                value={this.state.telephone.value}
                                invalid={!this.state.telephone.valid}
                            />
                        </div>
                    </div>
                </div>
            );
       }

        return (
            <Aux>
                <Navbar />
                <SummaryContent summary={this.props.clientView ? this.state.summaries.client : this.state.summaries.business} />
                <div className="container">
                    <Benefits clientView={this.props.clientView} />
                    <Instructions 
                        instructions={this.props.clientView ? this.state.instructions.client : this.state.instructions.business} />
                    {
                        !this.state.posting &&
                        <Survey 
                            clientView={this.props.clientView}
                            opinion={this.state.survey.opinion}
                            clickedStar={(event) => this.selectedStarHandler(event)}
                            opinionChanged={(event) => this.opinionChangedHandler(event)}
                            submitOpinion={this.submitSurveyOpinionHandler}
                        />
                    }
                </div>
                <Modal onClose={this.toggleModalClose}>
                    <div className="text-center">
                        <img src={assetsLibrary.iconSmiley} alt="Happy face" width="90" height="90" />
                        <h4 className="mt-2">¡Gracias por tu opinión!</h4>
                    </div>
                    {modalDescription}
                    <div className="input-group mb-3 mt-1">
                        <Input 
                            type={this.state.email.elementConfig.type} 
                            placeholder={this.state.email.elementConfig.placeholder} 
                            isValid={this.state.email.valid} 
                            touched={this.state.email.touched}
                            changed={(event) => this.emailChangedHandler(event)}
                            value={this.state.email.value}
                        />
                        <div className="input-group-append">
                            <Button 
                                type="button" 
                                modalButton
                                disabled={this.props.clientView ? !this.state.email.valid : !disabledButton}
                                submitEmail={this.submitedEmailHandler}
                                >Enviar</Button>
                        </div>
                    </div>
                </Modal>
                { this.props.clientView &&
                    <Offer />
                }
                <Footer />
            </Aux>
        );
    }
}

export default Layout;