import React from 'react'
function Dropdown({districtName,handleChange,district}){
    districtName[0] = "Select district"
    let optionItems = districtName.map((name,i) =>
            <option value={name}>{name}</option>)
    return(<div>
                
                <select 
                    onChange={handleChange} 
                    value={district} 
                    name='dp' >
                                    {optionItems} 
                </select>
                
           </div>
    )
}
export default Dropdown