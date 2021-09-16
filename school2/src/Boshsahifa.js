import React, { Component } from 'react'
import styles from './boshsahifa.module.css'
import Navbar from './Navbar'
import Footer from './pages/Footer'
export default class Boshsahifa extends Component {
    render() {
        return (
            <div>
                <div className={styles.header}>
                   <Navbar/>
                </div>
                <Footer/>
            </div>
        )
    }
}
