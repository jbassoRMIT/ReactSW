//TODO: transfer all files from desktop version of react app
import './App.css';
import { useState,useEffect } from 'react'
import Form from './Form'
import FavLego from './FavLego'
import CharacterCard from './CharacterCard'
import CharacterSearch from './CharacterSearch'
import FilterLego from './FilterLego'

function App() {
  const [formInputs,setFormInputs]=useState({
    name:"",
    favColor:"#000000"
  })

  const [pageNum,setPageNum]=useState(1);
  const [character,setCharacter]=useState("");
  const [bgColor,setBgColor]=useState(null);

  const handlePageChange=function(e){
      // const name=e.target.name;
      const value=e.target.value;
      setPageNum(value);
  }

  // const handlePageSubmit=function(e){
  //     e.preventDefault();
  //     console.log(pageNum);
  //     // setPageNumSubmitted(true);
  // }

  const [submitted, setSubmitted]=useState(false);
  // const [pageNumSubmitted,setPageNumSubmitted]=useState(false);

  const [characters,setCharacters]=useState([]);

  const handleChange=function(e){
    const {name,value}=e.target;
    setFormInputs(values=>({...values,[name]:value}));
  }

  const handleSubmit=function(e){
    e.preventDefault();
    setSubmitted(true);
    setBgColor(formInputs.favColor);
    // console.log(formInputs);
  }

  const resetFields=(e)=>{
    e.preventDefault();
    setFormInputs({
      name:"",
      favColor:"#ffffff"
    });
    setBgColor("#ffffff");
    setSubmitted((prevSubmitted)=>(!prevSubmitted));
    console.log(submitted)
  }

  useEffect(() => {
      fetch(`https://swapi.dev/api/people/?page=${pageNum}`)
        .then((res) => res.json())
        .then((data) => {
          setCharacters(data.results)
          console.log(characters);
          console.log("characters useEffect running");
          console.log(`page num is: ${pageNum}`);
        })
        .catch((err) => console.error("Error:", err));
    }, [pageNum]);

    const handleInputChange=function(e){
      setCharacter(e.target.value);
      console.log(character);
    }

    

  

  return (
    <div className='body'>
      <div className='header'>
        <h1>My first react page</h1>
      </div>
      <Form bgColor={bgColor} name={formInputs.name} favColor={formInputs.favColor} handleChange={handleChange} handleSubmit={handleSubmit} resetFields={resetFields} submitted={submitted}/>
      {/* <Greeting name={"John"} /> */}
      <FavLego/>
      {/* <ChoosePageForm handleChange={handlePageChange} pageNum={pageNum}/>
      <CharacterCardGallery characters={characters} pageNum={pageNum}/> */}
      <div className='characterSearchBlock'>
        <CharacterSearch handleInputChange={handleInputChange}/>
        <CharacterCard name={character}/>
      </div>
      <FilterLego/>
    </div>
  )
}

export default App;

