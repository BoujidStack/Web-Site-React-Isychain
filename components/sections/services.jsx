import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import StyleServices from '../../styles/sections/services.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
export default function Services(){
    return (
        <>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleServices.afterservice}>

            </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleServices.container}>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleServices.subcontainer}>
                    
                        <Container id="service" className={StyleServices.contentContainer}>
                            <Row style={{textAlign:"center"}}>
                            <h1 data-aos="fade-up" className={StyleServices.heading}>Nos services pour vous accompagner</h1>
                            <hr data-aos="fade-up" className={StyleServices.hr} />
                            </Row>
                            
                        </Container>
                        <Container className="pt-5 mt-5">
                            <Row className='d-flex justify-content-center'>
                                <Col data-aos="fade-up" xl={4} lg={4} md={4} sm={12} xs={12} className={StyleServices.serviceContainer}>
                                    <img  src="/assets/iaas.svg"  className={StyleServices.imgsv} />
                                    <div className={StyleServices.overlay}>
                                        <span className={StyleServices.texta}>Nous vous proposons une Blockchain adaptée à vous besoins : <br />
                                        <ul>
                                            <li className={StyleServices.li}>
                                            Déploiement facile et adapté sur le Cloud ou sur vous propres serveurs
                                            </li>
                                            <li className={StyleServices.li}>
                                            Intégration facile avec vos applications métier
                                            </li>
                                            <li className={StyleServices.li}>
                                            Administration et gestion de vous noueux Blockchain
                                            </li>
                                        </ul>
                                        </span>    
                                    </div>
                                </Col>
                                <Col data-aos="fade-up" xl={4} lg={4} md={4} sm={12} xs={12} className={StyleServices.serviceContainer}>
                                    <img  src="/assets/conseil.svg"  className={StyleServices.imgsv} />
                                    <div className={StyleServices.overlay}>
                                        <span>Nous vous aidons à vous forger une conviction et à élaborer une stratégie pour bénéficier des opportunités business offertes par la technologie Blockchain.</span>    
                                    </div>
                                </Col>
                                <Col data-aos="fade-up" xl={4} lg={4} md={4} sm={12} xs={12} className={StyleServices.serviceContainer}>
                                    <img  src="/assets/dev.svg"  className={StyleServices.imgsv} />
                                    <div className={StyleServices.overlay}>
                                        <span>Notre équipe d’ingénieurs réalise vos projets sur-mesure, du prototype à la mise en production et à l’exploitation de votre solution.</span>    
                                    </div>

                                </Col>
                                <Col data-aos="fade-up" xl={4} lg={4} md={4} sm={12} xs={12} className={StyleServices.serviceContainer}>
                                    <img  src="/assets/search.svg"  className={StyleServices.imgsv} />    
                                    <div className={StyleServices.overlay}>
                                        <span>Nous étudions et expérimentons l’impact de nouvelles technologies du Web Décentralisé (ZKP, IPFS, technologies de chiffrement...) pour votre activité.</span>    
                                    </div>

                                </Col>
                                <Col data-aos="fade-up" xl={4} lg={4} md={4} sm={12} xs={12} className={StyleServices.serviceContainer}>
                                    <img  src="/assets/formation.svg"  className={StyleServices.imgsv} />
                                    <div className={StyleServices.overlay}>
                                        <span>Nous formons les décideurs d’aujourd’hui et de demain dans la maîtrise des enjeux de la Blockchain au travers d’une pédagogie centrée sur les usages.</span>    
                                    </div>
                                </Col>
                                
                            </Row>
                        </Container>
                </Col>
            </Col>
        
        </>
    )
}