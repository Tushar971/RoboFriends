import React from "react";
import Card from "./Cards";

const CardLists = ({robots}) => {
    const cardComponent = [];
    for(var i = 0; i < robots.length; i++) {
        cardComponent.push(<Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                            />
        );
    }
    return (
        <div className="mw-100">
            {cardComponent}
        </div>
    );
}
export default CardLists;


// const cardComponent = robots.map((user, i) => {
//     return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;
// });