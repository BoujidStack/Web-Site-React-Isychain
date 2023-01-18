import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import StyleAbstract from '../../styles/sections/abstract.module.css'
import Button from 'react-bootstrap/Button';
export default function Abstract(){
    return (
        <>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleAbstract.container}>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleAbstract.subcontainer}>
                        <Container id="abstarct" fluid className={StyleAbstract.contentContainer}>
                            
                            <Row data-aos="fade-up" className={StyleAbstract.rowx}  >
                               
                                <Col xl={6} lg={6} md={6} sm={12} xs={12} style={{textAlign:"center;"}}  >
                                    <h2 className={StyleAbstract.h2}><span className={StyleAbstract.span}>10,000x </span> Plus Ecologique</h2>
                                    <h2 className={StyleAbstract.h2}><span className={StyleAbstract.span}>1,000x </span>  Moins Cher</h2>
                                    <h2 className={StyleAbstract.h2}><span className={StyleAbstract.span}>100x </span> Plus Rapide</h2>
                                    <h2 className={StyleAbstract.h2}><span className={StyleAbstract.span}>1°</span> Au Maroc et en Afrique</h2>
                                    <h5 className={StyleAbstract.h5}>Nous facilitons votre Transformation Numérique grâce à une nouvelle Blockchain Rapide et Durable</h5>
                                    <Button href="#contact" className={StyleAbstract.btn}>Contacter-Nous</Button>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}  style={{textAlign:"center;"}} >
                                    <img className={StyleAbstract.img} data-aos="fade-up" src="/assets/imgright.svg" />  
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12} >
                        
                                    
                                </Col>
                            </Row>    
                                              
                        </Container>  
                        
                          
                </Col>
                
            </Col>
        
        </>
    )
}