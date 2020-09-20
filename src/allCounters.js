import React,{ useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Counter from './counter'
import styles  from './allCounters.module.css'
import { Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import CardComponent from './component'
import Container from 'react-bootstrap/Container'
import Dropdown from './dropdown'
import cx from 'classnames'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function AllCounters(){


    const [data,setData] = useState({})
    const [loading,setLoading] = useState(true)
    const [district,setDistrict] = useState('Durg')
    const [ddData, setDdData] = useState([])

    useEffect(() => {
        fetch('https://api.covid19india.org/state_district_wise.json')
        .then(response => response.json())
        .then(coronaData => {
                const cData = coronaData.Chhattisgarh.districtData
                setLoading(false)
                const dropdownData = Object.keys(cData)
                
                setDdData(dropdownData)
                                   
                
            
                
                var temporatyData;
                if( cData.hasOwnProperty(district) ) {
                    temporatyData = cData[district];
                    setData(temporatyData);
                       
                }
                

             })
    },[district]) 
    
    function handleChange(e){
        const {value} = e.target
        setDistrict(value)
    }
    
    return( loading? <h1>loading...</h1>:(
        <Container fluid className={styles.countup} >
            <Dropdown districtName={ddData} handleChange={handleChange} district={district} />
         
             
        
            <div className={styles.allCount}>
                <Grid container spacing={4} justify="center" className={styles.cont}>
                    <CardComponent 
                        className={styles.infected}
                        cardTitle="Infected"
                        value={data.confirmed}
                    />
                    <CardComponent 
                        className={styles.active}
                        cardTitle="Active"
                        value={data.active}
                    />
                    <CardComponent 
                        className={styles.recovered}
                        cardTitle="Recovered"
                        value={data.recovered}
                    />
                    <CardComponent 
                        className={styles.deceased}
                        cardTitle="Deceased"
                        value={data.deceased}
                    />
                    

                </Grid>
                
            </div>
        </Container>
            )
    )
} 



   

export default AllCounters