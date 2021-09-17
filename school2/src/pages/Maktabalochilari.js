import React, { Component } from 'react'
import styles from '../css/maktabalochilari.module.css'
import school1 from '../img/cole-keister-vEgVWRBr2VY-unsplash.jpg'
import {FaStar} from 'react-icons/fa'
import { Container,Row,Col} from 'react-bootstrap'
export default class Maktabalochilari extends Component {
    render() {
        return (
            <div>
                <div className={styles.header}>
                    <h1>Maktab a'lochilari</h1>
                </div>
                <div className={styles.alochilar}>
                    <h1>Maktab a'lochilari</h1>
                    <Container>
                        <Row>
                            <Col lg={6}>
                            <div className={styles.card}>
                        <div style={{width:'300px',height:'200px'}}>
                         <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div style={{padding:'10px',backgroundColor:'white'}}>
                            <p style={{color:'#1EB2A6',fontWeight:'600',marginTop:'10px'}}>A'lochi o'quvchi</p>
                            <h5 style={{fontSize:'23px',marginTop:'-18px',marginLeft:'10px'}}>Azizov Abror</h5>
                            <FaStar style={{color:'#1EB2A6',marginLeft:'10px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                            </Col>
                            <Col lg={6}>
                            <div className={styles.card}>
                        <div style={{width:'300px',height:'200px'}}>
                         <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div style={{padding:'10px',backgroundColor:'white'}}>
                            <p style={{color:'#1EB2A6',fontWeight:'600',marginTop:'10px'}}>A'lochi o'quvchi</p>
                            <h5 style={{fontSize:'23px',marginTop:'-18px',marginLeft:'10px'}}>Azizov Abror</h5>
                            <FaStar style={{color:'#1EB2A6',marginLeft:'10px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                            </Col>
                            <Col lg={6}>
                            <div className={styles.card}>
                        <div style={{width:'300px',height:'200px'}}>
                         <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div style={{padding:'10px',backgroundColor:'white'}}>
                            <p style={{color:'#1EB2A6',fontWeight:'600',marginTop:'10px'}}>A'lochi o'quvchi</p>
                            <h5 style={{fontSize:'23px',marginTop:'-18px',marginLeft:'10px'}}>Azizov Abror</h5>
                            <FaStar style={{color:'#1EB2A6',marginLeft:'10px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                            </Col>
                            <Col lg={6}>
                            <div className={styles.card}>
                        <div style={{width:'300px',height:'200px'}}>
                         <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div style={{padding:'10px',backgroundColor:'white'}}>
                            <p style={{color:'#1EB2A6',fontWeight:'600',marginTop:'10px'}}>A'lochi o'quvchi</p>
                            <h5 style={{fontSize:'23px',marginTop:'-18px',marginLeft:'10px'}}>Azizov Abror</h5>
                            <FaStar style={{color:'#1EB2A6',marginLeft:'10px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
