function Tabla(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Device</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
      {props.rooms.devices.map((d) => {
        return(
            <tr>
                <th scope="row">1</th>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.desired.value}</td>
            </tr>

        )}
       )}
      </tbody>
    </table>
  );
}

export default Tabla;
