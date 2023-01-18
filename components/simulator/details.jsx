import React,{useState} from 'react'
import Offcanvas  from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import StyleSimulator from '../../styles/simulator/simulator.module.css'
function OffCanvasExample({ name, content, ...props }) {
    
}
  
 export default function Example(props) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const renderFeeAccount = (data) => {
    if(data.feeAccount !== undefined && data.feeAccount !== null){
      return (
        <>
        <span className={StyleSimulator.infoContainer}>
            
            feeAccount : {props.data.feeAccount}
        </span>
        </>
      )
    }
    else {
      return null
    }
  }
  if(props.data.type === "node" || props.data.type === "nodeOwner") {
  return (
    <>
      <Col xl={2} lg={2} md={2} sm={12} xs={12} className={StyleSimulator.node}>
          <Button className={StyleSimulator.canvasBtn} onClick={handleShow}>
          
      
          <div className={StyleSimulator.iconContainer}>

          <FontAwesomeIcon icon={solid('laptop')} id="red" />
          </div>
          <div className='text-start'>
          <span className={StyleSimulator.infoContainer}>
              public key : {props.data.pk}   
              
          </span>
          
          {renderFeeAccount(props.data)}
          </div>
      
          </Button> 
      </Col>
      
      <Offcanvas placement="bottom" show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.data.pk}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
} else {

  return (
    
      <>
        <Col xl={2} lg={2} md={2} sm={12} xs={12} className={StyleSimulator.node}>
            <Button className={StyleSimulator.canvasBtn} onClick={handleShow}>
            
        
            <div className={StyleSimulator.iconContainer}>

            <FontAwesomeIcon icon={solid('user')} id="red" />
            </div>
            <div className='text-start'>
            <span className={StyleSimulator.infoContainer}>
                {props.data.name}  
            </span>
            <span className={StyleSimulator.infoContainer}>
                public key : {props.data.pk}  
            </span>
            
            </div>
        
            </Button> 
        </Col>
        
        <Offcanvas placement="bottom" show={show} onHide={handleClose} >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{props.data.pk}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
  }