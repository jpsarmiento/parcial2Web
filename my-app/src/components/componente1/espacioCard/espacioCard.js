// Importar React, hoja de estilo y hooks
import React, { useState } from "react";

function EspacioCard(props) {
    let [espacio] = useState(props.espacio)
    return(
            <div className="card">
                        <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/1259/1259768.png" alt="Foto"/>
                        <div className="card-body">
                            <h5 className="card-title">{espacio.name}</h5>
                            <p className="card-text">{espacio.address}</p>
                        </div>
                    </div>
    )
}

export default EspacioCard