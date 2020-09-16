import React from 'react'
import Counter from './counter'
import styles from './allCounter.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

const allC =({ confirmed, recovered, deaths }) =>{
    return(
        <div class="allCount">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h6">confirmedvalue</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Active</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Cured</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
} 

export default allC