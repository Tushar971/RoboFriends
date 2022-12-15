import React from "react";
const Card = (props) => {
    const {id, name, email} = props;
    return (
        <div className="tc bg-light-green dib ma3 pa2 br3 grow shadow-5 bw2">
            <img alt="John" src={`https://robohash.org/${id}?200×200`}></img>
            <h1 className="card">{name}</h1>
            <p>{email}</p>
        </div>
    );
}

export default Card;