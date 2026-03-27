import { useState } from "react";
import "./FilterLego.css";

//Write a component that filters LegoList based off first character DONE
export default function  FilterLego(){
    const [char,setChar]=useState("");

    const myLego=[
        {
            name:"X-Wing",
            rating:2,
            pilot:"Luke Skywalker"
        },
        {
            name:"Millenium falcon",
            rating:4,
            pilot:"Han Solo"
        },
        {
            name:"Death Star",
            rating:3,
            pilot:"Emperor Palpatine"
        },
        {
            name:"Tie Fighter",
            rating:5,
            pilot:"Darth Vader"
        },
        {
            name:"Slave 1",
            rating:1,
            pilot:"Boba Fett"
        }
    ]

    //useState to initialise legoList as myLego
    const [legoList,setLegoList]=useState(myLego);

    const handleChange=function(e){
        setChar(e.target.value);
    }

     const handleSubmit=function(e){
        e.preventDefault();
        const filteredLego=myLego.filter((lego)=>(
            lego.name[0]==char
        ))
        setLegoList(filteredLego);
     }

     const resetList=function(){
        setLegoList(myLego);
        setChar("");
     }
    
    return(
        <div className="legoFilter">
            <h2>Section 4: Filter an array of lego ships by first letter</h2>
            <form action="" onSubmit={handleSubmit} className="searchLetterForm">
                <label htmlFor="startLetter">Search lego by first character: </label>
                <input type="search" onChange={handleChange} maxLength={1} value={char} />
                <button type="submit">Filter</button>
                <button type="reset" onClick={resetList}>Reset</button>
            </form>
            <ul className="legoList">
                {legoList.map((lego)=>{
                    return <li>{lego.name}</li>
                })}
            </ul>
        </div>
    )
}