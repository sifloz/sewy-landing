import React, { Component } from 'react';

import Aux from '../Aux/Aux';
// import Typed from 'typed.js'; 
import * as assetsLibrary from '../../assets/assetsLibrary'; 
import * as displayData from './displayData';
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

class Layout extends Component {
    state = {
        clientView: true,
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
        survey: {
            stars: '',
            opinion: '',
            telephone: '',
        },
        modalIsOpen: false,
        posting: false,
    }
    
    componentDidMount() {
    //     // If you want to pass more options as props, simply add
    // // your desired props to this destructuring assignment.
    // const { strings } = this.props;
    // // You can pass other options here, such as typing speed, back speed, etc.
    // const options = {
    // 	strings: strings,
    //   typeSpeed: 50,
    //   backSpeed: 50
    // };
    // // this.el refers to the <span> in the render() method
    // this.typed = new Typed(this.el, options);
        
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
    //   this.typed.destroy();
    }

    emailChangedHandler = (event) => {
        //console.log(event.target.value);
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
        //console.log(event.target.value);
        const updatedOpinionElement = updateObject(this.state.survey, {
            opinion: event.target.value,
        });

        this.setState({
            ...this.state,
            survey: updatedOpinionElement,
        }); 
    }

    ratingStar = (ratingData) => {
        const GOOGLE_FORM_ENTRY = 'entry.197814354'
        const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf4BPvlnId9xpQg64YkI1o6QA04s5HDPLDrj-ZhEFs2jc-V4g/formResponse'
        const CORS_PROXY = 'https://cors-escape.herokuapp.com/'


        const formData = new FormData()
        formData.append(GOOGLE_FORM_ENTRY, ratingData)


        axios.post(GOOGLE_FORM_ACTION_URL, formData)
            .then((response) => {
                console.log('RESPONSE: '+response)
            }).catch((error) => {
                console.log('ERROR '+error)
            })
    };

    submitSurveyOpinion = () => {
        
        if(this.state.survey.opinion !== '') {
            this.setState({
                ...this.state,
                posting: true,
            })

            const GOOGLE_FORM_OPINION = 'entry.159650160'
            const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe3Sw_JbD9SCuH_m_NJuMINT6xJMGtz3tUsa_qSUDqJxXIT9Q/formResponse'
            const CORS_PROXY = 'https://cors-escape.herokuapp.com/'
    
            const formData = new FormData()
            formData.append(GOOGLE_FORM_OPINION, this.state.survey.opinion)

            axios.post(GOOGLE_FORM_ACTION_URL, formData)
            .then((response) => {
                console.log('RESPONSE: '+response)
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
                console.log('ERROR '+error)
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
    
    render() {
        return (
            <Aux>
                <Navbar />
                <SummaryContent summary={this.state.clientView ? this.state.summaries.client : this.state.summaries.business} />
                <div className="container">
                    <Benefits clientView={this.state.clientView}/>
                    <Instructions 
                        instructions={this.state.clientView ? this.state.instructions.client : this.state.instructions.business} />
                    {
                        !this.state.posting &&
                        <Survey 
                            opinion={this.state.survey.opinion}
                            clickedStar={(event) => this.selectedStarHandler(event)}
                            opinionChanged={(event) => this.opinionChangedHandler(event)}
                            submitOpinion={this.submitSurveyOpinion}
                        />
                    }
                </div>
                <Modal onClose={this.toggleModalClose}>
                    <div className="text-center">
                        <img src={assetsLibrary.iconSmiley} alt="Happy face" width="100" height="100" />
                        <h4 className="mt-2">¡Gracias por tu opinión!</h4>
                    </div>
                        Si estás interesado en Sewy y lo que podrá ofrecer.<br/>
                        Por favor, escribe tu correo electrónico y te avisamos cuando puedas comenzar a utilizarlo.<br/>
                        <small>Prometemos no enviarte Spam.</small>
                    <div className="input-group mb-3">
                        <Input 
                            type={this.state.email.elementConfig.type} 
                            placeholder={this.state.email.elementConfig.placeholder} 
                            isValid={this.state.email.valid} 
                            touched={this.state.email.touched}
                            changed={(event) => this.emailChangedHandler(event)}
                        />
                        <div className="input-group-append">
                            <Button type="button" disabled={!this.state.email.valid}>Enviar</Button>
                        </div>
                    </div>
                </Modal>
                <Offer />
                <Footer />
            </Aux>
        );
    }
}

export default Layout;