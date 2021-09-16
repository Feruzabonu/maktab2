import React, { Component } from 'react';
import styles from '../css/Footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaMap, FaTelegramPlane } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { RiTwitterFill } from 'react-icons/ri';
import { GrLinkNext } from 'react-icons/gr';
import { BiCalendar} from 'react-icons/bi';
import { MdLocalPhone} from 'react-icons/md';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className={styles.footer}>
                     <Container>
                         <Row>
                             <Col xs={12} sm={12} md={6} lg={3}>
                                 <div className={styles.one}>
                                    <h2>258-maktab</h2>
                                    <p style={{textTransform:'uppercase', fontSize:'13px', fontWeight:'600', color:'#1EB2A6'}}>Ixtisoslashtirilgan xususiy maktab</p>
                                    <p style={{color:'#999999', fontSize:'18px'}}>Sifatli bilim va yuqori natijalarga bizning maktab bilan erishishingiz mumkin!</p>
                                    <ul className={styles.social_media}>
                                        <li><div><a href='#'><RiTwitterFill/></a></div></li>
                                        <li><div><a href='#'><CgFacebook/></a></div></li>
                                        <li><div><a href='#'><FaInstagram/></a></div></li>
                                    </ul>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.two}>
                                     <h5>Asosiy Sahifalar</h5>
                                     <ul className={styles.pages}>
                                        <li><a href='#'><GrLinkNext/>Bosh sahifa</a></li>
                                        <li><a href='#'><GrLinkNext/>Maktab hayoti</a></li>
                                        <li><a href='#'><GrLinkNext/>Qabul</a></li>
                                        <li><a href='#'><GrLinkNext/>Yangiliklar</a></li>
                                        <li><a href='#'><GrLinkNext/>Maktab ma'muriyati</a></li>
                                        <li><a href='#'><GrLinkNext/>Maktab a'lochilari</a></li>
                                     </ul>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.three}>
                                 <h5>Qo'shimcha Sahifalar</h5>
                                     <ul className={styles.pages}>
                                        <li><a href='#'><GrLinkNext/>Tadbirlar</a></li>
                                        <li><a href='#'><GrLinkNext/>Hamkorlar</a></li>
                                        <li><a href='#'><GrLinkNext/>Aloqa</a></li>
                                     </ul>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={3}>
                                 <div className={styles.four}>
                                 <h5>So'ngi yangiliklar</h5>
                                 <div className={styles.new}>
                                     <div className={styles.new_img}><img src='https://picsum.photos/50'/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div><a href='#'><BiCalendar/>Jan. 18,2021</a></div>
                                             <p>Maktabimizda yangi o'quv yili uchun qabul boshlandi.</p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={styles.new}>
                                     <div className={styles.new_img}><img src='https://picsum.photos/50'/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div><a href='#'><BiCalendar/>Jan. 18,2021</a></div>
                                             <p>Maktabimizda yangi o'quv yili uchun qabul boshlandi.</p>
                                         </div>
                                     </div>
                                 </div>
                                 <div className={styles.new}>
                                     <div className={styles.new_img}><img src='https://picsum.photos/50'/></div>
                                     <div className={styles.new_text}>
                                         <div className={styles.meta}>
                                             <div><a href='#'><BiCalendar/>Jan. 18,2021</a></div>
                                             <p>Maktabimizda yangi o'quv yili uchun qabul boshlandi.</p>
                                         </div>
                                     </div>
                                 </div>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.five}>
                                    <h5>Savollaringiz mavjudmi ?</h5>
                                    <div>
                                        <ul>
                                            <li><span><FaMap/></span><span>Toshkent shahar, Yunusobod tumani</span></li>
                                            <li><span><MdLocalPhone/></span><span>+99893 555 55 55</span></li>
                                            <li><span><FaTelegramPlane/></span><span>maktab235@gmail.com</span></li>
                                        </ul>
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
