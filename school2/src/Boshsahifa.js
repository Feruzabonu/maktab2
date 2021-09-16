import React, { Component } from 'react'
import styles from './boshsahifa.module.css'
import Navbar from './Navbar'
export default class Boshsahifa extends Component {
    render() {
        return (
            <div>
                <div className={styles.header}>
                   <Navbar/>
                </div>
            </div>
        )
    }
}
