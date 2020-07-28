import React, {useRef, useState} from 'react';
import Table from './component/table.jsx';
import './css/global.css';

const App = () => {
  const initialState = {
    name: "",
    matricula: "",
    edad: "",
    calificacion: "",
  }

  const [userData, setUserData] = useState(initialState);

  const handleInputChanche = (evnt) => {
    const {name, value} = evnt.target;
    setUserData({...userData, [name]:value})
  }

  const handleSubmit = evnt => {
    evnt.preventDefault();

  }

  return (
    <>
      <h1 className="title">Publicar notas de Estudiantes</h1>

      <form onSubmit={handleSubmit} id="form-reg">
        <div className="input">
          <label>Nombre:</label>
          <input onChange={handleInputChanche} type="text" name="nombre" placeholder="Ejemplo: Juan Martinez" />
        </div>

        <div className="input">
          <label>Matricula:</label>
          <input onChange={handleInputChanche} type="text" name="Matricula" placeholder="Ejemplo: 2018-9964" />
        </div>

        <div className="input">
          <label>Edad: </label>
          <input onChange={handleInputChanche} type="number" name="edad" placeholder="Ejemplo: 20" />
        </div>

        <div className="input">
          <label>Calificacion: </label>
          <input onChange={handleInputChanche} type="number" name="calificacion" placeholder="Ejemplo: 100" />
        </div>

        <div id="message"></div>
        <div className="botones">
          <button className="btn-registrar">Registrar</button>
        </div>
      </form>

      <Table userData={userData} />
    </>
  );
}

export default App;

