import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import StyleContact from '../../styles/sections/contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { Form } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

export default function Contact(){
    const axios = require('axios');
    const [Lname, setNom] = useState("")
    const onChangeNom = (e) =>{
        setNom(e.target.value)
    }
    const [fName, setPrenom] = useState("")
    const onChangePrenom = (e) =>{
        setPrenom(e.target.value)
    }
    const [org, setOrg] = useState("")
    const onChangeOrg = (e) =>{
        setOrg(e.target.value)
    }
    const [phone, setPhone] = useState("")
    const onChangePhone = (e) =>{
        setPhone(e.target.value)
    }
    const [email, setEmail] = useState("")
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const [sub, setSubject] = useState("")
    const onChangeSubject = (e) =>{
        setSubject(e.target.value)
    }
    const [message, setSMessage] = useState("")
    const onChangeSMessage = (e) =>{
        setSMessage(e.target.value)
    }
    const [errorMessage, setErrorMessage] = useState("")
    const [error, setError] = useState(false)
    const [succesMessage, setSuccesMessage] = useState("")
    const [succes, setSucces] = useState(false)
    const onsubmitcontact = (e) =>{
        e.preventDefault()
        const form = document.getElementById('my_form');
        axios.post('https://europe-west3-isychain-773e0.cloudfunctions.net/api/v1/contact/contact', {
            Lname,    
            fName,
            org,
            phone,
            email,
            sub,
            message,
          })
          .then(function (response) {
            console.log(response);
            setSuccesMessage("Votre message a été envoyé avec succès")
            setSucces(true)
            setError(false)
            console.log(succesMessage)
            
          })
          .catch(function (error) {
            console.log(error);
            setErrorMessage(error.message)
            setError(true)
            setSucces(false)
            console.log(errorMessage)
          });
          form.reset()

    }


    return (
        <>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleContact.container}>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleContact.subcontainer}>
                        <Container className={StyleContact.contentContainer}>
                            <Row id="contact" style={{textAlign:"center"}}>
                            <h1 data-aos="fade-up" className={StyleContact.heading}>Contactez-nous</h1>
                            <hr data-aos="fade-up" className={StyleContact.hr} />
                            </Row>
                        </Container>
                        <Container data-aos="fade-up" className="pt-5 mt-5" className={StyleContact.container1hd}>
                            <Row className={StyleContact.formAboveContainer}>
                                <Col xl={4} lg={4} md={4} sm={4} xs={4} className={StyleContact.formContainerDesign}>
                                    <Row>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-3 ">
                                            <h1 id="contactHeading">Plus d'informations</h1>    
                                        </Col>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-3 ">
                                            <div className={StyleContact.iconContainer}><FontAwesomeIcon icon={solid('map-marked-alt')} /></div><h4 id="contactContent"> 265, Bd Zerktouni,9ème Etage, N° 92, Casablanca, Maroc</h4>    
                                        </Col>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-3 ">
                                            <div className={StyleContact.iconContainer}><FontAwesomeIcon icon={solid('phone')} /></div><h4 id="contactContent">  Phone: +212 7 77 00 09 97</h4>    
                                        </Col>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-3 ">
                                            <div className={StyleContact.iconContainer}><FontAwesomeIcon icon={solid('envelope')} /></div><h4 id="contactContent"> isychain@gmail.com</h4>    
                                        </Col> 
                                        
                                    </Row>
                                </Col>
                                <Col xl={8} lg={8} md={8} sm={8} xs={8} className={StyleContact.formContainer}>
                                 <Form onSubmit={onsubmitcontact} id="my_form">
                                 
                                
                                    <Form.Group className="mb-4">
                                        <Form.Label id="formTitle">Précisez votre message :</Form.Label>    
                                    </Form.Group >
                                    
                                     
                                        <Form.Group className="mb-2">
                                            <Form.Label>Nom</Form.Label>    
                                            <Form.Control onChange={onChangeNom} type="text" placeholder="Entrez votre nom*" />
                                        </Form.Group>
                                        <Form.Group className="mb-2">
                                            <Form.Label>Prénom</Form.Label>    
                                            <Form.Control onChange={onChangePrenom}  type="text" placeholder="Entrez votre prénom*" />
                                        </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Organisation</Form.Label>    
                                        <Form.Control onChange={onChangeOrg}  type="text" placeholder="Organization*" />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Adresse mail</Form.Label>    
                                        <Form.Control onChange={onChangeEmail}  type="email" placeholder="Entrez votre adresse mail*" />
                                    </Form.Group>  
                                    <Form.Group className="mb-4">
                                        <Form.Label>Numéro de téléphone</Form.Label>    
                                        <Form.Control onChange={onChangePhone}  type="tel" placeholder="Entrez votre numéro de téléphone" />
                                    </Form.Group> 
                                    <Form.Group className="mb-4">
                                        <Form.Label>Sujet</Form.Label>    
                                        <Form.Control onChange={onChangeSubject}  type="text" placeholder="Entrez votre sujet" />
                                    </Form.Group> 
                                    <Form.Group className="mb-4">
                                        <Form.Label>Message</Form.Label>    
                                        <Form.Control onChange={onChangeSMessage}  as="textarea" rows={3} placeholder="Dites nous en plus" />
                                    </Form.Group>   
                                    <Form.Group className="mb-4">
                                        <Button className={StyleContact.submit} type="submit">Envoyer votre message</Button>
                                    </Form.Group>   
                                    {error ? 
                                   
                                   <Form.Group className="mb-4">
                                   <Alert variant="danger">
                                   <Alert.Heading>{errorMessage}</Alert.Heading>
                                   </Alert>
                                   </Form.Group>
                                    : 
                                    null}
                                    {succes ? 
                                  
                                  <Form.Group className="mb-4">
                                  <Alert variant="success">
                                  <Alert.Heading>{succesMessage}</Alert.Heading>
                                  </Alert>
                                  </Form.Group>
                                   : 
                                   null}       
                                </Form> 
                                </Col>
                            </Row>
                                                       
                        </Container>


                        <Container data-aos="fade-up" className="pt-5 mt-5" className={StyleContact.container2hd}>
                            <Row className={StyleContact.formAboveContainer}>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleContact.formContainerDesign}>
                                    <Row>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-3 ">
                                            <h1 id="contactHeading">Plus d'informations</h1>    
                                        </Col>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-3 ">
                                            <div className={StyleContact.iconContainer}><FontAwesomeIcon icon={solid('map-marked-alt')} /></div><h4 id="contactContent"> 265, Bd Zerktouni,9ème Etage, N° 92, Casablanca, Maroc</h4>    
                                        </Col>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-3 ">
                                            <div className={StyleContact.iconContainer}><FontAwesomeIcon icon={solid('phone')} /></div><h4 id="contactContent">  Phone: +212 7 77 00 09 97</h4>    
                                        </Col>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-3 ">
                                            <div className={StyleContact.iconContainer}><FontAwesomeIcon icon={solid('envelope')} /></div><h4 id="contactContent"> isychain@gmail.com</h4>    
                                        </Col> 
                                        
                                    </Row>
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleContact.formContainer}>
                                 <Form onSubmit={onsubmitcontact}>
                                    <Form.Group className="mb-4">
                                        <Form.Label id="formTitle">Précisez votre message :</Form.Label>    
                                    </Form.Group>
                                        <Form.Group className="mb-2">
                                            <Form.Label>Nom</Form.Label>    
                                            <Form.Control onChange={onChangeNom} type="text" placeholder="Entrez votre nom" />
                                        </Form.Group>
                                        <Form.Group className="mb-2">
                                            <Form.Label>Prénom</Form.Label>    
                                            <Form.Control onChange={onChangePrenom}  type="text" placeholder="Entrez votre prénom" />
                                        </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Organisation</Form.Label>    
                                        <Form.Control onChange={onChangeOrg}  type="text" placeholder="Organization" />
                                    </Form.Group>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Adresse mail</Form.Label>    
                                        <Form.Control onChange={onChangeEmail}  type="email" placeholder="Entrez votre adresse mail" />
                                    </Form.Group>  
                                    <Form.Group className="mb-4">
                                        <Form.Label>Numéro de téléphone</Form.Label>    
                                        <Form.Control onChange={onChangePhone}  type="tel" placeholder="Entrez votre numéro de téléphone" />
                                    </Form.Group> 
                                    <Form.Group className="mb-4">
                                        <Form.Label>Sujet</Form.Label>    
                                        <Form.Control onChange={onChangeSubject}  type="text" placeholder="Entrez votre sujet" />
                                    </Form.Group> 
                                    <Form.Group className="mb-4">
                                        <Form.Label>Message</Form.Label>    
                                        <Form.Control onChange={onChangeSMessage}  as="textarea" rows={3} placeholder="Dites-nous en plus" />
                                    </Form.Group>   
                                    <Form.Group className="mb-4">
                                        <Button className={StyleContact.submit} type="submit">Envoyer votre message</Button>
                                    </Form.Group>          
                                </Form> 
                                </Col>
                            </Row>
                                                       
                        </Container>






                        <Container className={StyleContact.contentContainermap}>
                            <Row style={{textAlign:"center"}}>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="p-0 ">          
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6647.095784813371!2d-7.636546999999999!3d33.591086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33ed6479f15e23e5!2sBCNG!5e0!3m2!1sen!2sma!4v1649376143970!5m2!1sen!2sma" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </Col> 
                            </Row>
                        </Container>

                   
                       
                </Col>
            </Col>
        </>
    )
}