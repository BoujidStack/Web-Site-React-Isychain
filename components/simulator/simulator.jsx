import React, {useState, useEffect, useCallback} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StyleSimulator from '../../styles/simulator/simulator.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { isEmpty, isText } from '../../middlewares/validators'
import Results from './results'
export default function Simulator(){
    const [modalShow, setModalShow] = useState(false);
    // NodesConfig
    const RTThreshold = 10
    const [fullNodes, setFullNodes] = useState([])
    const [lightNodes, setLightNodes] = useState([])
    const [chainName, setChainName] = useState("")
    const [error, setError] = useState("")
    const onChangeFullNodes = (e) => {
        e.preventDefault()
        
        let FullnodesList = []
        for(let i = 0; i < e.target.value; i++) {
            let node = {}
            node.id = i+1;
            node.type = 'FN'
            node.pk = "Node.."+i+"..x78081d"
            node.account = "Acc.." + i + "..Acc810"
            node.balance = 1000
            node.role = "Miner"
            node.RTScore = RTThreshold
            FullnodesList.push(node)
        }
        setFullNodes(FullnodesList)
    }
    const onChangeLightNodes = (e) => {
        e.preventDefault()
        let LightnodesList = []
        for(let i = 0; i < e.target.value; i++) {
            let node = {}
            node.id = i+1;
            node.type = 'LN'
            node.pk = "Node.."+i+"..x78081d"
            node.account = "Acc.." + i + "..Acc810"
            node.balance = 1000
            node.role = "none"
            LightnodesList.push(node)
        }
        setLightNodes(LightnodesList)
    }
    const onChangeChainName = (e) => {
        e.preventDefault()
        setChainName(e.target.value)
    }
    // ALL NODES TO BE RENDERED
    const [allNodes, setAllNodes] = useState([])
    const [allLogs, setAllLogs] = useState([])
    const [genesis,setGenesis] = useState([])
    const onSubmitNodesConfig = (e) => {
        e.preventDefault()
        
        if(!isEmpty(chainName)) {
            if(isText(chainName)){
                // PROCCESS OF PoRT
                let allNodesList = []
                let fewLogs = []
                
                var d = new Date();
                let message = {}
                message.executor = "Genesis block"
                message.content = "----------- Genesis block created -----------"
                message.timestamp  = d.toLocaleTimeString()
                message.block = true
                message.blockName= "Genesis Block"
                message.blockContent = {
                    chainID: 333,
                    Blocknumber : 0,
                    hash :"0x00000...",
                    timestamp : d.toLocaleTimeString(),
                    signer : "0x00000...",
                    txCount : 0
                }
                fewLogs.push(message)
                blocks.push({ 'blockNumber': 0, 'hash': 'hash', 'timestamp': new Date(), 'signer': '0x0000', 'txCount': 0, 'tx': []})
                // print genesis block info
                let gene = {}
                let genesisList = []
                gene.pk = "genesis...00x9qs24"
                gene.account = "genesis...00x9qs24"
                gene.role = "genesis"
                gene.balance = "none"
                gene.Blocknumber =  + blocks[0].blockNumber
                gene.hash= blocks[0].hash
                gene.timestamp= blocks[0].timestamp
                gene.signer= blocks[0].signer
                gene.tx_count=blocks[0].txCount
                gene.tx=blocks[0].tx
                       genesisList.push(gene)   
                setGenesis(genesisList)
                lightNodes.forEach(element => {
                    var d = new Date();
                    let message = {}
                    message.executor = element.pk
                    message.content = "Light node : (" + element.pk + ") has been initialized successfully."
                    message.timestamp  = d.toLocaleTimeString()
                    allNodesList.push(element)
                    fewLogs.push(message)
                });
                fullNodes.forEach(element => {
                    var d = new Date();
                    let message = {}
                    message.executor = element.pk
                    message.content = "Full node : (" + element.pk + ") has been initialized successfully."
                    message.timestamp  = d.toLocaleTimeString()
                    allNodesList.push(element)
                    fewLogs.push(message)
                });
                
               
                setAllNodes(allNodesList)
                
                setAllLogs([...fewLogs])
                
            } else {
                console.log(error)
                setError('Chain name must be a string.')
            }
        } else {
            console.log(error)
            setError('All fields are required.')
        }
        // console.log(logsFullNode)
        // console.log(logsLightNode)
    }
    // side changes for new elements
    const [element,setElement] = useState('')
    const onChangeElement = (e) => {
        setElement(e.target.value)
        
    }
    
    
    const [ln, setLn] = useState([])
    const [newAllMiners, setNewAllMiners] = useState([])
    const [users, setUsers] = useState([])
    const [userName, setuserName] = useState("")
    const [userBalance, setuserBalance] = useState("")
    const [userType, setuserType] = useState("")
    let user = {
    }
    
    const RenderElementForm = (data) => {
        
        switch (data) {
            case "ln":
                
                const onSubmitMoreActions = (e) => {
                    e.preventDefault()
                    
                    setLightNodes(ln)     
                }
                const onChangeMoreActionsLN = (e) => {
                    e.preventDefault()
                    let newLNnodes = []
                    allNodes.forEach(element => {
                        if(element.type == 'LN') {
                            newLNnodes.push(element)
                        }
                    });
                    
                    for(let i = 1; i <= e.target.value; i++) {
                        let node = {}
                        node.id = i+1;
                        node.type = 'LN'
                        node.pk = "Node.."+i+"..x78081d"
                        node.account = "Acc.." + i + "..Acc810"
                        node.balance = 1000
                        node.role = "none"
                        newLNnodes.push(node)
                    }
                    
                    setLn(newLNnodes)
                   
                }
                return (
                    <>
                        <Row>
                            
                            <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                <Form.Label>Number of light nodes :</Form.Label>        
                                <Form.Select onChange={onChangeMoreActionsLN} placeholder='Nodes count'>
                                    <option value="0">-- Customize --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Select>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                <Button onClick={onSubmitMoreActions} className={StyleSimulator.continueBtn} type="submit" >Add new light node</Button>
                            </Col>
                            
                        </Row>
                    </>
                )
            case "sn":
                const onSubmitMoreActionsMiners = () => {
        
                    
                    // setAllMiners([...newAllMiners])
                    // setFullNodes([...newAllMiners])
                    let x = selectMiners()
                    const previousLeader = leader;
                    selectJudges()
                    selectLeader(x, function(){
                        selectProposers(x, function(){
            
                            selectValidators(x, previousLeader)
                        })
                    })
                    
                    
                }
                const onChangeMoreActionsMN = (e) => {
                    
                    e.preventDefault()
                    let newLNnodes = []
                    fullNodes.forEach(element => {
                       
                        if(element.miner == true) {
                            newLNnodes.push(element)
                        }
                    });
                    
                    for(let i = 1; i <= e.target.value; i++) {
                        let node = {}
                        node.id = i+1;
                        node.type = 'FN'
                        node.pk = "Node.."+i+"..x78081d"
                        node.account = "Acc.." + i + "..Acc810"
                        node.balance = 1000
                        node.leader = false
                        node.miner = true
                        node.proposer = false
                        node.validator = false
                        node.lightNode = false
                        node.user = false
                        node.minerName = true
                        node.role = "Miner"
                        node.RTScore = RTThreshold
                        newLNnodes.push(node)
                    }
                    
                    
                    setNewAllMiners(newLNnodes)
                    setAllMiners([...newLNnodes])
                    setFullNodes([...newLNnodes])
                }
                return (
                    <>
                        <Row>
                            
                            <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                <Form.Label>Number of Miners :</Form.Label>        
                                <Form.Select onChange={onChangeMoreActionsMN} placeholder='Nodes count'>
                                    <option value="0">-- Customize --</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Select>
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                <Button onClick={onSubmitMoreActionsMiners} className={StyleSimulator.continueBtn} type="submit" >Add new miner</Button>
                            </Col>
                            
                        </Row>
                    </>
                )
            case "us":
                const submitUser = (e) => {
                    e.preventDefault()
                    let newUsers = users
                    user.pk = "user....x78081d"
                    user.account = "Acc....Acc810"
                    user.role = "user"
                    user.type = userType
                    user.name = userName
                    user.balance = userBalance
                    user.transactions = []
                    newUsers.push(user)
                    setUsers(newUsers)
                }
                const onChangeUserName = (e) => {
                    e.preventDefault()
                    setuserName(e.target.value)
                }
                const onChangeType =(e)=> {
                    e.preventDefault()
                    setuserType(e.target.value)
                }
                const onChangeBalance = (e) => {
                    e.preventDefault()
                    setuserBalance(e.target.value)
                }
                return (
                    <>
                        <Row className={StyleSimulator.scroll}>
                            
                            <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                <Form.Label>Create a username :</Form.Label>        
                                <Form.Control onChange={onChangeUserName} type="text" placeholder='Enter a name for the user' />
                            </Col>
                            <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                <Form.Label>Select a type :</Form.Label>        
                                <Form.Select onChange={onChangeType} placeholder='Nodes count'>
                                    <option value="0">-- Customize --</option>
                                    <option value="person">PERSON</option>
                                    <option value="bank">BANK</option>
                                    <option value="business">BUSINESS</option>
                                    <option value="game">GAME</option>
                                    <option value="iot">IoT</option>
                                </Form.Select>
                            </Col>
                            <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                <Form.Label>Initial balance :</Form.Label>        
                                <Form.Control onChange={onChangeBalance} type="text" placeholder='Enter a name for the user' />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                <Button onClick={submitUser} className={StyleSimulator.continueBtn} type="submit" >Add new user</Button>
                            </Col>
                            
                        </Row>
                    </>
                )
            default:
                break;
        }
    }

    // ------------ SIMULATION --------------- //

    
    var proposers = [];
    var validators = [];
    var judges = [];
    var leader = null;
    var blocks = [];
    var transactions = [];
    const [allMiners,setAllMiners] = useState([])
    const [allTXs,setAllTXs] = useState([])
    const [allProposers,setAllProposers] = useState([])
    const [allValidators,setAllValidators] = useState([])
    const [allLeader,setAllLeader] = useState({})
    const selectMiners = () => {
            

                let miners = fullNodes
                let newLogs = allLogs
                
                miners.forEach(element => {
                    
                    element.leader = false
                    element.miner = true
                    element.proposer = false
                    element.validator = false
                    element.lightNode = false
                    element.user = false
                    element.minerName = true
                    element.role = "Miner"
                    var d = new Date();
                    let message = {}
                    message.executor = element.pk
                    message.content = "Full node : (" + element.pk + ") has been selected as a miner."
                    message.timestamp  = d.toLocaleTimeString()
                    newLogs.push(message)
                });
                setAllLogs([...newLogs])
                setAllMiners(miners)
                
                
                return miners
            


        
    
    }
        
    
    const selectLeader = (sm, cb) => {
        
        if(proposers.length == 0) {
            leader = sm[0]
            leader.leader = true
            leader.miner = true
            leader.proposer = false
            leader.validator = false
            leader.lightNode = false
            leader.user = false
            leader.minerName = false
            leader.role = "Leader"
            setAllLeader(leader)
            
            let newLogs = allLogs
            var d = new Date();
            let message = {}
            message.executor = leader.pk
            message.content = "Full node : (" + leader.pk + ") has been selected as a Leader."
            message.timestamp  = d.toLocaleTimeString()
            newLogs.push(message)
            setAllLogs([...newLogs])
            
            
        } else {
            leader = proposers.shift()
            leader.leader = true
            leader.miner = true
            leader.proposer = false
            leader.validator = false
            leader.lightNode = false
            leader.user = false
            leader.minerName = false
            leader.role = "Leader"
            let newLogs = allLogs
            var d = new Date();
            let message = {}
            message.executor = leader.pk
            message.content = "Full node : (" + leader.pk + ") has been selected as a Leader."
            message.timestamp  = d.toLocaleTimeString()
            newLogs.push(message)
            setAllLogs([...newLogs])
            setAllLeader(leader)
        }
        cb(sm)
    }
    const selectProposers = (sm, cb) => {
        if (proposers.length == 0) {
            proposers = sm.slice(1, 4)
            // => proposers = ['f2', 'f3', 'f4]
            let newLogs = allLogs
            proposers.forEach(element => {
                element.leader = false
                element.miner = true
                element.proposer = true
                element.validator = false
                element.lightNode = false
                element.user = false
                element.minerName = false
                element.role = "Proposer"
                var d = new Date();
                let message = {}
                message.executor = element.pk
                message.content = "Miner : (" + element.pk + ") has been selected as a Proposer."
                message.timestamp  = d.toLocaleTimeString()
                newLogs.push(message)  
            })
        setAllLogs([...newLogs])
        setAllProposers(proposers)
    
    } else {
            proposers.push(validators.shift())
            proposers.forEach(element => {
                element.leader = false
                element.miner = true
                element.proposer = true
                element.validator = false
                element.lightNode = false
                element.user = false
                element.minerName = false
                element.role = "Proposer"
            });
            
            setAllProposers(proposers)
        }
        cb()
    }
    const selectValidators = (sm, previousLeader) => {
        if (validators.length == 0) {
            validators = sm.slice(4, sm.length)
            let newLogs = allLogs
            validators.forEach((element)=>{
                // => validators = ['f5', 'f6']
                element.leader = false
                element.miner = true
                element.proposer = false
                element.validator = true
                element.lightNode = false
                element.user = false
                element.minerName = false
                element.role = "Validator"
                var d = new Date();
                let message = {}
                message.executor = element.pk
                message.content = "Miner : (" + element.pk + ") has been selected as a Validator."
                message.timestamp  = d.toLocaleTimeString()
                newLogs.push(message)  
            })
            setAllLogs([...newLogs])
            setAllValidators(validators)
        }else {

            validators.push(previousLeader)
            validators.forEach(element => {
                element.leader = false
                element.miner = true
                element.proposer = false
                element.validator = true
                element.lightNode = false
                element.user = false
                element.minerName = false
                element.role = "Validator"
            });
            setAllValidators(validators)
            
        }
    }
    const selectJudges = () => {
        // let miners = fullNodes
        for (let index = 0; index < fullNodes.length; index++) {
            var indexJudge1 = Math.floor(Math.random() * fullNodes.length)
            var indexJudge2 = Math.floor(Math.random() * fullNodes.length)
            fullNodes[indexJudge1].judge = true
            fullNodes[indexJudge2].judge = true
            while (indexJudge1 == indexJudge2 || indexJudge1 == index || indexJudge2 == index) {
                indexJudge1 = Math.floor(Math.random() * fullNodes.length)
                indexJudge2 = Math.floor(Math.random() * fullNodes.length)
            }
            fullNodes[index].judges = [fullNodes[indexJudge1], fullNodes[indexJudge2]]
        }
        
    }
    
    const blockTime = (sminers) => {
        
        

        console.log(new Date() + ' ' + '========New block time========');
        let newLogs = allLogs
        var d = new Date();
        let message = {}
        message.executor = "BLOCK TIME"
        message.content = "########### NEW BLOCK TIME ###########"
        message.timestamp  = d.toLocaleTimeString()
        newLogs.push(message)
        setAllLogs([...newLogs])
        const previousLeader = leader;
        selectJudges()
        selectLeader(sminers, function(){
            selectProposers(sminers, function(){
                selectValidators(sminers, previousLeader);
                
            })
        })
        //selectJudges()
        if(time/5 === 0.2){
            
            newBlock(1, leader.pk)
        } else {
            newBlock(time/5+1, leader.pk)
        }
    }
    const newBlock = (blockNumber, signer) => {
        const timestamp = new Date()
        // TODO: select hash
        const hash =  Math.floor(Math.random() * fullNodes.length)
        // add block to blocks array
        
        blocks.push({ 'blockNumber': blockNumber, 'hash': hash, 'timestamp': timestamp, 'signer': signer, 'txCount': transactions.length, 'tx': transactions})

        leader.RTScore += 2
        // clear transactions list
        transactions = []
        // log: block signed
        
        let newLogs = allLogs
        var d = new Date();
        let message = {}
        message.executor = "LEADER"
        message.content = "LEADER : " + leader.pk + " has signed a new block, new RT Score : " + leader.RTScore
        message.timestamp  = d.toLocaleTimeString()
        message.block = true
        message.blockName= "Block signed by leader"
        message.blockContent = {
            chainID: 333,
            Blocknumber : blockNumber,
            hash :"0x"+hash+"ef"+hash+"Dqse"+hash+"...",
            timestamp : d.toLocaleTimeString(),
            signer : leader.pk,
            txCount : transactions.length
        }
        newLogs.push(message)
        setAllLogs([...newLogs])
        validateBlock(blocks[blocks.length - 1])
        // print block details
        printBlockInfo(blocks[blocks.length - 1])
        // broadcast block
        broadcastBlock(blocks[blocks.length - 1])
    }
    function printBlockInfo(block) {
        // console.log('           ***Block Info***')
        // console.log('           Block number :' + block.blockNumber)
        // console.log('           hash: ' + block.hash)
        // console.log('           timestamp: ' + block.timestamp)
        // console.log('           signer: ' + block.signer)
        // console.log('           tx count: ', block.txCount)
        // console.log('           tx: ', block.tx)
        // console.log('           ***         ***')
    }
    function broadcastBlock(block) {
        const hash =  Math.floor(Math.random() * fullNodes.length)
        // console.log(fullNodes)
        fullNodes.forEach(f => {
            let hash =  Math.floor(Math.random() * fullNodes.length)
            if (f.pk.localeCompare(block.signer) !== "" && f.pk.localeCompare(block.signer) !== undefined) {
                //log: block received
                let newLogs = allLogs
                var d = new Date();
                let message = {}
                message.executor = "Validator"
                message.content = "Validator : " + f.pk + "  Added the block : " + block.blockNumber
                message.timestamp  = d.toLocaleTimeString()
                message.block = true
                message.blockName= "Block added by : " + f.pk
                message.blockContent = {
                    chainID: 333,
                    Blocknumber : block.blockNumber,
                    hash :"0x"+hash+"niMf"+hash+"fe3DAd"+hash+"...",
                    timestamp : d.toLocaleTimeString(),
                    signer : "(Validator)" + f.pk,
                    txCount : transactions.length
                }
                newLogs.push(message)
                setAllLogs([...newLogs])
                
                //printBlockInfo(block)
            }
        });
    }
    function fullNodesToString(list) {
        let txt = '[ '
        list.forEach(miner => {
            txt = txt + '{ pk: ' + miner.pk + ', RTScore: ' + miner.RTScore + ', judges: [ '
            if(miner.judges.length != 0)
                miner.judges.forEach(judge => txt = txt + judge.pk + ' ')
            txt += '] } ' 
        })
        txt += ']'
        return txt
    }
    function validateBlock(block) {
        
        validators.forEach(validator => {
                    // console.log(block.blockNumber)

                    let newLogs = allLogs
                    var d = new Date();
                    let message = {}
                    message.executor = "Validator"
                    message.content = "Validator : " + validator.pk + "  voted for block number : " + block.blockNumber + " - Status : Ok"
                    message.timestamp  = d.toLocaleTimeString()
                    newLogs.push(message)
                    setAllLogs([...newLogs])
                
        })
    }
    function genesisBlock() {
        
        // add genesis block to blocks array
        blocks.push({ 'blockNumber': 0, 'hash': 'hash', 'timestamp': new Date(), 'signer': '0x0000', 'txCount': 0, 'tx': []})
        // print genesis block info
        // console.log('Genesis block created')
        // console.log('           ***Block Info***')
        // console.log('           Block number :' + blocks[0].blockNumber)
        // console.log('           hash: ' + blocks[0].hash)
        // console.log('           timestamp: ' + blocks[0].timestamp)
        // console.log('           signer: ' + blocks[0].signer)
        // console.log('           tx count: ', blocks[0].txCount)
        // console.log('           tx: ', blocks[0].tx)
        // console.log('           ***         ***')
    }
    var interval = null;
    var time = 0
    var firstLaunch = true
    const [simulationTimer, setSimulationTimer] = useState("")
    function increaseTimer(smm) {
        // increase and print timer
        
            time++
            let prefix = parseInt(time / 60, 10) 
            let postfix = parseInt(time % 60, 10)
            prefix = prefix <= 9 ? "0" + prefix.toString() : prefix.toString();
            postfix = postfix <= 9 ? "0" + postfix.toString() : postfix.toString();
            // console.log(new Date() + ' ' + 'timer: ' + prefix + ':' + postfix)
            setSimulationTimer(prefix + ':' + postfix)
            if (time % 5 == 0 && firstLaunch == false) {
                blockTime(smm)
            } else if(time %5 !== 0 && firstLaunch == true) {
                firstLaunch = false
                blockTime(smm)
            } 
            // stop simulation after 30s
            if (time == 300) {
                clearInterval(interval)
            }
       
        
       
        
    }
    const [hasStarted,setHasStarted] = useState(false)
    const reset = () => {
        window.location.reload()
    }
    const startSimulation = () => {
        
        setHasStarted(true)
        var x = document.getElementById("config2")
        if(x.classList.contains("d-none")){
            x.classList.remove("d-none")
        }
        
            const selected_miners = selectMiners()
            interval = setInterval(function (){increaseTimer(selected_miners)}, 1000)
        
        
        
        
        
    }
    const [modelData, setModelData] = useState({})
    const [sendTo, setSendTo] = useState([])
    const getSendTo = () =>{
        
        setSendTo(allMiners)
        
    }
    const [txDataa, setTxData] = useState({});
    const getTxData = (txData) => {
        // console.log(txData)
        setTxData(txData)
        
        
        users.forEach(element => {

                
                console.log(allLogs)
            if(element.pk == txData.sender) {
                let user = element
                user.transactions.push(txData)
                element.transactions = user.transactions
            }
            transactions.push(element.transactions)
                
        });
        
        
    }
    const openModel = (id) => {
        
        var modal = document.getElementById("myModal"+id);
        modal.style.display = "block";
        
    }  
    const closeModal = (id) => {
        var modal = document.getElementById("myModal"+id);
        modal.style.display = "none";

    }
    return (
        <>
                    <Col data-aos="fade-up" xl={12} lg={12} md={12} sm={12} xs={12} className={StyleSimulator.container}>
                        <Container  className={StyleSimulator.containerConfig}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <h1  className={StyleSimulator.heading}>Configuration</h1>
                                    
                                </Col>                                
                            </Row>
                            <Row className="mt-5">
                                <Row className='m-0 p-0'>

                                <Col xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.cardContainer}>
                                    <h2 className={StyleSimulator.configHeading}>Nodes configuration</h2>
                                    <Row className={StyleSimulator.scroll}>
                                        <Form onSubmit={onSubmitNodesConfig}>
                                        <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                            <Form.Label>Number of full nodes :</Form.Label>        
                                            <Form.Select onChange={onChangeFullNodes} placeholder='Nodes count'>
                                                <option value="0">-- Customize --</option>
                                                <option value="11">11</option>
                                                <option value="13">13</option>
                                                <option value="15">15</option>
                                                <option value="17">17</option>
                                                <option value="19">19</option>
                                            </Form.Select>
                                        </Col>
                                        <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                            <Form.Label>Number of light nodes :</Form.Label>        
                                            <Form.Select onChange={onChangeLightNodes} placeholder='Nodes count'>
                                                <option value="0">-- Customize --</option>
                                                <option value="2">2</option>
                                                <option value="4">4</option>
                                            </Form.Select>
                                        </Col>
                                        <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                            <Form.Label>Name of the chain :</Form.Label>
                                            <Form.Control onChange={onChangeChainName} type="text" placeholder='' />
                                        </Col>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                            <Button className={StyleSimulator.continueBtn} type="submit" >Continue</Button>
                                        </Col>
                                        </Form>
                                    </Row>
                                </Col>
                                <Col xl={8} lg={8} md={8} sm={12} xs={12} className={StyleSimulator.cardContainer}>
                                    <h2 className={StyleSimulator.configHeading}>Network preview</h2>
                                    <Row className={StyleSimulator.scroll} style={{paddingLeft:"25px"}}>
                                       
                                        {allNodes.map((e,i)=>{
                                            return (

                                            <>
                                            {e.type == "FN" ? <Col  key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}><Card className={StyleSimulator.flip_card_inner}>
                                                        
                                            <div id={e.type} className={StyleSimulator.flip_card_front}>
                                            <Card.Header className={StyleSimulator.cardHeader}>
                                                <Row className="m-0">
                                                    <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                        <img src="/assets/node.png" className={StyleSimulator.imgIcon} />
                                                        
                                                    </Col>
                                                    <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                        <span style={{fontSize:"18px", color:"#4e4e4e"}}>Fullnode</span>
                                                    </Col>
                                                </Row>
                                            </Card.Header>
                                            <Card.Body className={StyleSimulator.cardBody}>
                                                <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                                <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                        {/* {e.miner == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="dark" text="light">Miner</Badge></span> : null}
                                                        {e.judge == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="warning" text="dark">judge</Badge></span> : null} */}
                                                        
                                                </Col>
                                            </Card.Body>
                                            </div>
                                            <div className={StyleSimulator.flip_card_back}>
                                                <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                                <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                                <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                            </div>
                                        </Card>
                                        </Col>
                                        : 
                                        <Col  key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}><Card className={StyleSimulator.flip_card_inner}>
                                                        
                                        <div id={e.type} className={StyleSimulator.flip_card_front}>
                                        <Card.Header className={StyleSimulator.cardHeader}>
                                            <Row className="m-0">
                                                <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                    <img src="/assets/node.png" className={StyleSimulator.imgIcon} />
                                                    
                                                </Col>
                                                <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                    <span style={{fontSize:"18px", color:"#4e4e4e"}}>LightNode</span>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body className={StyleSimulator.cardBody}>
                                            <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                    {e.miner == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="dark" text="light">Miner</Badge></span> : null}
                                                    {e.judge == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="warning" text="dark">judge</Badge></span> : null}
                                                    
                                            </Col>
                                        </Card.Body>
                                        </div>
                                        <div className={StyleSimulator.flip_card_back}>
                                            <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                            <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                            <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                            <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                        </div>
                                    </Card>
                                    </Col>
                                    }</>)
                                        })}
                                    </Row>
                                </Col>
                                </Row>
                                <Row id="config2" className="d-none m-0 p-0">
                                <Col xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.cardContainer}>
                                    <h2 className={StyleSimulator.configHeading}>More actions</h2>
                                    <Row className={StyleSimulator.scroll}>
                                        
                                        <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                            <Form.Label>Add new element</Form.Label>        
                                            <Form.Select onChange={onChangeElement} placeholder='Nodes count'>
                                                <option value="0">-- Customize --</option>
                                                <option value="ln">Light node</option>
                                                <option value="sn">Miner</option>
                                                <option value="us">User</option>
                                            </Form.Select>
                                        </Col>
                                        
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                                            {RenderElementForm(element)}
                                        </Col>
                                        
                                    </Row>
                                </Col>
                                <Col xl={8} lg={8} md={8} sm={12} xs={12} className={StyleSimulator.cardContainer}>
                                    <h2 className={StyleSimulator.configHeading}>Preview Changes</h2>
                                    <Row className={StyleSimulator.scroll} style={{paddingLeft:"25px"}}>
                                    {allMiners.map((e,i)=>{
                                            
                                            return (
                                               <>
                                                
                                            
                                                    
                                                    
                                                        {e.role == "Miner" ? <Col  key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}><Card className={StyleSimulator.flip_card_inner}>
                                                        
                                                            <div id={e.role} className={StyleSimulator.flip_card_front}>
                                                            <Card.Header className={StyleSimulator.cardHeader}>
                                                                <Row className="m-0">
                                                                    <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                        <img src="/assets/node.png" className={StyleSimulator.imgIcon} />
                                                                        
                                                                    </Col>
                                                                    <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                                        <span style={{fontSize:"18px", color:"#4e4e4e"}}>{e.role}</span>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Header>
                                                            <Card.Body className={StyleSimulator.cardBody}>
                                                                <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                        {e.miner == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="dark" text="light">Miner</Badge></span> : null}
                                                                        {e.judge == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="warning" text="dark">judge</Badge></span> : null}
                                                                        
                                                                </Col>
                                                            </Card.Body>
                                                            </div>
                                                            <div className={StyleSimulator.flip_card_back}>
                                                                <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                                            </div>
                                                        </Card>
                                                        </Col>
                                                        : null}
                                                    
                                               
                                               </> 
                                            )
                                        })}
                                    </Row>
                                </Col>

                                </Row>
                            </Row>
                        </Container>
                        
                    </Col>
                    <Col data-aos="fade-up" xl={12} lg={12} md={12} sm={12} xs={12} className={StyleSimulator.containerSimulation}>
                        <Container  className={StyleSimulator.containerSimulationConfig}>
                            <Row>
                                <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                                    <h1  className={StyleSimulator.heading}>Simulation</h1>
                                    
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={12} xs={12} className="text-end pe-5">

                                    {hasStarted ? <Button onClick={reset} className={StyleSimulator.launchBtn}>Reset</Button>  : <Button id="startBtn" onClick={startSimulation} className={StyleSimulator.launchBtn}>Start simulation</Button>}
                                    <span id="Timer" className={StyleSimulator.timer}>{simulationTimer}</span>
                                </Col>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleSimulator.cardContainerSimulation}>
                                    <h2 className={StyleSimulator.configHeading}>Network : {chainName}</h2>
                                    <Row>
                                        {users.map((e,i)=>{
                                            return (
                                                <>
                                                <Col  key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}><Card className={StyleSimulator.flip_card_inner}>
                                                        
                                                        <div id={e.role} className={StyleSimulator.flip_card_front}>
                                                        <Card.Header className={StyleSimulator.cardHeader}>
                                                            <Row className="m-0">
                                                                <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                    <img src="/assets/user.png" className={StyleSimulator.imgIcon} />
                                                                    
                                                                </Col>
                                                                <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                                    <span style={{fontSize:"18px", color:"#4e4e4e"}}>{e.name}</span>
                                                                </Col>
                                                            </Row>
                                                        </Card.Header>
                                                        <Card.Body className={StyleSimulator.cardBody}>
                                                            <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    
                                                            
                                                                Send transaction
                                                            
                                                            </Col>
                                                        </Card.Body>
                                                        </div>
                                                        <div className={StyleSimulator.flip_card_back}>
                                                            <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Type : {e.type}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                                            
                                                        <Button className={StyleSimulator.txBtn} onClick={() => {
                                                                setModalShow(true)
                                                                setModelData(e)
                                                                getSendTo()
                                                                }}>
                                                                Send transaction
                                                            </Button>
                                                        </div>
                                                    </Card>
                                                    </Col>
                                                </>
                                            )
                                        })}
                                        {allMiners.map((e,i)=>{
                                            
                                            return (
                                               <>
                                                
                                                    {e.role == "Leader" ? <Col key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}>
                                                        <Card className={StyleSimulator.flip_card_inner}>
                                                        <div id={e.role} className={StyleSimulator.flip_card_front}>
                                                        <Card.Header className={StyleSimulator.cardHeader}>
                                                            <Row className="m-0">
                                                                <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                    <img src="/assets/leader.png" className={StyleSimulator.imgIcon} />
                                                                    
                                                                </Col>
                                                                <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                                    <span style={{fontSize:"18px", color:"#4e4e4e"}}>Leader</span>
                                                                </Col>
                                                            </Row>
                                                        </Card.Header>
                                                        <Card.Body className={StyleSimulator.cardBody}>
                                                            <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    {e.miner == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="dark" text="light">Miner</Badge></span> : null}
                                                                    {e.judge == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="warning" text="dark">judge</Badge></span> : null}
                                                                    <span className='p-2'><Badge style={{fontSize:"14px"}} bg="light" text="dark">{e.RTScore}</Badge></span>
                                                                    
                                                            </Col>
                                                        </Card.Body>
                                                        </div>
                                                        <div className={StyleSimulator.flip_card_back}>
                                                            <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                                        </div>
                                                    </Card>
                                                    </Col>
                                                    : null}
                                                    
                                                    
                                                        {e.role == "Proposer" ? <Col  key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}>
                                                            <Card className={StyleSimulator.flip_card_inner}>
                                                            <div id={e.role} className={StyleSimulator.flip_card_front}>
                                                            <Card.Header className={StyleSimulator.cardHeader}>
                                                                <Row className="m-0">
                                                                    <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                        <img src="/assets/node.png" className={StyleSimulator.imgIcon} />
                                                                        
                                                                    </Col>
                                                                    <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                                        <span style={{fontSize:"18px", color:"#4e4e4e"}}>{e.role}</span>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Header>
                                                            <Card.Body className={StyleSimulator.cardBody}>
                                                                <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                        {e.miner == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="dark" text="light">Miner</Badge></span> : null}
                                                                        {e.judge == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="warning" text="dark">judge</Badge></span> : null}
                                                                        <span className='p-2'><Badge style={{fontSize:"14px"}} bg="light" text="dark">{e.RTScore}</Badge></span>
                                                                </Col>
                                                            </Card.Body>
                                                            </div>
                                                            <div className={StyleSimulator.flip_card_back}>
                                                                <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                                            </div>
                                                        </Card>
                                                        </Col>
                                                        : null}
                                                   
                                                   
                                                        {e.role == "Validator" ?<Col  key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}> <Card className={StyleSimulator.flip_card_inner}>                                            
                                                            <div id={e.role} className={StyleSimulator.flip_card_front}>
                                                            <Card.Header className={StyleSimulator.cardHeader}>
                                                                <Row className="m-0">
                                                                    <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                        <img src="/assets/node.png" className={StyleSimulator.imgIcon} />
                                                                        
                                                                    </Col>
                                                                    <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                                        <span style={{fontSize:"18px", color:"#4e4e4e"}}>{e.role}</span>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Header>
                                                            <Card.Body className={StyleSimulator.cardBody}>
                                                                <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                        {e.miner == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="dark" text="light">Miner</Badge></span> : null}
                                                                        {e.judge == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="warning" text="dark">judge</Badge></span> : null}
                                                                        <span className='p-2'><Badge style={{fontSize:"14px"}} bg="light" text="dark">{e.RTScore}</Badge></span>
                                                                </Col>
                                                            </Card.Body>
                                                            </div>
                                                            <div className={StyleSimulator.flip_card_back}>
                                                                <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                                            </div>
                                                        </Card>
                                                        </Col>
                                                        : null}
                                                    
                                                    
                                                        {e.role == "Miner" ? <Col  key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}><Card className={StyleSimulator.flip_card_inner}>
                                                        
                                                            <div id={e.role} className={StyleSimulator.flip_card_front}>
                                                            <Card.Header className={StyleSimulator.cardHeader}>
                                                                <Row className="m-0">
                                                                    <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                        <img src="/assets/node.png" className={StyleSimulator.imgIcon} />
                                                                        
                                                                    </Col>
                                                                    <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                                        <span style={{fontSize:"18px", color:"#4e4e4e"}}>{e.role}</span>
                                                                    </Col>
                                                                </Row>
                                                            </Card.Header>
                                                            <Card.Body className={StyleSimulator.cardBody}>
                                                                <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                        {e.miner == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="dark" text="light">Miner</Badge></span> : null}
                                                                        {e.judge == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="warning" text="dark">judge</Badge></span> : null}
                                                                        <span className='p-2'><Badge style={{fontSize:"14px"}} bg="light" text="dark">{e.RTScore}</Badge></span>
                                                                </Col>
                                                            </Card.Body>
                                                            </div>
                                                            <div className={StyleSimulator.flip_card_back}>
                                                                <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                                                <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                                            </div>
                                                        </Card>
                                                        </Col>
                                                        : null}
                                                    
                                               
                                               </> 
                                            )
                                        })}
                                        {lightNodes.map((e,i)=>{
                                            return (
                                                <>
                                                <Col  key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}><Card className={StyleSimulator.flip_card_inner}>
                                                        
                                                        <div id={e.role} className={StyleSimulator.flip_card_front}>
                                                        <Card.Header className={StyleSimulator.cardHeader}>
                                                            <Row className="m-0">
                                                                <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                    <img src="/assets/node.png" className={StyleSimulator.imgIcon} />
                                                                    
                                                                </Col>
                                                                <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                                    <span style={{fontSize:"18px", color:"#4e4e4e"}}>Light node</span>
                                                                </Col>
                                                            </Row>
                                                        </Card.Header>
                                                        <Card.Body className={StyleSimulator.cardBody}>
                                                            <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    {e.miner == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="dark" text="light">Miner</Badge></span> : null}
                                                                    {e.judge == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="warning" text="dark">judge</Badge></span> : null}
                                                                    
                                                            </Col>
                                                        </Card.Body>
                                                        </div>
                                                        <div className={StyleSimulator.flip_card_back}>
                                                            <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                                        </div>
                                                    </Card>
                                                    </Col>
                                                </>
                                            )
                                        })}
                                        {genesis.map((e,i)=>{
                                            return (
                                               <>
                                                <Col  key={i} xl={4} lg={4} md={4} sm={12} xs={12} className={StyleSimulator.flip_card}><Card className={StyleSimulator.flip_card_inner}>
                                                        
                                                        <div id={e.role} className={StyleSimulator.flip_card_front}>
                                                        <Card.Header className={StyleSimulator.cardHeader}>
                                                            <Row className="m-0">
                                                                <Col className={StyleSimulator.imgCont} xl={4} lg={4} md={4} sm={12} xs={12}>
                                                                    <img src="/assets/genesis.png" className={StyleSimulator.imgIcon} />
                                                                    
                                                                </Col>
                                                                <Col className="d-flex align-items-center" xl={8} lg={8} md={8} sm={12} xs={12}>
                                                                    <span style={{fontSize:"18px", color:"#4e4e4e"}}>genesis</span>
                                                                </Col>
                                                            </Row>
                                                        </Card.Header>
                                                        <Card.Body className={StyleSimulator.cardBody}>
                                                            <Col className="d-flex align-items-center justify-content-center" xl={12} lg={12} md={12} sm={12} xs={12}>
                                                                    {e.miner == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="dark" text="light">Miner</Badge></span> : null}
                                                                    {e.judge == true ?<span className='p-2'><Badge style={{fontSize:"14px"}} bg="warning" text="dark">judge</Badge></span> : null}
                                                                    
                                                            </Col>
                                                        </Card.Body>
                                                        </div>
                                                        <div className={StyleSimulator.flip_card_back}>
                                                            <h5 className={StyleSimulator.nodeDetails}>P. key : {e.pk}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Account : {e.account}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Role : {e.role}</h5>
                                                            <h5 className={StyleSimulator.nodeDetails}>Balance : {e.balance}</h5>
                                                        </div>
                                                    </Card>
                                                    </Col>
                                               </> 
                                            )
                                        })}
                                    </Row>
                                </Col>
                            </Row>
                            <Row className={StyleSimulator.rowNodes}>
                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                
                            <h2 className={StyleSimulator.configHeading}>Event log</h2>
                                </Col>
                                 <Col xl={12} lg={12} md={12} sm={12} xs={12} className={StyleSimulator.eventLog}>
                                    <Table responsive className={StyleSimulator.logTable}>
                                        <thead>
                                            <tr>
                                            <th>Line</th>
                                            <th>Executor</th>
                                            <th>Log</th>
                                            <th>Time</th>
                                            <th>More info</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {allLogs.map((e,i)=>{
                                         return (
                                            <>
                                                <tr key={i}>
                                                <td className={StyleSimulator.lineId}>{i}</td>
                                                <td>{e.executor}</td>
                                                <td className={StyleSimulator.log}>{e.content}</td>
                                                <td className={StyleSimulator.logTimeStamp}>{e.timestamp}</td>
                                                {e.blockContent ? 
                                                <>
                                                <div id={"myModal"+i} className={StyleSimulator.modal}>
                                                
                                                 
                                                  <div className={StyleSimulator.modal_content}>
                                                    <span className={StyleSimulator.close} onClick={()=>{closeModal(i)}}>&times;</span>
                                                    <Row>
                                                        <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="text-center mb-5">
                                                            <h1 data-aos="fade-up" className={StyleSimulator.heading}>Info about : {e.blockName} </h1>
                                                            
                                                        </Col>
                                                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                                            <Table responsive className={StyleSimulator.logTable}>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Chain ID</th>
                                                                        <th>Block number</th>
                                                                        <th>Hash</th>
                                                                        <th>Timestamp</th>
                                                                        <th>Signer</th>
                                                                        <th>Transaction count</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                
                                                                        <tr>
                                                                        <td>{e.blockContent.chainID}</td>
                                                                        <td>{e.blockContent.Blocknumber}</td>
                                                                        <td>{e.blockContent.hash}</td>
                                                                        <td>{e.blockContent.timestamp}</td>
                                                                        <td>{e.blockContent.signer}</td>
                                                                        <td>{e.blockContent.txCount}</td>
                                                                        
                                                                        </tr>                                        
                                                                </tbody>
                                                            </Table>
                                                        </Col>
                                                    </Row>
                                                  </div>
                                                
                                                </div>
                                                    <td><Button  className={StyleSimulator.detailsBtn} onClick={()=>{openModel(i)}}>Voir les détails</Button></td> 
                                                </>
                                                : 
                                                    <td></td>
                                                }
                                                </tr>
                                            </>
                                         )
                                        })}                                         
                                        </tbody>
                                    </Table>
                                     
                                    
                                </Col>
                                    
                                
                            </Row>
                        </Container>
                        
                    </Col>
                    <Results />
                    <MyVerticallyCenteredModal
                        data={modelData}
                        sendTo={sendTo}
                        show={modalShow}
                        getTxData={getTxData}
                        onHide={() => setModalShow(false)}
                    />
        </>
    )
}

function MyVerticallyCenteredModal({getTxData, ...props}) {
    
    const [txData, setTxData] = useState({})
    const [sender, setSender] = useState("")
    const [receiver, setReceiver] = useState("")
    const [amount, setAmount] = useState("")
    const onChangeReceiver = (e) => {
        e.preventDefault()
        setSender(props.data.pk)
        setReceiver(e.target.value)
    }
    const onChangeAmount = (e) => {
        if(e.target.value < props.data.balance) {

            e.preventDefault()
            setAmount(e.target.value)
        }
    }
    const handleClick = () => {
        props.data.balance = props.data.balance - amount 
        let txDataJson = {}
        txDataJson.sender =sender
        txDataJson.receiver = receiver
        txDataJson.amount = amount
        setTxData(txDataJson)
        getTxData(txData)
    }
    if(props.data.transactions) {
        
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                User : {props.data.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Create new transaction</h4>
                <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                    <Form.Label>Sender address : {props.data.pk}</Form.Label>        
                </Col>
                <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                    <Form.Label>Please select a receiver address : </Form.Label> 
                    <Form.Select onChange={onChangeReceiver} placeholder='Nodes count'>
                    <option value="0">-- Customize --</option>
                        {props.sendTo.map((e,i)=>{
                            return (
                                <>
                                <option value={e.pk}>{e.pk}</option>
                                </>
                            )
                        })}
                    </Form.Select>       
                </Col>
                <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                    <Form.Label>Amount : </Form.Label>  
                    <Form.Control onChange={onChangeAmount} type="text" placeholder='Enter an amount' />
                </Col>
                <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                    
                   {props.data.transactions.map((e,i)=>{
    
                        return (
                            <>
                            <h6>sender : {e.sender} | receiver: {e.receiver} | amount : {e.amount}</h6>
                            
                            </>
                        )
                        })}
                </Col>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>{handleClick()}}>Send</Button>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    } else {
        return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  User : {props.data.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Create new transaction</h4>
                  <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                      <Form.Label>Sender address : {props.data.pk}</Form.Label>        
                  </Col>
                  <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                      <Form.Label>Please select a receiver address : </Form.Label> 
                      <Form.Select onChange={onChangeReceiver} placeholder='Nodes count'>
                      <option value="0">-- Customize --</option>
                          {props.sendTo.map((e,i)=>{
                              return (
                                  <>
                                  <option value={e.pk}>{e.pk}</option>
                                  </>
                              )
                          })}
                      </Form.Select>       
                  </Col>
                  <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                      <Form.Label>Amount : </Form.Label>  
                      <Form.Control onChange={onChangeAmount} type="text" placeholder='Enter an amount' />
                  </Col>
                  <Col  xl={12} lg={12} md={12} sm={12} xs={12} className="mb-2 mt-2">
                      
                     {/* {props.data.transactions.map((e,i)=>{
      
                          return (
                              <>
                              <h6>sender : {e.sender} | receiver: {e.receiver} | amount : {e.amount}</h6>
                              
                              </>
                          )
                          })} */}
                  </Col>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={()=>{handleClick()}}>Send</Button>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>)
    }
  }