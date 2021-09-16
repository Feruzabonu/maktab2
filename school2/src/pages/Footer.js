import React, { Component } from 'react';
import styles from '../css/Footer.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className={styles.footer}>
                     <Container>
                         <Row>
                             <Col xs={12} sm={12} md={6} lg={3}>
                                 <div className={styles.one}>
                                    <h2>258-maktab</h2>
                                    <p>Ixtisoslashtirilgan xususiy maktab</p>
                                    <p>Sifatli bilim va yuqori natijalarga bizning maktab bilan erishishingiz mumkin!</p>
                                    <ul className={styles.social_media}>
                                        <li><a href='#'><FaTwitter/></a></li>
                                        <li><a href='#'><CgFacebook/></a></li>
                                        <li><a href='#'><FaInstagram/></a></li>
                                    </ul>
                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.two}>

                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.three}>

                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={3}>
                                 <div className={styles.four}>

                                 </div>
                             </Col>
                             <Col xs={12} sm={12} md={6} lg={2}>
                                 <div className={styles.five}>

                                 </div>
                             </Col>
                         </Row>
                     </Container>
                </div>
            </div>
        )
    }
}
