import React, {useRef} from "react";

import "../css/form.css";

// funcion para captrar el id de un elemento
const id = x => document.getElementById(x);

class Form extends React.Component {

    constructor(pros) {
        super(pros);
        this.subMit = this.handleSubmit.bind(this);
        this.saveData = this.saveData.bind(this);
        this.createData = this.createData.bind(this);
        this.registroDB = [];
    }

    createData(a, b, c, d, e = ""){
        if (e) {
            const item = {
                Nombre: a,
                Matricula: b,
                Edad: c,
                Nota: d,
            }

            this.registroDB.splice(e, 1, item);

            return item;
        } else {
            const item = {
                Nombre: a,
                Matricula: b,
                Edad: c,
                Nota: d
            }

            this.registroDB.push(item);

            return item;
        }
    }

    saveData(){
        window.localStorage.setItem("Estudiantes", JSON.stringify(this.registroDB));
    }

    handleSubmit(event) {
        event.preventDefault();
        const n = id("name"),
            m = id("matricula"),
            ed = id("edad"),
            no = id("calificacion");


        if (n.value !== "" || m.value !== "" || ed.value !== "" || no.value !== "") {
            this.createData(n.value, m.value, ed.value, no.value);
            this.saveData();
            console.log(this);
            // showTable();
            id("message").innerHTML = "Datos Guardados";
            // this.reset();
            console.log(this.registroDB);
            setTimeout(() => {
                id("message").innerHTML = "";
            }, 4000);
        } else {
            id("message").innerHTML = "Debes llenar los campos";
            setTimeout(() => {
                id("message").innerHTML = "";
            }, 4000);
        }
    }

    render() {

        return (
            <>
                <h1 className="title">Publicar notas de Estudiantes</h1>

                <form onSubmit={this.handleSubmit} id="form-reg">
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
}

export default Form;