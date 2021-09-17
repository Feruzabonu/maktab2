import React, { Component } from 'react';
import styles from '../css/qabul.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import rasm1 from '../img/qabul1.jpg'

export default class Qabul extends Component {
    render() {
        return (
            <div>
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
                    <Container>
                        <div className={styles.body2_info}>
                              <div className={styles.top}>
                                  <div></div>
                                  <div></div>
                              </div>
                              <div className={styles.bottom}></div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}
