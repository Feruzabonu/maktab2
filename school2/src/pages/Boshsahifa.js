import React, { Component } from 'react'
import styles from '../css/boshsahifa.module.css'
import {FaRegCalendarAlt} from 'react-icons/fa'
import { Container,Row,Col } from 'react-bootstrap'
import school1 from '../img/nam-hoang-RHNiArBkukE-unsplash.jpg'
import ReactPlayer from "react-player"
import { BiCalendar} from 'react-icons/bi';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Navbar from './Navbar';
import Footer from './Footer'
export default class Boshsahifa extends Component {
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
            <div style={{overflow:'hidden',zIndex:'1'}}>
                <Navbar/>
                <div className={styles.header}>
                   
                </div>
                <div className={styles.video}>
                 <Container>
                     <Row>
                         <Col lg={6} >
                             <h2>Maktabga video sayohat</h2>
                             <ReactPlayer
                               data-aos="fade-up"
                               style={{marginTop:'70px',position:'inherit',zIndex:'111111111111'}}
                               width='100%'
                               height='400px'
        url="https://youtu.be/qObZJS_PyuM"
      />
                         </Col>
                         <Col lg={6}>
                             <h2>So'nggi yangiliklar</h2>
                             <div className={styles.four} style={{textAlign:'left',paddingTop:'20px'}}>
                               
                                 <div className={styles.new} style={{marginTop:'40px'}}>
                                     <div className={styles.new_img}><img src={school1}/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}>Jan. 18,2021</span></div>
                                             <p>Maktabimizda yangi o'quv yili uchun qabul boshlandi.</p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={styles.new}>
                                     <div className={styles.new_img}><img src={school1}/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}>Jan. 18,2021</span></div>
                                             <p>Maktabimizda yangi o'quv yili </p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={styles.new}>
                                     <div className={styles.new_img}><img src={school1}/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}>Jan. 18,2021</span></div>
                                             <p>Maktabimizda yangi o'quv yili uchun qabul boshlandi.</p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={styles.new}>
                                     <div className={styles.new_img}><img src={school1}/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}>Jan. 18,2021</span></div>
                                             <p>Maktabimizda yangi o'quv yili uchun qabul boshlandi.</p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={styles.new}>
                                     <div className={styles.new_img}><img src={school1}/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div style={{cursor:"pointer"}}><BiCalendar size="14px" color="#1eb2a6"/><span style={{fontSize:'14px', color: '#1eb2a6', fontWeight:'normal'}}>Jan. 18,2021</span></div>
                                             <p>Maktabimizda yangi o'quv yili uchun qabul boshlandi.</p>
                                         </div>
                                     </div>
                                 </div>
                                 </div>
                         </Col>
                     </Row>
                 </Container>
                </div>
               <div className={styles.tadbirlar}>
                   <h2>So'nngi tadbirlar</h2>
                   <Container style={{padding:'0'}}>
                       <Row>
                           <Col lg={4} md={6} sm={12} style={{padding:'0'}}>
                           <div className={styles.tadbirCard}>
                        <div style={{width:'100%',height:'250px'}}>
                            <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
                        </div>
                        <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                            <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>18 Jan. 2021</span>
                            <h4 style={{marginTop:'20px'}}>Build your Dream Software & Engineering Career</h4>
                            <p style={{color:'#9D9D9D',marginTop:'20px'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                         </div>
                    </div>
                           </Col>
                           <Col lg={4} md={6} sm={12} style={{padding:'0'}}>
                           <div className={styles.tadbirCard} >
                        <div style={{width:'100%',height:'250px'}}>
                            <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
                        </div>
                        <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                            <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>18 Jan. 2021</span>
                            <h4 style={{marginTop:'20px'}}>Build your Dream Software & Engineering Career</h4>
                            <p style={{color:'#9D9D9D',marginTop:'20px'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                         </div>
                    </div>
                           </Col>
                           <Col lg={4} md={6} sm={12} style={{padding:'0'}}>
                           <div className={styles.tadbirCard} >
                        <div style={{width:'100%',height:'250px'}}>
                            <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
                        </div>
                        <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                            <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>18 Jan. 2021</span>
                            <h4 style={{marginTop:'20px'}}>Build your Dream Software & Engineering Career</h4>
                            <p style={{color:'#9D9D9D',marginTop:'20px'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
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
