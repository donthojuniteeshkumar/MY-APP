import React, { useState, useEffect } from "react";

const User = (props) => {
    const [planet, setPlanet] = useState("earth");
  
    // componentDidMount
    useEffect(() => {
    // heavy computation
        console.log("component mounting");

    // componentWillUnmount    
        return console.log("bye bye");
    }, []);
    
    // componentDidUpdate
    // ShouldComponentUpdate
    useEffect(() => {
        console.log("Planet Changes");
    }, [planet]);

        return ( 
        <div>
           <h1> {props.name} </h1>
           <p> {props.description} </p>
           <button onClick={() => setPlanet("pluto")}>{planet}</button>
        </div>
    );
 };

export default User;