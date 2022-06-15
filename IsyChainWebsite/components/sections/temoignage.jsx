import React from "react"
import Temoignage from '../../styles/sections/temoignage.module.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

export default function Testimonials (){
    return(
        <>
         <Col xl={12} lg={12} md={12} sm={12} xs={12} className={Temoignage.container}>
            <Container className={Temoignage.contentContainer}>
                <Row style={{textAlign:"center"}}>
                    <h1 data-aos="fade-up" className={Temoignage.heading}>Témoignages</h1>
                    <hr data-aos="fade-up" className={Temoignage.hr} />
                </Row>                 
            </Container>
        </Col> 
        <Col xl={12} lg={12} md={12} sm={12} xs={12} className={Temoignage.container}>
            <Container className={Temoignage.contentContainer}>
            
                <Col xl={11} lg={11} md={11} sm={11} xs={11} className={Temoignage.container}>
                <Carousel controls="false"  interval="3000" indicators="false" data-aos="fade-up">
                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/ali.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >Si vous cherchez à travailler et à évoluer dans une famille, rejoignez IsyChain. </p>
                        <span className={Temoignage.span} ><strong>Ali El Alami</strong></span>
                </Carousel.Item>
                
                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/dalila.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >Le respect des engagements de IsyChain, j'en fais mon affaire ! </p>
                        <span className={Temoignage.span} ><strong>Dalila Sellami</strong></span>
                </Carousel.Item>

                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/sidibe.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >Trouver du sens à votre projet, c’est son combat ! #DesignThinking #Expérience.</p>
                        <span className={Temoignage.span} ><strong>Sidibe Moise</strong></span>
                </Carousel.Item>

                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/amin.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >IsyChain c’est entreprendre et explorer en réseau humain avant tout !</p>
                        <span className={Temoignage.span} ><strong>Amine Ben hammou</strong></span>
                </Carousel.Item>

                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/asmae.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >Chez IsyChain, nous croyons que la meilleure façon de prédire l'avenir est de le créer.</p>
                        <span className={Temoignage.span} ><strong>Asma Rachid</strong></span>
                </Carousel.Item>

                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/mehdi.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >A lot to gain at IsyChain.</p>
                        <span className={Temoignage.span} ><strong>El Mehdi Loukach</strong></span>
                </Carousel.Item>

                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/driss.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >Avec IsyChain, la plus grande opportunité digitale est rendue facile.</p>
                        <span className={Temoignage.span} ><strong>Idriss Elmasbahy</strong></span>
                </Carousel.Item>

                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/meryem.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >Parce que j'aime le changement sous toutes ses formes, l'aventure IsyChain est faite pour moi</p>
                        <span className={Temoignage.span} ><strong>Meryem Tabbouchy</strong></span>
                </Carousel.Item>

                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/amin.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >Du près ou De loin, IsyChain au service de l'intelligence collective.</p>
                        <span className={Temoignage.span} ><strong>Amine Benet.taleb</strong></span>
                </Carousel.Item>

                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/mohamed.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >Avoir envie, c'est la vie. Avoir envie tous ensemble, c'est IsyChain !</p>
                        <span className={Temoignage.span} ><strong>Mohamed Bensaih</strong></span>
                </Carousel.Item>

                <Carousel.Item>
                        <div className={Temoignage.imgContainer}>
                        <img src="/assets/Ahmed.png" className={Temoignage.teamCardImg} />
                        </div>
                        <p className={Temoignage.p} >Chez Isychain, nous avons une envie débordante de croire à un projet et d’y participer.</p>
                        <span className={Temoignage.span} ><strong>Ahmed Chrika</strong></span>
                        
                </Carousel.Item>
                
                

                </Carousel>
                </Col>
            </Container>
            </Col> 
        </>
    )
}
