import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Technologie from '../../styles/sections/technologie.module.css'
export default function Technologies(){
    return (
        <>  
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={Technologie.container}>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={Technologie.containerx}>
            <Container className={Technologie.contentContainer}>
                    <Row style={{textAlign:"center"}}>
                    <h1 data-aos="fade-up" className={Technologie.heading}>Pourquoi Nous Choisir ?</h1>
                    <hr data-aos="fade-up" className={Technologie.hr} />
                    <h3 data-aos="fade-up" className={Technologie.subheading}>Caractéristiques de la Technologie IsyChain</h3>
                    </Row>
                </Container>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={Technologie.container2}>
                <Container className={Technologie.contentContainer}>
                    <Row className="justify-content-center">
                        
                    <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-4" data-aos="fade-up">
                            <Row>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Technologie.iconpl}>
                                    <img src="/assets/4.png"  className={Technologie.icon} />
                                </Col>
                                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <h5 className={Technologie.Caracteristique}>Interopérabilité</h5>
                                    <p className={Technologie.subCaracteristique}>Facilite l’intégration avec d’autres systèmes existants</p>

                                </Col>
                            </Row>
                        </Col> 

                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-4" data-aos="fade-up">
                            <Row>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Technologie.iconpl}>
                                    <img src="/assets/2.png"  className={Technologie.icon} />
                                </Col>
                                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <h5 className={Technologie.Caracteristique}>Ecologie</h5>
                                    <p className={Technologie.subCaracteristique}>Contribue à l’amélioration de la qualité de l’environnement par  une consommation faible de l’énergie contrairement aux Blockchains existantes.</p>

                                </Col>
                            </Row>
                        </Col> 

                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-4" data-aos="fade-up">
                            <Row>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Technologie.iconpl}>
                                    <img src="/assets/3.png"  className={Technologie.icon} />
                                </Col>
                                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <h5 className={Technologie.Caracteristique}>Performance</h5>
                                    <p className={Technologie.subCaracteristique}>Améliore largement les performances en validant les transactions des données en quelques secondes.</p>

                                </Col>
                            </Row>
                        </Col> 
                       
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-4" data-aos="fade-up">
                            <Row>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Technologie.iconpl}>
                                    <img src="/assets/5.png"  className={Technologie.icon} />
                                </Col>
                                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <h5 className={Technologie.Caracteristique}>Scalabilité</h5>
                                    <p className={Technologie.subCaracteristique}>Facilite la mise à l’échelle des réseaux d’entreprises.</p>

                                </Col>
                            </Row>
                        </Col> 
                        <Col xl={6} lg={6} md={6} sm={12} xs={12} className="mt-4" data-aos="fade-up">
                            <Row>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12} className={Technologie.iconpl}>
                                    <img src="/assets/1.png"  className={Technologie.icon} />
                                </Col>
                                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <h5 className={Technologie.Caracteristique}>Sécurité</h5>
                                    <p className={Technologie.subCaracteristique}>Assurée exclusivement par un nouveau protocole de consensus appelé Preuve de Réputation & Confiance objet d’un Brevet d’invention.</p>

                                </Col>
                            </Row>
                        </Col> 
                    </Row>                 
            </Container>
            </Col>
            </Col>  
            </Col> 
             
        
        </>
    )
}