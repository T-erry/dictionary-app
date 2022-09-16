import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

function Meaning(props){
    console.log(props.meaning);
    return(
        <div className="Meaning">
             <h3>{props.meaning.partOfSpeech}</h3> 
            {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}>
                      <div className="definition"> {definition.definition}</div>
                      
                         <div className="example">{definition.example}</div>  
                         
                      </div>
                );
            })}
            < Synonyms synonyms={props.meaning.synonyms}/>
        </div>
    );
}
export default Meaning;