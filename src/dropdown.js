import React from 'react'
function Dropdown({districtName}){
    let optionItems = districtName.map((name,i) =>
            <option value={name}>{name}</option>)
    return(<div>
                <h1>
                <select>
                {optionItems}
                 </select>
                </h1>
           </div>
    )
}
export default Dropdown