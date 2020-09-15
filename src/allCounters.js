import React from 'react'
import Counter from './counter'

function AllCounters(){
    return(
        <div>
            <Counter name='total' />
            <Counter name='active' />
            <Counter name='cured' />
            <Counter name='death' />
            
        </div>
    )
} 

export default AllCounters