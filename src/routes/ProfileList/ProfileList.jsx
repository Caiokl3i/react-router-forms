import React from 'react'
import styles from './ProfileList.module.css'
import { useLocation } from 'react-router-dom'

export const ProfileList = () => {
    const location = useLocation()
    const {name, age, email} = location.state || {}

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h1>{name}</h1>

                <p>Idade: {age}</p>
                <p>email: {email}</p>
            </div>
            
        </div>
    )
}
