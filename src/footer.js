import React from 'react'
import styles from './footer.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'



function Footer(){
    return(
        <Container fluid className={styles.foot}>
            <p className={styles.fotext}>© Copyright 2020</p>
            
        </Container>
        
            
        )
} 

export default Footer