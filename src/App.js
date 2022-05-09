import React from "react";
import { ReactDOM } from "react";
import Card from "./Cards";
import Sdata from "./Sdata";
import "./App.css";

function App() {
  return (
    <>
    <h1>MOVIE LIST APP</h1>
    {Sdata.map(function sCard(val){
      return (
        <Card 
    imgsrc= {val.imgsrc}
    sname= {val.sname}
    title= {val.title}
    link= {val.link}/>
      );
    })}    
    </>
  );
}

export default App;
