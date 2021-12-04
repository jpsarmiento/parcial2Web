// Importar React, hoja de estilo y hooks
function EspacioCard({espacio, onClick}) {
    return(
            <div className="card" onClick={onClick}>
                <img className="card-img-top" src={espacio.type === "house" ? "https://cdn-icons-png.flaticon.com/512/619/619034.png" : "https://cdn-icons-png.flaticon.com/512/1259/1259768.png"} alt="Foto"/>
                <div className="card-body">
                    <h5 className="card-title">{espacio.name}</h5>
                    <p className="card-text">{espacio.address}</p>
                </div>
            </div>
    )
}

export default EspacioCard