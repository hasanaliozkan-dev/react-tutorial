import React from "react";
import profilepicture from "../assets/pp.jpeg";

export default function Card() {

    return(
       <card>
        <div className="image--div"></div>
        <div className="card--content">
            <h1 className="content--heading">Hasan Ali OZKAN</h1>
            <p className="content--text">Data Scientist</p>
            <p className="content--text2">WAPS.com.tr</p>
            <button className="email">Email</button>
        </div>
       </card>
    )
}