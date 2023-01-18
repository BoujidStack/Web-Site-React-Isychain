import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import StylePresentation from '../../styles/sections/presentation.module.css'
export default function Presentation(){
    return (
        <>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StylePresentation.container}>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StylePresentation.subcontainer}>
                    
                        <Container className={StylePresentation.contentContainer}>
                            <Row id="who" style={{textAlign:"center"}}>
                            <h1 data-aos="fade-up" className={StylePresentation.heading}>Qui sommes-nous ?</h1>
                            <hr data-aos="fade-up" className={StylePresentation.hr} />
                            </Row>
                            
                        </Container>
                        <Container className="pt-5 mt-5">
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <img data-aos="fade-up" src="/assets/vocation.gif" className={StylePresentation.imgLeft} />
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="d-flex align-items-center ps-5" style={{borderRadius:"6px"}}>
                                    <div className={StylePresentation.divContent}>
                                        <h1 data-aos="fade-up">Notre vocation</h1>
                                        <hr data-aos="fade-up" className={StylePresentation.hr2} />
                                        <p data-aos="fade-up" className={StylePresentation.p}    >IsyChain est une entreprise marocaine mais à vocation africaine regroupant une équipe pluridisciplinaire d'experts passionnés par les technologies du web décentralisés et spécialisés dans la technologie blockchain.</p>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container>
                        <Container className="pt-5 mt-5">
                            <Row>
                                  <Col xl={6} lg={6} md={6} sm={12} xs={12} className={StylePresentation.imgCon}>
                                <img data-aos="fade-up" src="/assets/Rocket2.gif" className={StylePresentation.img} />
                                    
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="d-flex align-items-center ps-5" style={{borderRadius:"6px"}}>
                                    <div className={StylePresentation.divContent}>
                                        <h1 data-aos="fade-up">Notre mission</h1>
                                        <hr data-aos="fade-up" className={StylePresentation.hr2} />
                                        <p data-aos="fade-up" className={StylePresentation.p} >Permettre aux organisations de se saisir au mieux des opportunités de la nouvelle économie numérique, en nous appuyant sur des compétences stratégiques, techniques et analytiques de haute valeur ajoutée sur la technologie blockchain.</p>
                                    </div>
                                    
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12} className={StylePresentation.imgCon2}>
                                <img data-aos="fade-up" src="/assets/Rocket2.gif" className={StylePresentation.img} />
                                    
                                </Col>
                            </Row>
                        </Container>
                        <Container className="pt-5 mt-5">
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <img data-aos="fade-up" src="/assets/ambition.gif" className={StylePresentation.imgLeft} />
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12} className="d-flex align-items-center ps-5" style={{borderRadius:"6px"}}>
                                    <div className={StylePresentation.divContent}>
                                        <h1 data-aos="fade-up">Notre ambition</h1>
                                        <hr data-aos="fade-up" className={StylePresentation.hr2} />
                                        <p data-aos="fade-up" className={StylePresentation.p} >Nous positionner comme un acteur incontournable pour vous aider à déployer des solutions blockchain et bénéficier de ses diverses applications.</p>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container>
                </Col>
            </Col>
        
        </>
    )
}