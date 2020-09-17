import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import component from './component.css'

const CardComponent = ({ className, cardTitle,value }) => (
    <Grid item xs={12} md={3} component={Card} >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant="h5" component="h2">
          {value}
        </Typography>
      </CardContent>
    </Grid>
  );
  
export default CardComponent;