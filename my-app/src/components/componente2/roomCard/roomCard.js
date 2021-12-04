// Importar React, hoja de estilo y hooks
import React, { useState } from "react";

function RoomCard(props) {
    let [room] = useState(props.room)
    return(
            <div className="card">
                <img className="card-img-top" src={room.type === "room" ? "https://cdn-icons-png.flaticon.com/512/578/578110.png" : "https://cdn-icons-png.flaticon.com/512/673/673339.png"} alt="Foto"/>
                <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                </div>
            </div>
    )
}

export default RoomCard