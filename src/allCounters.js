import React,{ useEffect, useState } from 'react'
import Counter from './counter'
import styles from './allCounter.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import Dropdown from './dropdown'


function AllCounters(){


    const [data,setData] = useState({})
    const [loading,setLoading] = useState(true)
    const [district,setDistrict] = useState('Durg')

    useEffect(() => {
        fetch('https://api.covid19india.org/state_district_wise.json')
        .then(response => response.json())
        .then(coronaData => {
                const cData = coronaData.Chhattisgarh.districtData
                setLoading(false)
                const dropdownData = cData.map((items) =>{
                    return items
                } )
                console.log(dropdownData)
                var temporaryData;
                if( cData.hasOwnProperty(district) ) {
                    temporaryData = cData[district];
                    setData(temporaryData);  
                }
                

             })
    },[]) 
    var x;
    if(loading===true){
        console.log('star')
    }
                           
    return( 
        loading? <h1>loading...</h1>:
        
        (  
             
        
        <div className="allCount">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h6">
                            <CountUp start={0} end={x} duration={2} />
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                        <Typography variant="h6">{data.active}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Cured</Typography>
                        <Typography variant="h6">{data.recovered}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h6">{data.deceased}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
        )
    )
} 



   

export default AllCounters