import React, { Component } from 'react'
import styles from '../css/about.module.css'
import { Container,Row,Col } from 'react-bootstrap'
import school1 from '../img/jizhidexiaohailang-DJsbfCjhnJ4-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillAwardFill,BsPersonCheck} from 'react-icons/bs'
import Slider from "react-slick";

export default class Maktabhayoti extends Component {
    render() {
        const settings = {
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                  },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
          }
        return (
            <div style={{overflow:'hidden'}}>
                <div className={styles.header}>
                 <h1>Maktab hayoti</h1>
                </div>
                <div className={styles.benefits}>
                    <Container>
                        <Row>
                            <Col lg={6}>
                              <img src={school1} style={{width:'100%'}}/>
                            </Col>
                            <Col lg={6} style={{padding:'30px'}}>
                                <h1>Maktabimiz haqida qisqacha ma'lumot</h1>
                                <div className={styles.card}>
                                    <div><BsFillAwardFill style={{color:'#22B4A8',fontSize:'50px',marginRight:'20px'}}/></div>
                                    <div>
                                        <h4>Online Courses</h4>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div><BsFillAwardFill style={{color:'#22B4A8',fontSize:'50px',marginRight:'20px'}}/></div>
                                    <div>
                                        <h4>Online Courses</h4>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                                <div className={styles.card}>
                                    <div><BsFillAwardFill style={{color:'#22B4A8',fontSize:'50px',marginRight:'20px'}}/></div>
                                    <div>
                                        <h4>Online Courses</h4>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={styles.counter}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <div>
                            <BsPersonCheck style={{fontSize:'50px',marginRight:'20px',color:'white'}}/>
                        </div>
                        <div>
                            <h1 style={{fontWeight:'700',color:'white',marginTop:'10px'}}>3000</h1>
                            <p style={{color:'white',marginTop:'-10px',textTransform:'uppercase',fontWeight:'500'}}>O'quvchilar</p>
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <div>
                            <BsPersonCheck style={{fontSize:'50px',marginRight:'20px',color:'white'}}/>
                        </div>
                        <div>
                            <h1 style={{fontWeight:'700',color:'white',marginTop:'10px'}}>320</h1>
                            <p style={{color:'white',marginTop:'-10px',textTransform:'uppercase',fontWeight:'500'}}>O'qituvchilar</p>
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <div>
                            <BsPersonCheck style={{fontSize:'50px',marginRight:'20px',color:'white'}}/>
                        </div>
                        <div>
                            <h1 style={{fontWeight:'700',color:'white',marginTop:'10px'}}>1200</h1>
                            <p style={{color:'white',marginTop:'-10px',textTransform:'uppercase',fontWeight:'500'}}>O'quvchilar</p>
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <div>
                            <BsPersonCheck style={{fontSize:'50px',marginRight:'20px',color:'white'}}/>
                        </div>
                        <div>
                            <h1 style={{fontWeight:'700',color:'white',marginTop:'10px'}}>23</h1>
                            <p style={{color:'white',marginTop:'-10px',textTransform:'uppercase',fontWeight:'500'}}>A'lochilar</p>
                        </div>
                    </div>
                </div>
                <div className={styles.successful}>
                    <h1>Bizning muvaffaqiyatli o'quvchilarimiz</h1>
                    <Slider {...settings} style={{padding:'20px'}}>
                     <div className={styles.slider}>
                         <div style={{display:'flex',flexDirection:'row',padding:'30px'}}>
                             <div style={{width:'80px'}}>
                                 <img src={school1} style={{width:'80px',height:'80px',objectFit:'cover',borderRadius:'50%'}}/>
                             </div>
                             <div style={{marginLeft:'10px'}}>
                                 <h4 style={{marginTop:'10px'}}>Azizov Abror</h4>
                                 <p style={{marginTop:'-5px',color:'#1EB2A6'}}>9-"B" sinf o'quvchisi</p>
                             </div>
                         </div>
                         <div>
                             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                         </div>
                     </div>
                     <div className={styles.slider}>
                         <div style={{display:'flex',flexDirection:'row',padding:'30px'}}>
                             <div style={{width:'80px'}}>
                                 <img src={school1} style={{width:'80px',height:'80px',objectFit:'cover',borderRadius:'50%'}}/>
                             </div>
                             <div style={{marginLeft:'10px'}}>
                                 <h4 style={{marginTop:'10px'}}>Azizov Abror</h4>
                                 <p style={{marginTop:'-5px',color:'#1EB2A6'}}>9-"B" sinf o'quvchisi</p>
                             </div>
                         </div>
                         <div>
                             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                         </div>
                     </div>
                     <div className={styles.slider}>
                         <div style={{display:'flex',flexDirection:'row',padding:'30px'}}>
                             <div style={{width:'80px'}}>
                                 <img src={school1} style={{width:'80px',height:'80px',objectFit:'cover',borderRadius:'50%'}}/>
                             </div>
                             <div style={{marginLeft:'10px'}}>
                                 <h4 style={{marginTop:'10px'}}>Azizov Abror</h4>
                                 <p style={{marginTop:'-5px',color:'#1EB2A6'}}>9-"B" sinf o'quvchisi</p>
                             </div>
                         </div>
                         <div>
                             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                         </div>
                     </div>
                     <div className={styles.slider}>
                         <div style={{display:'flex',flexDirection:'row',padding:'30px'}}>
                             <div style={{width:'80px'}}>
                                 <img src={school1} style={{width:'80px',height:'80px',objectFit:'cover',borderRadius:'50%'}}/>
                             </div>
                             <div style={{marginLeft:'10px'}}>
                                 <h4 style={{marginTop:'10px'}}>Azizov Abror</h4>
                                 <p style={{marginTop:'-5px',color:'#1EB2A6'}}>9-"B" sinf o'quvchisi</p>
                             </div>
                         </div>
                         <div>
                             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                         </div>
                     </div>
                    </Slider>
                    
                </div>
            </div>
        )
    }
}
