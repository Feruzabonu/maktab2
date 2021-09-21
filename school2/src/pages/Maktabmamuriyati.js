import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/maktabmamuriyati.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import rasm1 from '../img/mamuriyat1.webp'
import rasm2 from '../img/mamuriyat2.webp'
import rasm3 from '../img/mamuriyat3.webp'

export default class Maktabmamuriyati extends Component {
    render() {
        const data=[
            {   id:1,
                rasm:rasm2,
                lavozim:'Maktab Direktori',
                FIO:'Ravshanova Mamlakat Sulaymonovna',
                mutaxasisligi:"Rus tili filologiya o'qituvchi",
                tel:'+998906056115',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            },
            {   id:2,
                rasm:rasm1,
                lavozim:'Maktab Direktori',
                FIO:'Ravshanova Mamlakat Sulaymonovna',
                mutaxasisligi:"Rus tili filologiya o'qituvchi",
                tel:'+998906056115',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            },
            {   id:3,
                rasm:rasm2,
                lavozim:'Maktab Direktori',
                FIO:'Ravshanova Mamlakat Sulaymonovna',
                mutaxasisligi:"Rus tili filologiya o'qituvchi",
                tel:'+998906056115',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            },
            {   id:4,
                rasm:rasm1,
                lavozim:'Maktab Direktori',
                FIO:'Ravshanova Mamlakat Sulaymonovna',
                mutaxasisligi:"Rus tili filologiya o'qituvchi",
                tel:'+998906056115',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            },
            {   id:5,
                rasm:rasm2,
                lavozim:'Maktab Direktori',
                FIO:'Ravshanova Mamlakat Sulaymonovna',
                mutaxasisligi:"Rus tili filologiya o'qituvchi",
                tel:'+998906056115',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            },
            {   id:6,
                rasm:rasm1,
                lavozim:'Maktab Direktori',
                FIO:'Ravshanova Mamlakat Sulaymonovna',
                mutaxasisligi:"Rus tili filologiya o'qituvchi",
                tel:'+998906056115',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            },
            {   id:7,
                rasm:rasm2,
                lavozim:'Maktab Direktori',
                FIO:'Ravshanova Mamlakat Sulaymonovna',
                mutaxasisligi:"Rus tili filologiya o'qituvchi",
                tel:'+998906056115',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            }
        ]
        return (
            <div>
               <Navbar/>
               <div className={styles.header}>
                   <h1> Maktab ma'muriyati.</h1>
               </div>
               <Container>
                   <div className={styles.body}>
                     

                        
                   <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                   {
                       data && Array.isArray(data)?data.map((item,key)=>{
                         return(
      <MDBCol>
        <MDBCard className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'560px', marginBottom:'30px'}} className={styles.card}>
          <MDBCardImage
            src={item.rasm}
            alt='...'
            position='top'
            // style={{width:'415px', height:'300px'}}
          />
          <MDBCardBody style={{textAlign:'center', padding:'30px 30px'}} className={styles.card_body}>
            <MDBCardTitle>{item.FIO}</MDBCardTitle>
            <MDBCardText style={{fontSize:'18px', fontWeight:'500'}}>
              {item.lavozim}
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter style={{backgroundColor:'#fff', padding:'30px 30px', borderTopColor:'#1EB2A6'}}>
            <small className='text-muted' style={{fontSize:'16px'}}>
              <b style={{color:'#1EB2A6'}}>Mutaxasisligi: </b>{item.mutaxasisligi}<br/>
              <b style={{color:'#1EB2A6'}}>Telefon raqami: </b>{item.tel}<br/>
              <b style={{color:'#1EB2A6'}}>Qo'shimcha: </b> {item.qoshimcha}<br/>
            </small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      )
                       }):''
                     }
   
    </MDBRow>
                   </div>
               </Container>
               <Footer/>
            </div>
        )
    }
}
