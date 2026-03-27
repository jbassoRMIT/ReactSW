
import "./FavLego.css";
import { IoStarOutline } from "react-icons/io5";


export default function FavLego(){
    const bestLego=[
        {
            name:"X-Wing",
            rating:2
        },
        {
            name:"Millenium falcon",
            rating:4
        },
        {
            name:"Death Star",
            rating:3
        },
        {
            name:"Tie Fighter",
            rating:5
        },
        {
            name:"Slave 1",
            rating:1
        }
    ]

    //write a function that converts int into int*"*" string
    const convertStar=function(rating){
        let array=[];
        for(let i=0;i<rating;i++){
            array.push(i)
        }
        return array.map((starRating)=>{
            return <IoStarOutline/>;
        })
    }
    
    return(
        <div className="favLego">
            <h2>Section 2: A table display of my favourite Star Wars Lego sets</h2>
            <table className="favLegoTable">
                <tr>
                    <th>Lego name</th>
                    <th>Star rating</th>
                </tr>
                {bestLego.map((lego)=>{
                    return (
                    <tr>
                        <td>{lego.name}</td>
                        <td>{convertStar(lego.rating)}</td>
                    </tr>
                    )
                })}
            </table>
        </div>
    )
}