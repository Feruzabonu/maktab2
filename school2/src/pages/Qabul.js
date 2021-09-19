import React, { Component } from 'react';
import styles from '../css/qabul.module.css';
import { Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScaleLoader from 'react-spinners/ScaleLoader';
import rasm1 from '../img/qabul1.jpg'
import rasm2 from '../img/rasm2.png'
import rasm3 from '../img/rasm3.png'
import rasm4 from '../img/rasm4.png'
import rasm5 from '../img/rasm5.jpg'
import rasm6 from '../img/reading-book.svg'
import rasm7 from '../img/calendar.svg'
import rasm8 from '../img/writing.svg'
import rasm9 from '../img/1.svg'
import rasm10 from '../img/2.svg'
import rasm11 from '../img/3.svg'
import Navbar from './Navbar';
import Footer from './Footer';
import { BsChevronUp,BsChevronDown } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css'; 




export default class Qabul extends Component {
    state={
        loader:true,
        selected:0
    }
    
  
    componentDidMount() {
      setInterval(()=>{
          this.setState({
              loader:false
          })
      },1000)
      Aos.init({
        duration: 2000,
      });
    }
    toggle(i) {
        if(this.state.selected==i){
          return(
            this.setState({
              selected:null
            })
          )
        }

        this.setState({
          selected:i
        })

      }
   
    render() {
      
      const data=[
        { id:1,
          question: "O'nline ro'yxatdan o'ting.",
          answer: "Yaqin kunlarda maktabimiz mana shu shaxsiy veb sahifasida online ariza topshirish bo'limi tashkil qilinadi siz farzandingizni shu sahifa orqali bizning maktabimizga masofaviy tarzda online ro'yhatdan o'tqazishingiz mumkin bo'ladi."
        },
        { id:2,
          question: "Ariza yozing.",
          answer: "Sizdan iltimos qilamiz farzandingizni maktabimizga ro'yhatdan o'tqazish uchun ariza yozayotganingizda namunani ko'zdan kechiring va arizani hech qanday kamchiliksiz yozing."
        },
        { id:3,
          question: "Arizani ko'zdan kechiring.",
          answer: "Sizdan iltimos qilamiz farzandingizni maktabimizga ro'yhatdan o'tqazish uchun yozgan arizangizni maktab ma'muriyatiga topshirishdan oldin yana bir bor ko'zdan kechirib chiqing."
        },
        { id:4,
          question: "Kerakli hujjatlarni to'plang.",
          answer: "Sizdan iltimos qilamiz farzandingizni maktabmizga ro'yhatdan o'tqazish uchun hujjat yig'ayotganingizda shu sahifaning ostida berilgan hujjatlar ro'yhati bilan tanishib chiqing va hech qanday kamchilikka yo'l qo'ymang !!!."
        },
        { id:5,
          question: "Suhbat jarayoni.",
          answer: "Bolangiz maktab psixologi tomonidan suhbatdan o'tqaziladi. Bolangizni suhbatdan oldin tayyorlang va un ruhiy dalda bering."
        },
        { id:6,
          question: "So'nggi qaror.",
          answer: "So'ngiz qaror maktabimiz ma'muriyati tomonidan qabul qilinadi."
        }
      ]

      
        return (
            <div>
               {this.state.loader ?(
                   <div className={styles.loader}>
                   <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
                   </div>
               ):(
                   <div>
                       <Navbar/>
                   <div className={styles.header}>
                   <h1>Qabul</h1>
                </div>
                <div className={styles.body}>
                   <Container style={{height:'100%'}}>
                       <Row style={{height:'100%'}}>
                       <Col lg={6} style={{backgroundColor:'#F3F3F3', height:'100%', display:'flex', justifyContent:'center', padding:'5', alignItems:'center', }}>
                              <img src={rasm1} style={{width:'100%'}}/>
                            </Col>
                            <Col lg={6} style={{backgroundColor:'#fff', height:'100%',  display:'flex', alignItems:'center'}}>
                                <div className={styles.tavsilot_text}>
                                <h1>Qabul jarayoni bo'yicha tavsilotlar</h1>
                                <p>
                                Maktabimizga qabul qilinayotgan barcha bolalar biz uchun judayam muhim. Qabul jarayoniga maktabimiz xodimlari tomonidan yetarlicha e'tibor qaratiladi. Har bir qabul qilinayotgan bolaning maktabimizda bilim ola olishi uchun maktabimiz o'qituvchilari tomonidan bilim darajasi tekshiriladi va maktabimizning malakali psixologi tomonidan har bir bolaning psixologik holati suhbat asosida tekshiriladi. Yurtimizdagi har bir bolaning bilim olishi biz uchun katta ahamiyatga ega. Shu sababli sizdan iltimos qilamiz farzandingizni bizni maktabda qabul jarayoniga keltirishdan oldin sizdan so'ralgan barcha hujjatlatlarni to'liq tarzda yig'ing va farzandingiz bu ma'suliyatli jarayondan o'ta olishi uchun unga dalda bo'ling!!!
                                </p>
                                </div>
                            </Col>
                       </Row>
                   </Container>
                </div>
                
                <div className={styles.body2}>
                 <Container style={{height:'75%'}} >
                     <Row style={{height:'100%'}}>
                         <Col lg={4} sm={12} md={6} >
                             <Row style={{height:'100%', backgroundColor:'#fff', margin:'0px 10px 0px 0px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                 <Col lg={4} className={styles.top1}><img src={rasm2}/></Col>
                                 <Col lg={8} className={styles.top2}>Ta'lim shakli</Col>
                                 <Col lg={12} className={styles.bottom}>Bizning maktabda ta'lim shakli 3 tilda olib boriladi tojik, o'zbek va rus tilida.</Col>
                             </Row>
                         </Col>
                         <Col lg={4} sm={12} md={6} >
                             <Row style={{height:'100%', backgroundColor:'#fff',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                 <Col lg={4} className={styles.top1}><img src={rasm3}/></Col>
                                 <Col lg={8} className={styles.top2}>Bitiruvchilar</Col>
                                 <Col lg={12} className={styles.bottom}>2020 - 2021 o'quv yilida maktabimizni 90 nafar o'quvchi bitirdi va ularning katta qismi oliy o'quv yurtlariga kirish imtihonlaridan katta natijalarni qo'lga kiritishdi</Col>
                             </Row>
                         </Col>
                         <Col lg={4} sm={12} md={6} >
                             <Row style={{height:'100%', backgroundColor:'#fff', margin:'0px 0px 0px 10px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                 <Col lg={4} className={styles.top1}><img src={rasm4}/></Col>
                                 <Col lg={8} className={styles.top2}>O'quvchilar</Col>
                                 <Col lg={12} className={styles.bottom}>Maktabimizda 2020 - 2021 o'quv yili hisobiga ko'ra 1365 nafar o'quvchi mavjud</Col>
                             </Row>
                         </Col>
                     </Row>
                 </Container>
                    </div>
               
               <Container>
               <div className={styles.body3}>
                  <h1 style={{color:'#1EB2A6'}}>Qabul jarayoni</h1>
                  
                <div className={styles.jarayon}>
                   {
                     data.map((item,i)=>(
                       <div className={styles.item}>
                         <div className={styles.title} onClick={()=>this.toggle(i)} style={{backgroundColor:`${this.state.selected===i? '#1EB2A6':''}`}}>
                           <h4 style={{color:`${this.state.selected===i? '#000':''}`}}>{item.id}. {item.question}</h4>
                           <span>{this.state.selected===i? <BsChevronUp color="#fff"/>:<BsChevronDown/>}</span>
                         </div>
                         <div className={styles.content} style={{display:`${this.state.selected===i? 'flex':''}`} } >{item.answer}</div>
                       </div>
                     )

                     )
                   }
                </div>
      


                
               </div>

               <div className={styles.body}>
                   <Container style={{height:'100%'}}>
                       <Row style={{height:'100%'}}>
                       
                            <Col lg={6} style={{backgroundColor:'#fff', height:'100%', display:'flex', alignItems:'center'}}>
                                <div className={styles.tavsilot_text}>
                                <h1>Imtihonda ishtirok etish talablari</h1>
                                <p>
                                Maktabimiz iqtisoslashtirilgan davlat umumta'lim maktabi bo'lganligi sababli 5-sinfdan boshlab undan yuqori barcha sinflarimizga qabul uchun har yili 1-avgust kunida O'zbekiston Respublikasi Xalq ta'limi vazirligi tomonidan maxsus test sinovlari o'tqaziladi. Shu test sinovidan yetarli natijaga erishgan o'quvchilar maktabimizga qabul qilinadi.
                                </p>
                                </div>
                            </Col>
                            <Col lg={6} style={{backgroundColor:'#F3F3F3', height:'100%', display:'flex', justifyContent:'center', padding:'5', alignItems:'center', }}>
                              <img src={rasm1} style={{width:'100%'}}/>
                            </Col>
                       </Row>
                   </Container>
                </div>
               </Container>
               
               <div className={styles.body4}>
                 <Container style={{height:'100%'}}>
                   <div className={styles.malumot}>
                         <div className={styles.info}>
                           <div className={styles.icon}> <img src={rasm6}/></div>
                           <div className={styles.text}><h3>O'quv yili</h3><p>2020-2021</p></div>
                         </div>
                         <div className={styles.info}>
                           <div className={styles.icon}> <img src={rasm8}/></div>
                           <div className={styles.text}><h3>Hujjat topshirish muddati</h3><p>1-iyundan 1-avgustgacha</p></div>
                         </div>
                         <div className={styles.info}>
                           <div className={styles.icon}> <img src={rasm7}/></div>
                           <div className={styles.text}><h3>Imtihon kuni</h3><p>29-iyul</p></div>
                         </div>
                   </div>
                 </Container>
               </div>

               <Container>
                 <div className={styles.body5}>
                 <Row style={{height:'100%', width:'100%'}}>
                       <Col lg={6} className={styles.hujjat_img}>
                             
                            </Col>
                            <Col lg={6} style={{ height:'100%',  display:'flex', alignItems:'center'}}>
                                <div className={styles.hujjat_text}>
                                <h1>Kerakli hujjatlar</h1>
                                <p>Samarqand viloyati Samarqand tumani Qo'lbai poyon MFY 33- IDUM</p>
                                <div className={styles.hujjat_list}>
                                  <img src={rasm9}/> <h5>Maktab direktori nomiga ariza.</h5>
                                </div>
                                <div className={styles.hujjat_list}>
                                  <img src={rasm10}/> <h5>Tug'ilganlik haqida guvohnoma va 3x4 o'lchamdagi 8 dona rasm. Shu bilan birga ota-onasining pasportidan nusxasi.</h5>
                                </div>
                                <div className={styles.hujjat_list}>
                                  <img src={rasm11}/> <h5>Tibbiy ko'rik natijasi.</h5>
                                </div>
                                </div>
                            </Col>
                       </Row>
                 </div>
               </Container>
                <Footer/>
                   </div>
               )}
            </div>
        )
    }
}
