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
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import ScaleLoader from 'react-spinners/ScaleLoader';

export default class Maktabmamuriyati extends Component {
  state={
     loader:true
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
                lavozim:"O'quv va tarbiyaviy ishlar bo'yicha direktor o'rinbosari",
                FIO:'Xusenova Maryam Hakimovna',
                mutaxasisligi:"Tojik tili va adabiyoti o'qituvchisi",
                tel:'+998937279465',
                qoshimcha:"2-toifali mutaxasis 1990-yildan beri maktabda fidokorona faoliyat olib bormoqda"
            },
            {   id:3,
                rasm:rasm2,
                lavozim:"Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari",
                FIO:'Tosheva Gavhar Umarovna',
                mutaxasisligi:"Tojik tili va adabiyoti o'qituvchisi",
                tel:'+998933320040',
                qoshimcha:"2-toifali mutaxasis 1990-yildan beri maktabda fidokorona faoliyat olib bormoqda"
            },
            {   id:4,
                rasm:rasm1,
                lavozim:"Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari",
                FIO:'Xakimova Nilufar Olimjonovna',
                mutaxasisligi:"Iqtisodchi",
                tel:'+998942870072',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            },
            {   id:5,
                rasm:rasm2,
                lavozim:'Maktab amaliyotchi psixologi',
                FIO:'Soleeva Muxayyo Isroilovna',
                mutaxasisligi:"Tojik tili va adabiyoti o'qituvchisi",
                tel:'+998933354966',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            },
            {   id:6,
                rasm:rasm1,
                lavozim:'Maktab amaliyotchi psixologi',
                FIO:"Jo'raqulova Sharofat Salomovna",
                mutaxasisligi:"Tojik tili va adabiyoti o'qituvchisi",
                tel:'+998936804409',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            },
            {   id:7,
                rasm:rasm2,
                lavozim:"Boshlang'ich tashkilot yoshlar yetakchisi",
                FIO:'Ibragimova Zuxro Farxodovna',
                mutaxasisligi:"Boshlang'ich sinf o'qituvchisi,tarbiyaviy ishlar katta yetakchisi",
                tel:'+998933337882',
                qoshimcha:"Xalq ta'limi a'lochisi I -toifali mutaxasis"
            }
        ]
        return (
          
            <div>
              {
                this.state.loader ?(
                  <div className={styles.loader}>
                  <ScaleLoader color="#1EB2A6" loading={this.state.loader} size={120} />
                  </div>
              ):(
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
        <MDBCard data-aos="flip-right" className='h-100' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height:'560px', marginBottom:'30px'}} className={styles.card}>
          <MDBCardImage
            src={item.rasm}
            alt='...'
            position='top'
            // style={{width:'415px', height:'300px'}}
          />
          <MDBCardBody style={{textAlign:'center', padding:'20px 20px', display:'flex', flexDirection:'column', justifyContent:'center'}} className={styles.card_body}>
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
               
            </div>
        )
    }
}
