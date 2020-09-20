import React,{useState, useEffect} from 'react'
import Allcounters from './allCounters'
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './dropdown.module.css'

function Dropdown({districtName,handleChange,district}){
    districtName[0]="Select District"
    
    let optionItems = districtName.map((name,i) =>
            <option value={name}>{name}</option>)
    return(
            <FormControl className={styles.formControl}>
                <NativeSelect onChange={handleChange} value={district} >
                    {optionItems}
                </NativeSelect>
            </FormControl>
    )
}

export default Dropdown
