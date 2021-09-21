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
import Slider from "react-slick";
import school from "../img/gerb.jpg";
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import her4 from "../img/h4.jpg";
import her5 from "../img/h5.png";
import her6 from "../img/h6.png";
import { Form, Input, Button } from 'antd';
import { YMaps, Map ,Clusterer, Placemark, 
    TypeSelector, ZoomControl, GeolocationControl, RouteButton, TrafficControl} from 'react-yandex-maps';

    const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

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
        const settings = {
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 6,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                    }
                  },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
            ]
          }
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
                           <Col lg={4} md={6} sm={12} style={{padding:'0'}} className={styles.tadbirCard}>
                           
                        <div style={{height:'250px'}}>
                            <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
                        </div>
                        <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                            <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>18 Jan. 2021</span>
                            <h4 style={{marginTop:'20px'}}>Build your Dream Software & Engineering Career</h4>
                            <p style={{color:'#9D9D9D',marginTop:'20px'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                         </div>
                    
                           </Col>
                           <Col lg={4} md={6} sm={12} style={{padding:'0'}} className={styles.tadbirCard}>
                           
                        <div style={{width:'100%',height:'250px'}}>
                            <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
                        </div>
                        <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                            <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>18 Jan. 2021</span>
                            <h4 style={{marginTop:'20px'}}>Build your Dream Software & Engineering Career</h4>
                            <p style={{color:'#9D9D9D',marginTop:'20px'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                         </div>
                    
                           </Col>
                           <Col lg={4} md={6} sm={12} style={{padding:'0'}} className={styles.tadbirCard}>
                           
                        <div style={{width:'100%',height:'250px'}}>
                            <img src={school1} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'5px 5px 0 0'}}/>
                        </div>
                        <div style={{textAlign:"left",padding:'20px',backgroundColor:'white'}}>
                            <FaRegCalendarAlt style={{color:'#1EB2A6'}}/> <span style={{marginLeft:'10px',color:'#949494',fontSize:'14px',fontWeight:'700'}}>18 Jan. 2021</span>
                            <h4 style={{marginTop:'20px'}}>Build your Dream Software & Engineering Career</h4>
                            <p style={{color:'#9D9D9D',marginTop:'20px'}}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                         </div>
                    
                           </Col>
                       </Row>
                   </Container>
               </div>
               <div className={styles.hamkorlar}>
                   <h2>Bizning hamkorlar</h2>
               <Slider {...settings} style={{padding:'20px'}}>
               <div className={styles.hamkor}>
                <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                  <a href="https://president.uz/oz" target="_blank">
                    <img src={school} style={{width:'100%',height:'100%',borderRadius:'50%',objectFit:'cover'}}/>
                  </a>
                </div>
                <p>O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
              </div>
              <div className={styles.hamkor}>
                <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                  <a href="https://www.gov.uz/uz" target="_blank">
                    <img src={her2} style={{width:'90%',height:'90%',borderRadius:'50%',objectFit:'cover'}}/>
                  </a>
                </div>
                <p>O'zbekiston Respublikasining Hukumat portali</p>
              </div>
              <div className={styles.hamkor}>
                <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                  <a href="https://lex.uz/" target="_blank">
                    <img src={her3} style={{width:'90%',height:'90%',borderRadius:'50%',objectFit:'cover'}}/>
                  </a>
                </div>
                <p>O'zbekiston Respublikasi qonun hujjatlari milliy bazasi</p>
              </div>
              <div className={styles.hamkor} >
                <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                  <a href="https://my.gov.uz/oz" target="_blank">
                    <img src={her4} style={{width:'90%',height:'90%',borderRadius:'50%',objectFit:'cover'}}/>
                  </a>
                </div>
                <p>Interaktiv davlat xizmatlarining Yagona portali</p>
              </div>
              <div className={styles.hamkor}>
                <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                  <a href="https://www.uzedu.uz/" target="_blank">
                    <img src={her5} style={{width:'100%',height:'100%',borderRadius:'50%',objectFit:'cover'}}/>
                  </a>
                </div>
                <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
              </div>
              <div className={styles.hamkor}>
                <div className={styles.imgHamkor} style={{ backgroundColor: "white" }}>
                  <a href="https://ittower.uz/" target="_blank">
                    <img src={her6} style={{width:'90%',height:'90%',borderRadius:'50%',objectFit:'cover'}}/>
                  </a>
                </div>
                <p>IT Tower firmasi </p>
              </div>
              </Slider>
               </div>
               <div className={styles.kontakt}>
                   <Container className={styles.contact} style={{backgroundColor:'white',padding:'0',marginTop:'60px',marginBottom:'30px'}}>
                       <Row>
                           <Col lg={6}>
                           <YMaps>
    <div style={{width:'100%',height:'100%',boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
     
      <Map width='100%' height='100%' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </div>
  </YMaps>
                           </Col>
                           <Col lg={6} className={styles.form}>
                               <h2>Biz bilan bog'laning</h2>
                               <div className={styles.address}>
                                   <div style={{paddingRight:'20px'}}>
                                       <h5>Manzil:</h5>
                                       <p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>Yakkasaroy tumani</p>
                                   </div>
                                   <div style={{paddingRight:'20px'}}>
                                    <h5>E-mail:</h5>
                                       <p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>jbvhqbvbyuwebv@gmail.com</p>
                                   </div>
                                <div style={{paddingRight:'10px'}}>
                                    <h5>Telefon:</h5>
                                    <p style={{fontSize:'15px',color:'rgba(0,0,0,0.5)'}}>+823721365175</p>
                                </div>

                               </div>
                               <Form className={styles.formInput}  style={{width:'100%',marginLeft:'0px'}} {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="F.I.O ni kiriting" style={{padding:'5px',width:'90%',border:'1px solid #1EB2A6',marginBottom:'5px',outline:'none',fontSize:'14px'}}/>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="E-mail kiriting" style={{padding:'5px',width:'90%',border:'1px solid #1EB2A6',marginBottom:'5px',outline:'none',fontSize:'14px'}}/>
        </Form.Item>
        <Form.Item name="text">
        <TextArea
        placeholder="Savollar yoki takliflar"
        style={{padding:'5px',width:'90%',border:'1px solid #1EB2A6',marginBottom:'5px',outline:'none',fontSize:'14px'}}
          autoSize={{ minRows: 5, maxRows: 5 }}
        />
      </Form.Item>
        <Form.Item {...tailLayout}>
          <Button className={styles.btnForm} htmlType="submit" style={{backgroundColor:'#1EB2A6',color:'white',fontWeight:'700',width:'100px',border:'none'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div style={{display:'flex',flexDirection:'row',marginTop:'30px'}}>
          <span style={{color:'#1EB2A6',fontWeight:'700',marginRight:'10px',cursor:'pointer'}}>Telegram</span>
          <span style={{color:'#1EB2A6',fontWeight:'700',marginRight:'10px',cursor:'pointer'}}>Youtube</span>
          <span style={{color:'#1EB2A6',fontWeight:'700',marginRight:'10px',cursor:'pointer'}}>Facebook</span>
          <span style={{color:'#1EB2A6',fontWeight:'700',marginRight:'10px',cursor:'pointer'}}>Instagram</span>

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
