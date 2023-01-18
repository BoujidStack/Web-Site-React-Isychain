import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import StyleJob from '../../styles/sections/job.module.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default function Job(){
    return (
    <>
    <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleJob.container}>
        <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleJob.subcontainer}>
            <Container id="jobs" className={StyleJob.contentContainer}>
                <Row style={{textAlign:"center"}}>
                <h1 data-aos="fade-up" className={StyleJob.heading}>Nos offres d’emplois et Stages</h1>
                <hr data-aos="fade-up" className={StyleJob.hr} />
                </Row>             
            </Container>
            <Container className={StyleJob.contentContainer5}>
                <Row >
                <Col xl={11} lg={11} md={11} sm={11} xs={11} className={StyleJob.Jobscon}>
                    
                    <h5 className={StyleJob.h5job} > <img className={StyleJob.emp} src="/assets/employeur.png"/> [Stage]  Front End Mobile Developer  </h5>
                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1} className={StyleJob.subcontainer}>
                <a href="assets/FrontEnd-Job-Mobile.pdf"><img className={StyleJob.arrow} src="https://img.icons8.com/ios-filled/50/bf0010/expand-arrow--v1.png"/></a>
                </Col>
                </Row>             
            </Container>
            <Container className={StyleJob.contentContainer5}>
                <Row >
                <Col xl={11} lg={11} md={11} sm={11} xs={11} className={StyleJob.Jobscon}>
                    
                    <h5 className={StyleJob.h5job} > <img className={StyleJob.emp} src="/assets/employeur.png"/> [Stage]  Front End Web Developer  </h5>
                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1} className={StyleJob.subcontainer}>
                <a href="assets/FrontEnd-Job-Web.pdf"><img className={StyleJob.arrow} src="https://img.icons8.com/ios-filled/50/bf0010/expand-arrow--v1.png"/></a>
                </Col>
                </Row>             
            </Container>
            <Container className={StyleJob.contentContainer5}>
                <Row >
                <Col xl={11} lg={11} md={11} sm={11} xs={11} className={StyleJob.Jobscon}>
                    
                    <h5 className={StyleJob.h5job} > <img className={StyleJob.emp} src="/assets/employeur.png"/> [Stage]  Back End Developer  </h5>
                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1} className={StyleJob.subcontainer}>
                    <a href="assets/BackEnd-Job.pdf"><img className={StyleJob.arrow} src="https://img.icons8.com/ios-filled/50/bf0010/expand-arrow--v1.png"/></a>
                </Col>
                </Row>             
            </Container>
            <Container className={StyleJob.contentContainer5}>
                <Row >
                <Col xl={11} lg={11} md={11} sm={11} xs={11} className={StyleJob.Jobscon}>
                    
                    <h5 className={StyleJob.h5job} > <img className={StyleJob.emp} src="/assets/employeur.png"/> [Stage]  DevOps Engineer  </h5>
                </Col>
                <Col xl={1} lg={1} md={1} sm={1} xs={1} className={StyleJob.subcontainer}>
                    <a href="assets/DevOps-Job.pdf"><img className={StyleJob.arrow} src="https://img.icons8.com/ios-filled/50/bf0010/expand-arrow--v1.png"/></a>
                </Col>
                </Row>             
            </Container>
                        
        </Col>
    </Col>
    </>
    )
}