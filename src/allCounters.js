import React,{ useEffect, useState } from 'react'
import Counter from './counter'
import styles from './allCounter.css'
import { Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import CardComponent from './component'
import Container from 'react-bootstrap/Container'
import Dropdown from './dropdown';

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
                var temporaryData;
                if( cData.hasOwnProperty(district) ) {
                    temporaryData = cData[district];
                    setData(temporaryData);  
                } 
             })
    },[district]) 

    function handleChange(e){
      const {value} = e.target
      setDistrict(value)
      
    }

    return( loading? <h1>loading...</h1>:(
        <Container fluid className="countup" >
         
         <Dropdown districtName={ddData} handleChange={handleChange} district={district} />
            <div className="allCount">
                <Grid container spacing={3} justify="center" className="container">
                    <CardComponent 
                        className="infected"
                        cardTitle="Infected"
                        value={data.confirmed}
                    />
                    <CardComponent 
                        className="active"
                        cardTitle="Active"
                        value={data.active}
                    />
                    <CardComponent 
                        className="death"
                        cardTitle="Deceased"
                        value={data.deceased}
                    />
                    <CardComponent 
                        className="recovered"
                        cardTitle="Recovered"
                        value={data.recovered}
                    />

                </Grid>
            </div>
        </Container>
            )
    )
} 



   

export default AllCounters