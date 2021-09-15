import React, { Component } from 'react'
import styles from './navbar.module.css'
import {MenuOutlined} from '@ant-design/icons'
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
                <div className={styles.navbarDiv}>
                    <div className={styles.navbar}>
                        <ul style={{listStyleType:'none'}}>
                            <li>Bosh sahifa</li>
                            <li>Maktab hayoti</li>
                            <li>Qabul</li>
                            <li>Yangiliklar</li>
                            <li>Maktab ma'muriyati</li>
                            <li>Maktab a'lochilari</li>
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
