import React,{ useState,useEffect } from "react";
import "./CharacterCard.css"

export default function CharacterCard({name}){
    const [character,setCharacter]=useState([]);
    const [starship,setStarship]=useState({});
    
    
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?search=${name}`)
          .then((res) => res.json())
          .then((data) => {
            setCharacter(data.results[0]);
            console.log(`character is ${character.name}`);
        })
          .catch((err) => console.error("Error:", err));
      }, [name]);

    useEffect(() => {
    if(character.starships){
        fetch(`${character.starships[0]}`)
            .then((res) => res.json())
            .then((data) => {
                setStarship(data);
            })
            .catch((err) => console.error("Error:", err));
        }
    }, [character])
        

    // console.log(starship.name);
      

    // console.log(character);
    
    return(
        <div className="characterCard">
            <h3>{character.name}</h3>
            <ul>
                <li>height: {character.height}</li>
                <li>skin color: {character.skin_color}</li>
                <li>eye color: {character.eye_color}</li>
                <li>mass: {character.mass}</li>
                {((character.starships) && (character.starships.length>0))?(
                    <li>{character.name} has a ship - {starship.name}</li>
                ):(
                    <li>{character.name} has no ship</li>
                )}
            </ul>
        </div>
    )
}