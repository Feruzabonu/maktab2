import React, { Component } from 'react'
import styles from '../css/navbar.module.css'
import {BrowserRouter, Link} from 'react-router-dom'
import {MenuOutlined} from '@ant-design/icons'
import {BsClock} from 'react-icons/bs'
import {FiPhone} from 'react-icons/fi'
import {FaFacebookF,FaInstagram,FaTelegramPlane,FaYoutube} from 'react-icons/fa'
export default class Navbar extends Component {
    state={
        visible:false
    }
    openNavbar=()=>{
        this.state.visible?this.setState({visible:false}):this.setState({visible:true})
    }
    render() {
        return (
            <div>
                
                <div className={styles.top}>
                    <div className={styles.name}>
                        <h1 style={{color:'white'}}>258-maktab</h1>
                        <p style={{color:'white'}}>Ixtisoslashtirilgan xususiy maktab</p>
                    </div>
                    <div className={styles.info}>
                     <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:'30px'}}>
                         <div><BsClock style={{fontSize:'35px',color:'white'}}/></div>
                         <div style={{marginLeft:'10px'}}>
                             <p style={{fontSize:'17px',color:'white',marginTop:'10px'}}>Dushanba-juma</p>
                             <p style={{fontSize:'18px',color:'white',fontWeight:'600',marginTop:'-12px'}}>8:00 dan 20:00 gacha</p>
                         </div>
                     </div>
                     <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginRight:'50px'}}>
                         <div><FiPhone style={{fontSize:'35px',color:'white'}}/></div>
                         <div style={{marginLeft:'10px'}}>
                             <p style={{fontSize:'17px',color:'white',marginTop:'10px'}}>Qo'ng'iroq qiling</p>
                             <p style={{fontSize:'18px',color:'white',fontWeight:'600',marginTop:'-12px'}}>+2 392 3929 210</p>
                         </div>
                     </div>
                    </div>
                    <div className={styles.socialMedia}>
                    <div className={styles.icons} style={{curspor:'pointer',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'rgba(255,255,255,0.35)',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'5px'}}>
                         <FaFacebookF style={{color:'#1EB2A6'}}/>
                     </div>
                     <div className={styles.icons}  style={{ curspor:'pointer',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'rgba(255,255,255,0.35)',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'5px'}}>
                         <FaInstagram style={{color:'#1EB2A6'}}/>
                     </div>
                     <div className={styles.icons}  style={{curspor:'pointer',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'rgba(255,255,255,0.35)',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'5px'}}>
                         <FaTelegramPlane style={{color:'#1EB2A6'}}/>
                     </div>
                     <div className={styles.icons}  style={{curspor:'pointer',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'rgba(255,255,255,0.35)',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'5px'}}>
                         <FaYoutube style={{color:'#1EB2A6'}}/>
                     </div>
                    </div>
                </div>
                <div className={styles.navbarDiv}>                    
                    <div className={styles.navbar}>
                        <ul style={{listStyleType:'none'}}>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/home">Bosh sahifa</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabhayoti">Maktab hayoti</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/qabul">Qabul</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/yangiliklar">Yangiliklar</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabmamuriyati">Maktab ma'muriyati</Link></li>
                            <li><Link className={styles.navLink} style={{textDecoration:'none',color:'white'}} to="/maktabalochilari">Maktab a'lochilari</Link></li>
                        </ul>
                    </div>
                    <div className={styles.rightNavbar}>
                        258-maktab
                    </div>
                </div>
                <div style={{position:'absolute',top:'15%',width:'100%'}}>
                <div className={styles.mobileNavbar}>
                <div className={styles.rightNavbar}>
                        258-maktab
                    </div>
                    <div className={styles.openHamburger}>
                    <MenuOutlined onClick={()=>this.openNavbar()} style={{color:'white',marginRight:'10px',fontSize:'25px',cursor:'pointer'}}/>
                    </div>
                </div>
                <div  className={this.state.visible? styles.navMobile:styles.noNav}>
                    <ul style={{listStyleType:'none'}}>
                            <li>Bosh sahifa</li>
                            <li>Maktab hayoti</li>
                            <li>Qabul</li>
                            <li>Yangiliklar</li>
                            <li>Maktab ma'muriyati</li>
                            <li>Maktab a'lochilari</li>
                        </ul>
                    </div>
                </div>
               
            </div>
        )
    }
}
