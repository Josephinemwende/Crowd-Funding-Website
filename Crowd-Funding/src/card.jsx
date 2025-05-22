import {useState} from 'react';
function daysLeft(){
    const[daysLeft, setDaysLeft] = useState(0);
}
function Card( {title, pledge, button, content, days}){
    return(
        <>
            <div>
                <h1>{title}</h1>
                <h3>{pledge}</h3>
            </div>
            <p>{content}</p>
            <div>
                <p>{days}</p>
                <button>{button}</button>
            </div>
        </>
    );
}
export default Card;