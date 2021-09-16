import React, { Component } from 'react'
import styles from '../css/boshsahifa.module.css'
import Navbar from './Navbar'
import Footer from './Footer'
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
