// Importar React, hoja de estilo y hooks
import React, { useEffect, useState } from "react";
import RoomCard from "./roomCard/roomCard";
import Tabla from "../componente1/espacioCard/tabla";
import { FormattedMessage } from "react-intl";

function Rooms(props) {
  const [rooms, setRooms] = useState([]);
  const [room, selectRoom] = useState();
  useEffect(() => {

    if(localStorage.getItem("rooms")==null) {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let roomsU = [];
          data.forEach((element) => {
            if (element.homeId === props.room.id) {
              roomsU.push(element);
            }
          });
          setRooms(roomsU);
          localStorage.setItem("rooms", JSON.stringify(data))
        })
        .catch((e) => console.warn(e));
    }
    else{
      var data = JSON.parse(localStorage.getItem("rooms"));
      let roomsU = [];
      data.forEach((element) => {
        if (element.homeId === props.room.id) {
          roomsU.push(element);
        }
      });
      setRooms(roomsU);
      
  }
    
  }, [props.room.id]);

  return (
    <div id="rooms">
      <h1><FormattedMessage id ="MyRooms"/></h1>
      <div className="card-group">
        {rooms.map((d) => (
          <RoomCard key={d.name + d.homeId} room={d}  onClick={() => selectRoom(d)}/>
        ))}
      </div>
      {room != null ? <Tabla device={room} /> : null}
    </div>
  );
}

export default Rooms;
