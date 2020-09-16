import React, { useEffect, useState } from 'react'
import Counter from './counter'


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

    return( loading? <h1>loading</h1>:
        
        (   
        <div>
            <Counter name={data.confirmed} />
            <Counter name={data.active} />
            <Counter name={data.recovered} />
            <Counter name={data.deceased} />
            
        </div>)
    )
} 

export default AllCounters