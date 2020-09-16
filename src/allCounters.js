import React,{ useEffect, useState } from 'react'
import Counter from './counter'
import styles from './allCounter.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup';


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
                var temporatyData;
                if( cData.hasOwnProperty(district) ) {
                    temporatyData = cData[district];
                    setData(temporatyData);
                       
                }
                

             })
    },[]) 
    
    return( 
        loading? <h1>loading...</h1>:
        
        (  
             
        
        <div className="allCount">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h6">{data.confirmed}</Typography>
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