import React, { useEffect ,useState, useRef} from 'react';
import Table from './component/table.jsx';
import './css/global.css';
let Message = "";
const App = () => {
  // const [userData, setUserData] = useState([]);
  const Nombre = useRef();
  const Matricula = useRef();
  const Edad = useRef();
  const Calificacion = useRef();
  let registroDB = [];

  // const handleInputChanche = (evnt) => {
  //   const {name, value} = evnt.target;    
  //   setUserData({...userData, [name]:value})
  // }

  // useEffect(() => {
  //   let data = localStorage.getItem("Estudiantes");
  //   if (data != null) {
  //     setShowData(JSON.parse(data));     
  //   }
  // }, []);

  // esta funcion s utiliza para crear un objeto de los datos del formulario
  const createReg = (a, b, c, d, e = "") => {
    // si existe un indice se actualiza los datos en el array, sino, se crea uno nuevo
    if (e) {
      const item = {
        Nombre: a,
        Matricula: b,
        Edad: c,
        Nota: d,
      }

      registroDB.splice(e, 1, item);

      return item;
    } else {
      const item = {
        Nombre: a,
        Matricula: b,
        Edad: c,
        Nota: d
      }

      registroDB.push(item);

      return item;
    }
  }
  
  const handleSubmit = evnt => {
    evnt.preventDefault();
    const a = Nombre.current.value;
    const b = Matricula.current.value;
    const c = Edad.current.value;
    const d = Calificacion.current.value;
    if (a !== "" || b !== "" || c !== "" || d !== "") {
      createReg(a,b,c,d);
      console.log(registroDB);
      console.log("Datos Guardados")
    } else {
      console.log("LLene los datos");
    }
  }

  // useEffect(() => {
  //   localStorage.setItem("Estudiantes", JSON.stringify(userData))
  // }, [handleSubmit]);
  
  return (
    <>
      <h1 className="title">Publicar notas de Estudiantes</h1>

      <form onSubmit={handleSubmit} id="form-reg">
        <div className="input">
          <label>Nombre:</label>
          <input 
            ref={Nombre} 
            type="text" 
            name="Nombre" 
            placeholder="Ejemplo: Juan Martinez" 
          />
        </div>

        <div className="input">
          <label>Matricula:</label>
          <input 
            ref={Matricula}  
            type="text" 
            name="Matricula" 
            placeholder="Ejemplo: 2018-9964" 
          />
        </div>

        <div className="input">
          <label>Edad: </label>
          <input 
            ref={Edad}  
            type="number" 
            name="Edad" 
            placeholder="Ejemplo: 20" 
          />
        </div>

        <div className="input">
          <label>Calificacion: </label>
          <input 
            ref={Calificacion}  
            type="number" 
            name="Calificacion" 
            placeholder="Ejemplo: 100" 
          />
        </div>

        <div id="message">{Message}</div>
        <div className="botones">
          <button className="btn-registrar">Registrar</button>
        </div>
      </form>

      {/* <Table showData={showData} /> */}
    </>
  );
}

export default App;

