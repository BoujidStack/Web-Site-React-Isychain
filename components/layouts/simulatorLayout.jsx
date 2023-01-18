import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StyleSimulatorLayout from '../../styles/layouts/simulatorLayout.module.css'
export default function Simulator_Layout({children}){
    return (
        <>
            
                    <Col data-aos="fade-up" xl={12} lg={12} md={12} sm={12} xs={12} className={StyleSimulatorLayout.container}>
                        <Container className='text-center p-1'>
                            {/* <img src="/assets/simulation.svg" className={StyleSimulatorLayout.img} /> */}
                            {/* <hr data-aos="fade-up"  /> */}
                            <h1  className={StyleSimulatorLayout.heading}>IsyChain Simulator</h1>
                            <hr className={StyleSimulatorLayout.hr} />
                                    <p>Visualisez la capacité de notre blockchain.</p>
                        </Container>
                        
                    </Col>
                    {children}
                
        </>
    )
}