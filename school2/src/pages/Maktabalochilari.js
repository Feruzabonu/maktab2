import React, { Component } from 'react'
import styles from '../css/maktabalochilari.module.css'
import school1 from '../img/cole-keister-vEgVWRBr2VY-unsplash.jpg'
import {FaStar} from 'react-icons/fa'
import { Container,Row,Col} from 'react-bootstrap'
import ScaleLoader from 'react-spinners/ScaleLoader';
import Navbar from './Navbar';
import Footer from './Footer'
export default class Maktabalochilari extends Component {
    state={
        loader:true
    }
    componentDidMount() {
      setInterval(()=>{
          this.setState({
              loader:false
          })
      },2000)
    }
    render() {
        return (
            <div>
            {this.state.loader ? (
              <div className={styles.loader}>
                <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
              </div>
            ) : (
            <div>
                <Navbar/>
                <div className={styles.header}>
                    <h1>Maktab a'lochilari</h1>
                </div>
                <div className={styles.alochilar}>
                    <h1>Maktab a'lochilari</h1>
                    <Container>
                        <Row>
                            <Col lg={6} md={12} sm={12}>
                            <div className={styles.card}>
                        <div className={styles.cardImg}>
                         <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div className={styles.cardText} style={{padding:'10px',backgroundColor:'white'}}>
                            <p style={{color:'#1EB2A6',fontWeight:'600',marginTop:'10px'}}>A'lochi o'quvchi</p>
                            <h5 style={{fontSize:'23px',marginTop:'-18px',marginLeft:'10px'}}>Azizov Abror</h5>
                            <FaStar style={{color:'#1EB2A6',marginLeft:'10px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                            <div className={styles.card}>
                        <div className={styles.cardImg}>
                         <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div className={styles.cardText} style={{padding:'10px',backgroundColor:'white'}}>
                            <p style={{color:'#1EB2A6',fontWeight:'600',marginTop:'10px'}}>A'lochi o'quvchi</p>
                            <h5 style={{fontSize:'23px',marginTop:'-18px',marginLeft:'10px'}}>Azizov Abror</h5>
                            <FaStar style={{color:'#1EB2A6',marginLeft:'10px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                            <div className={styles.card}>
                        <div className={styles.cardImg}>
                         <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div className={styles.cardText} style={{padding:'10px',backgroundColor:'white'}}>
                            <p style={{color:'#1EB2A6',fontWeight:'600',marginTop:'10px'}}>A'lochi o'quvchi</p>
                            <h5 style={{fontSize:'23px',marginTop:'-18px',marginLeft:'10px'}}>Azizov Abror</h5>
                            <FaStar style={{color:'#1EB2A6',marginLeft:'10px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/><FaStar style={{color:'#1EB2A6',marginLeft:'5px'}}/>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </div>
                            </Col>
                            <Col lg={6} md={12} sm={12}>
                            <div className={styles.card}>
                        <div className={styles.cardImg}>
                         <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                        </div>
                        <div className={styles.cardText} style={{padding:'10px',backgroundColor:'white'}}>
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
                <Footer/>
            </div>
               )}
               </div>
        )
    }
}
