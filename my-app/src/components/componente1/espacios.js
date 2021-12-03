import React, { useEffect, useState } from "react";
import EspacioCard from "./espacioCard/espacioCard";
import "./espacios.css";

function Espacios() {
    const [espacios, setEspacios] = useState([]);
    useEffect(() => {
        fetch(
            "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json",
            {
                method: "GET",
            }
            ).then((response) => {
                return response.json();
            }).then((data) => {
                let espaciosU = [];
                data.forEach(element => {
                    espaciosU.push(element);
                });
                console.log(espaciosU);
                setEspacios(espaciosU);
            }).catch((e) => console.warn(e));
    },[])
    
    return(
        <div id="espacios">
                <h1>My spaces</h1>
                <div className="card-group">
                    {espacios.map((d)=> <EspacioCard espacio={d}/>)}  
                </div>
        </div>
    )
}

export default Espacios;