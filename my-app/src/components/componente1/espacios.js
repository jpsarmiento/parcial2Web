import React, { useEffect, useState } from "react";
import EspacioCard from "./espacioCard/espacioCard";
import Rooms from "../componente2/rooms";
import "./espacios.css";
import { FormattedMessage } from "react-intl";

function Espacios() {
  const [espacios, setEspacios] = useState([]);
  const [espacio, selectEspacio] = useState();
  useEffect(() => {
    
    if(localStorage.getItem("espacios")==null) {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let espaciosU = [];
          data.forEach((element) => {
            espaciosU.push(element);
          });
          setEspacios(espaciosU);
          localStorage.setItem("espacios", JSON.stringify(data))
        })
        .catch((e) => console.warn(e));
    }
    else{
      setEspacios(JSON.parse(localStorage.getItem("espacios")));
  }
    
    
  }, []);

  return (
    <div>
      <div id="espacios">
        <h1><FormattedMessage id ="MySpaces"/></h1>
        <div className="card-group">
          {espacios.map((d) => (
            <EspacioCard
              key={d.id}
              espacio={d}
              onClick={() => selectEspacio(d)}
            />
          ))}
        </div>
      </div>
      <div id="detalle">
        {espacio != null ? <Rooms room={espacio} /> : null}
      </div>
      <div id="chart">
      </div>
    </div>
  );
}

export default Espacios;
