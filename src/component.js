import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './component.module.css'
import cx from 'classnames'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 15,
  boxShadow: '3px 5px 7px 0px rgba(255, 105, 135, .3),-3px -3px 7px 0px rgba(255, 255, 255, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});
const Mycard = styled(Card)({
  background: 'linear-gradient(45deg, #fff )',
  border: 0,
  borderRadius: 10,
  boxShadow: '12px 12px 24px 0px rgba(255, 105, 135, .3), -8px -8px 20px 0px #e6e6e6',
  color: 'black',
  
});
const CardComponent = ({ className, cardTitle, value }) => (
    <Grid item xs={12} md={2} component={Mycard} className={cx(styles.Card,className)} style={{ backgroundColor : '#fff'}}>
      
       


      <MyButton>{cardTitle}</MyButton>
      <CardContent className={styles.content}>
      
        <Typography color="textPrimary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2" style={{ fontWeight:550 }}>
          {value}
        </Typography>
      </CardContent>
      
    </Grid>
  );

export default CardComponent;