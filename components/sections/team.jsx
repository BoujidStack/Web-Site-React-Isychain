import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import StyleTeam from '../../styles/sections/team.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
export default function Team(){
    return (
        <>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleTeam.container}>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleTeam.subcontainer}>
                    
                        <Container id="team" className={StyleTeam.contentContainer}>
                            <Row style={{textAlign:"center"}}>
                            <h1 data-aos="fade-up" className={StyleTeam.heading}>Notre équipe</h1>
                            <hr data-aos="fade-up" className={StyleTeam.hr} />
                            </Row>
                            
                        </Container>
                        <Container className="pt-5 mt-5">
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Tabs defaultActiveKey="managers" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="managers" title="Managers">
                                            <Row className={StyleTeam.row}>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/chakib.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Chakib Sellami</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Chief Executive Officer</h3>
                                                    <a href="#"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>
                                                    
                                                    <span><FontAwesomeIcon icon="fa-brands fa-linkedin" /></span>
                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/ali.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Ali El Alami</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Chief Strategy Officer</h3>
                                                    <a href="#"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>
                                                    
                                                    <span><FontAwesomeIcon icon="fa-brands fa-linkedin" /></span>
                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/sidibe.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Sidibe Moise</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Chief Technology officer</h3>
                                                    <a href="https://www.linkedin.com/in/moisesidibe/"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     
                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/Hamza-Boujid.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Hamza Boujid</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Business Developer</h3>
                                                    <a href="https://www.linkedin.com/in/hamza-boujid/"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     
                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/dalila.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Dalila Sellami</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Chief Operations Officer</h3>
                                                    <a href="https://www.linkedin.com/in/dalila-sellami-a51a385b"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     
                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/amin.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Amine Ben hammou</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Technical Advisor</h3>
                                                    <a href="https://www.linkedin.com/in/amine-ben-hammou-90840154/"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     
                                                </Col>
                                               
                                                
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="consultants" title="Consultants">
                                            <Row className={StyleTeam.row}>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/mehdi.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>El-Mehdi Loukach</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Blockchain Developper</h3>
                                                    <a href="https://www.linkedin.com/in/el-mehdiloukach/"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     
                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/asmae.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Asma Rachid</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Backend Developper</h3>
                                                    <a href="https://www.linkedin.com/in/asma-rachid-34b86b129/"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     
                                                    
                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/driss.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Driss El Masbahy</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Blockchain Developper</h3>
                                                    <a href="https://www.linkedin.com/in/idriss-elmasbahy-1054671ab"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                   

                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/meryem.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Meryem Tabbouchy</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>DevOps Engineer</h3>
                                                    <a href="https://www.linkedin.com/in/meryem-tabbouchy-9387b01b1/"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     

                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/amin.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Amin Benttaleb</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Mobile Application Developer</h3>
                                                    <a href="https://www.linkedin.com/in/amine-benet-taleb-34a445207"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     

                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/mohamed.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Bensaih Mohamed</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Cybersecurity Engineer</h3>
                                                    <a href="https://www.linkedin.com/in/mohamed-bensaih-41527b19a"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     

                                                </Col>
                                                <Col data-aos="fade-up" xl={3} lg={3} md={3} sm={12} xs={12} className={StyleTeam.colTeamCard}>
                                                    <img src="/assets/Ahmed.png" className={StyleTeam.teamCardImg} />
                                                    <h1 className={StyleTeam.teamTitle}>Ahmed Chrika</h1>
                                                    <h3 className={StyleTeam.teamSubTitle}>Frontend Developer</h3>
                                                    <a href="https://www.linkedin.com/in/ahmed-chrika-4300161a5/"   className={StyleTeam.btn} ><span className={StyleTeam.linkedInkink}><img className={StyleTeam.iconSM} src="https://img.icons8.com/ios-filled/300/ffffff/linkedin-2--v1.png"/> </span></a>                                                     

                                                </Col>
                                            </Row>
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </Container>
                </Col>
            </Col>
        
        </>
    )
}