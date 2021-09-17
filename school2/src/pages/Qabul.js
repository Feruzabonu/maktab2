import React, { Component } from 'react';
import styles from '../css/qabul.module.css';
import { Col, Container, Row, Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScaleLoader from 'react-spinners/ScaleLoader';
import rasm1 from '../img/qabul1.jpg'
import rasm2 from '../img/rasm2.png'
import rasm3 from '../img/rasm3.png'
import rasm4 from '../img/rasm4.png'
import Navbar from './Navbar';
import Footer from './Footer';

export default class Qabul extends Component {
    state={
        loader:true,
        open:false
    }
    componentDidMount() {
      setInterval(()=>{
          this.setState({
              loader:false
          })
      },1000)
    }
    toggle() {
        this.setState({
          open: !this.state.open
        });
      }
    
    render() {
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
                       <Col lg={6} style={{backgroundColor:'#F7F5F6', height:'100%', display:'flex', justifyContent:'center', padding:'5', alignItems:'center', }}>
                              <img src={rasm1} style={{width:'100%'}}/>
                            </Col>
                            <Col lg={6} style={{backgroundColor:'#fff', height:'100%'}}>
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
                  <h1>Qabul jarayoni</h1>

                  <Row style={{width:'100%', display:'flex', justifyContent:'center'}}>
                      <Col lg={10}>
                          <div className={styles.savollar}>
                          <div className={styles.savol}>
                          <Button className={styles.btn}
        onClick={() => this.toggle(!this.state.open)}
        aria-controls="example-collapse-text"
        aria-expanded={this.state.open}
        
      >
       1. Online ro'yxatdan o'ting
      </Button>
      <Collapse in={this.state.open}>
        <div id="example-collapse-text">
        Yaqin kunlarda maktabimiz mana shu shaxsiy veb sahifasida online ariza topshirish bo'limi tashkil qilinadi siz farzandingizni shu sahifa orqali bizning maktabimizga masofaviy tarzda online ro'yhatdan o'tqazishingiz mumkin bo'ladi.
        </div>
      </Collapse>
                          </div>
                          <div className={styles.savol}>
                          <Button className={styles.btn}
        onClick={() => this.toggle(!this.state.open)}
        aria-controls="example-collapse-text"
        aria-expanded={this.state.open}
      >
        click
      </Button>
      <Collapse in={this.state.open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
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
