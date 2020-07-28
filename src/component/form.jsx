import React, {useRef, useState} from "react";

import "../css/form.css";


const initialSatage = {
    name: "",
    matricula: "",
    edad: "",
    calificacion: "",
}

const [userData, setUserData] = useState(initialState)

const handleSubmit = evnt => {
    evnt.preventDefault();

}

const Form = () => {

    return (
        <>
            <h1 className="title">Publicar notas de Estudiantes</h1>

            <form onSubmit={handleSubmit} id="form-reg">
                <div className="input">
                    <label>Nombre:</label>
                    <input id="name" type="text" name="nombre" placeholder="Ejemplo: Juan Martinez" />
                </div>

                <div className="input">
                    <label>Matricula:</label>
                    <input id="matricula" type="text" name="Matricula" placeholder="Ejemplo: 2018-9964" />
                </div>

                <div className="input">
                    <label>Edad: </label>
                    <input id="edad" type="number" name="edad" placeholder="Ejemplo: 20" />
                </div>

                <div className="input">
                    <label>Calificacion: </label>
                    <input id="calificacion" type="number" name="calificacion" placeholder="Ejemplo: 100" />
                </div>

                <div id="message"></div>
                <div className="botones">
                    <button className="btn-registrar">Registrar</button>
                </div>
            </form>
        </>
    );
}

export default Form;