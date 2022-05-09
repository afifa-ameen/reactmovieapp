import React from "react";
import ReactDOM from "react-dom";
import Sdata from "./Sdata.js";

function Card(props) {
  return(
<>
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="myPic" className="card__img" />
        <div className="card__info">
          <span className="card__category">{props.sname}</span>
          <h3 className="card__title">{props.title}</h3>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Card;