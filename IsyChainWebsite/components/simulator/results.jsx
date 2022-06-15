import React, {useState} from 'react'
import Col from 'react-bootstrap/Col'
import StyleResult from "../../styles/simulator/result.module.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Chart from 'chart.js/auto'
import Table from 'react-bootstrap/Table'
import { Line } from 'react-chartjs-2';



export default function Result(){

    return (
        <>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <Container>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleResult.container}>
                            <Row className='justify-content-center'>
                                <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="text-center">
                                    <h1 data-aos="fade-up" className={StyleResult.heading}>Performance overview :</h1>
                                    <hr data-aos="fade-up" className={StyleResult.hr} />
                                </Col>
                                {/* <Col xl={6} lg={6} md={6} sm={12} xs={12} className='mt-5'>
                                    <Form.Group>
                                        <Form.Label>Select max number of nodes :</Form.Label>
                                        <Form.Select onChange={onChangeNumberOfNodes}>
                                           <option>--- CUSTOM ---</option> 
                                           <option value={200}>200</option> 
                                           <option value={400}>400</option> 
                                           <option value={600}>600</option> 
                                           <option value={800}>800</option> 
                                           <option value={1000}>1000</option> 
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button className={StyleResult.saveBtn}>Save</Button>
                                    </Form.Group>
                                </Col> */}
                            </Row>
                            <Row className="mt-5">
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Line 
                                        datasetIdKey='id'
                                        data={{
                                            labels: ['0','200','400','600', '800', '1000'],
                                            datasets: [
                                            {
                                                id: 1,
                                                label: 'Throughput',
                                                data: [800, 810, 920, 1000, 1080,1100],
                                                backgroundColor: "#bf0010"
                                            }
                                            ],
                                        }}
                                    />
                                </Col>    
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Line 
                                        datasetIdKey='id'
                                        data={{
                                            labels: ['100','200','300','400', '500'],
                                            datasets: [
                                            {
                                                id: 1,
                                                label: 'Consensus Time',
                                                data: [2.66, 3, 3.33, 3.66, 5],
                                                backgroundColor: "#13283E"
                                            }
                                            ],
                                        }}
                                    />
                                </Col> 
                            </Row>     
                            
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        
                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleResult.container}>
                            <Row>
                                <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="text-center">
                                    <h1 data-aos="fade-up" className={StyleResult.heading}>Compare </h1>
                                    <hr data-aos="fade-up" className={StyleResult.hr} />
                                </Col>
                                <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="text-center mt-5">
                                    <Table data-aos="fade-up" className={StyleResult.table} striped hover>
                                        <thead>
                                            <tr>
                                            <th id="noDisplay"></th>
                                            <th id="isyx">IsyChain</th>
                                            <th id="isy">Binance Smart Chain</th>
                                            <th id="isy">Ethereum</th>
                                            <th id="isy">Bitcoin</th>
                                            <th id="isy">Byzcoin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className={StyleResult.tr}>
                                            <td>Transaction per Second</td>
                                            <td id="isyx">1100 TPS</td>
                                            <td>100 TPS</td>
                                            <td>15 TPS</td>
                                            <td>7 TPS</td>
                                            <td>800 TPS</td>
                                            </tr>
                                            <tr className={StyleResult.tr}>
                                            <td>Transaction Latency</td>
                                            <td id="isyx">5 seconds</td>
                                            <td>75 seconds</td>
                                            <td>5 minutes</td>
                                            <td>10 minutes</td>
                                            <td>30 seconds</td>
                                            </tr>
                                            <tr>
                                            <td>Energy Consumption</td>
                                            <td id="isyx">Low</td>
                                            <td>High</td>
                                            <td>High</td>
                                            <td>Very High</td>
                                            <td>Medium</td>
                                            </tr>
                                            <tr>
                                            <td>Smart Contracts Use</td>
                                            <td id="isyx">Yes (Solidity)</td>
                                            <td>Yes (Solidity + Vyper)</td>
                                            <td>Yes (Solidity)</td>
                                            <td>No</td>
                                            <td>No</td>
                                            </tr>
                                            <tr>
                                            <td>Consensus Algorithm</td>
                                            <td id="isyx">PoRT (New Protocol)</td>
                                            <td>Proof of Staked Authority</td>
                                            <td>Proof of Stake</td>
                                            <td>Proof of Work</td>
                                            <td>PBFT - Practical Byzantine Fault Tolerance</td>
                                            </tr>
                                            
                                            
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </>
    )
}