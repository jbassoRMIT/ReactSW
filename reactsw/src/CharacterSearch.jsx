import "./CharacterSearch.css";

export default function CharacterSearch({handleInputChange}){
    return(
        <div className="characterSearch">
            <h2>Section 3: Search for a character by name</h2>
            <input type="text" onChange={handleInputChange} className="characterSearchBox"/>
        </div>
    )
}