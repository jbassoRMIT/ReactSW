import { useState } from "react"

export default function ChoosePageForm({handleChange,pageNum}){
    
    
    return(
        <div>
            <h2>Choose which page you want to select 10 characters from</h2><br />
            <label htmlFor="pageNumber">Page: </label>
            <input type="number" id="pageNumber" name="pageNumber" onChange={handleChange} min={1} max={9} value={pageNum}/>
        </div>
    )
}