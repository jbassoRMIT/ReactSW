import "./Form.css"

export default function Form({bgColor,name,favColor,handleChange,handleSubmit,resetFields,submitted}){
    
    
    return(
        <div className="colorForm" style={{backgroundColor:bgColor}}>
            <h2>Section 1: Demo showcasing basic background color picker and greeting message</h2>
            <form onSubmit={handleSubmit} action="" className="colorForm">
                <label htmlFor="name">What's your name? </label>
                <input type="text" name="name" id="name" value={name} onChange={handleChange} /><br />
                <label htmlFor="favColor">Pick your favourite color: </label>
                <input type="color" name="favColor" id="favColor" value={favColor} onChange={handleChange}/><br />
                <button type='submit'>Enter</button>
                <button onClick={resetFields}>Reset</button>
            </form>
            {submitted? <p className='greeting'>Hello {name} </p>:null}
        </div>
    )
}