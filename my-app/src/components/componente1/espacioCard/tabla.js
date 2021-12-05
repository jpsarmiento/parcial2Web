import { FormattedMessage } from "react-intl";
function Tabla(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col"><FormattedMessage id ="Device"/></th>
          <th scope="col"><FormattedMessage id ="Value"/></th>
        </tr>
      </thead>
      <tbody>
      {props.device.devices.map((d, i) => {
        return(
            <tr key={d.id}>
                <th scope="row">{i+1}</th>
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
