import React, { Component } from 'react'
import styles from '../css/boshsahifa.module.css'
import Navbar from './Navbar'
import Footer from './Footer'
export default class Boshsahifa extends Component {
    render() {
        return (
            <div>
                <div className={styles.header}>
                   <div className={styles.heading}>
                       <p>Xush kelibsiz!</p>
                       <p>Biz haqimizdagi ma'lumotlarni va so'nngi yangiliklarni shu yerdan kuzatib borishingiz mumkin</p>
                   </div>
                </div>
               
            </div>
        )
    }
}
