// Importar React, hoja de estilo y hooks
import React, { useEffect, useState } from "react";
import RoomCard from "./roomCard/roomCard";

function Rooms(props) {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
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
        console.log(roomsU);
        setRooms(roomsU);
      })
      .catch((e) => console.warn(e));
  }, [props.room.id]);

  return (
    <div id="rooms">
      <h1>My rooms</h1>
      <div className="card-group">
        {rooms.map((d) => (
          <RoomCard room={d} key={d.name + d.homeId} />
        ))}
      </div>
    </div>
  );
}

export default Rooms;
