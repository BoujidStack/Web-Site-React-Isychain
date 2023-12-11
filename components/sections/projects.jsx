import React, {useEffect} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import StyleProjects from '../../styles/sections/projects.module.css'

export default function Projects(){
    
      useEffect(()=>{
        function animateValue(id, start, end, duration) {
            var obj = document.getElementById(id);
            var range = end - start;
            var minTimer = 150;
            var stepTime = Math.abs(Math.floor(duration / range));
            stepTime = Math.max(stepTime, minTimer);
            var startTime = new Date().getTime();
            var endTime = startTime + duration;
            var timer;
        
            function run() {
              if (obj != null) {
                var now = new Date().getTime();
                var remaining = Math.max((endTime - now) / duration, 0);
                var value = Math.round(end - remaining * range);
                obj.innerHTML = value;
                if (value == end) {
                  clearInterval(timer);
                }
              }
            }
        
            timer = setInterval(run, stepTime);
            run();
          }

        animateValue("chiffre1", 0, 1, 1500);
        animateValue("chiffre", 0, 3, 1500);
        animateValue("chiffre2", 0, 15, 1500);
        animateValue("chiffre3", 0, 20, 1500);
        animateValue("chiffre4", 0, 5, 1500);
      },[])
    return (
        <>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleProjects.container}>
                <Row id="product" className="m-0 justify-content-center" style={{height:"100%"}} data-aos="fade-up">
                    <Col xl={2} lg={2} md={2} sm={6} xs={6} className={StyleProjects.div}>
                        <span className={StyleProjects.h1}>+</span>

                        <h1 className={StyleProjects.h1} id="chiffre1"></h1>
                        <span className={StyleProjects.numberText}>Brevet d’invention</span>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={6} xs={6} className={StyleProjects.div}>
                        <span className={StyleProjects.h1}>+</span>

                        <h1 className={StyleProjects.h1} id="chiffre"></h1>
                        <span className={StyleProjects.numberText}>Projets</span>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={6} xs={6} className={StyleProjects.div}>
                        <span className={StyleProjects.h1}>+</span>
                        <h1 className={StyleProjects.h1} id="chiffre2"></h1>
                        <span className={StyleProjects.numberText}>Années d'expériences</span>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={6} xs={6} className={StyleProjects.div}>
                        <span className={StyleProjects.h1}>+</span>
                        <h1 className={StyleProjects.h1} id="chiffre3"></h1>
                        <span className={StyleProjects.numberText}>Professionels</span>
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={6} xs={6} className={StyleProjects.div}>
                        <span className={StyleProjects.h1}>+</span>
                        <h1 className={StyleProjects.h1} id="chiffre4"></h1>
                        <span className={StyleProjects.numberText}>Clients satisfaits</span>
                    </Col>
                </Row>
            </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleProjects.projectsContainer}>
                    <Col xl={12} lg={12} md={12} sm={12} xs={12} className="text-center mt-4">
                        <h1 data-aos="fade-up" className={StyleProjects.projectHeading}>Nous avons les meilleurs produits pour vous.</h1>
                    </Col> 
            </Col>
            <Row className={StyleProjects.row}>
                    
                    <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleProjects.projectDiv}>
                        <h1 className={StyleProjects.projectTitle}>SehaChain</h1>
                        <h3 className={StyleProjects.projectSubTitle}>Plateforme blockchain pour les professionnels de santé.</h3>
                    </Col>
                    <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleProjects.projectDiv}>
                        <h1 className={StyleProjects.projectTitle}>IsyChat</h1>
                        <h3 className={StyleProjects.projectSubTitle}>Messagerie ultra-sécurisée basée sur la blockchain.</h3>
                    </Col>
                    <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleProjects.projectDiv}>
                        <h1 className={StyleProjects.projectTitle}>IsyPay</h1>
                        <h3 className={StyleProjects.projectSubTitle}>Transactions mobiles simplifiées, sécurisées par la blockchain.</h3>
                    </Col>
                    <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleProjects.projectDiv}>
                        <h1 className={StyleProjects.projectTitle}>IsySchool</h1>
                        <h3 className={StyleProjects.projectSubTitle}>Programme de formation Blockchain et Web3 en ligne.</h3>
                    </Col>
                </Row>
        
        </>
    )
}