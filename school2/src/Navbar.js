import React, { Component } from 'react'
import styles from './navbar.module.css'
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
                <div className={styles.mobileNavbar}>
                <div className={styles.rightNavbar}>
                        258-maktab
                    </div>
                    <div className={styles.openHamburger}>
                        {/* <GiHamburgerMenu onClick={()=>openNavbar()} styles={{fontSize:'20px',cursor:'pointer',color:'white'}}/> */}
                    </div>
                   
                </div>
            </div>
        )
    }
}
