import CharacterCard from "./CharacterCard";

export default function CharacterCardGallery({characters,pageNum}){
    
    return(
        <div className="cardGallery">
            {characters.map((character)=>{
                return <CharacterCard name={character.name} pageNum={pageNum}/>
            })}
        </div>
    )
}