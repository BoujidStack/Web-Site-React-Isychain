import React from 'react'
import Footercss from '../../styles/layouts/footer.module.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Footer(){
    return (
        <>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={Footercss.container}>
            <Container className={Footercss.contentContainer}>
                <Row>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} className={Footercss.container}>
                        <h3  className={Footercss.h3}>Ressources</h3>
                        <ul className={Footercss.ul}>
                                <li className={Footercss.li}><a href="#who"  className={Footercss.ul.a}>Qui Somme-nous ?</a></li>
                                <li className={Footercss.li}><a href="#" className={Footercss.ul.a}>Blog</a></li>
                                <li className={Footercss.li}><a href="#jobs" className={Footercss.ul.a}>Recrutement</a></li>
                                <li className={Footercss.li}><a href="#" className={Footercss.ul.a}>Mentions légales</a></li>
                                <li className={Footercss.li}><a href="#" className={Footercss.ul.a}>CGU</a></li>
                                <li className={Footercss.li}><a href="#" className={Footercss.ul.a}>FAQ</a></li>
                        </ul>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} className={Footercss.container}>
                        <h3  className={Footercss.h3}>Nos Services</h3>
                        <ul className={Footercss.ul}>
                                <li className={Footercss.li}><a href="#service"  className={Footercss.ul.a}>IsyChain As a Service</a></li>
                                <li className={Footercss.li}><a href="#service"  className={Footercss.ul.a}>Conseil & Stratégie</a></li>
                                <li className={Footercss.li}><a href="#service"  className={Footercss.ul.a}>Développement sur-mesure</a></li>
                                <li className={Footercss.li}><a href="#service" className={Footercss.ul.a}>R&D Blockchain</a></li>
                                <li className={Footercss.li}><a href="#service" className={Footercss.ul.a}>Formation</a></li>
                                
                        </ul>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} className={Footercss.container}>
                        <h3  className={Footercss.h3}>Nos produits</h3>
                        <ul className={Footercss.ul}>
                                <li className={Footercss.li}><a href="#product"  className={Footercss.ul.a}>SehaChain</a></li>
                                <li className={Footercss.li}><a href="#product" className={Footercss.ul.a}>IsyChat</a></li>
                                <li className={Footercss.li}><a href="#product" className={Footercss.ul.a}>IsyNode</a></li>
                        </ul>
                    </Col>
                    <Col xl={3} lg={3} md={3} sm={12} xs={12} className={Footercss.social}>
                        <a href="https://www.linkedin.com/company/isychain/" className={Footercss.linkedInkink}><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"/> </a>
                        <a href="#" className={Footercss.linkedInkink}><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"/> </a>
                        <a href="#" className={Footercss.linkedInkink}><img src="https://img.icons8.com/ios-filled/50/ffffff/discord-logo.png"/> </a>
                        <a href="#" className={Footercss.linkedInkink}><img src="https://img.icons8.com/ios-filled/50/ffffff/medium-logo.png"/></a>
                        
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className={Footercss.copyright}>
                        <p >Copyright IsyChain © 2022 All rights reserved</p>
                    </Col>                  
                </Row>       
            </Container>
        </Col> 
        
        </>
    )
}