import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function Main_Layout({children}){
    return (
        <>
            <Container fluid className="p-0">
                <Row className="m-0">
                    {children}
                </Row>
            </Container>
        </>
    )
}