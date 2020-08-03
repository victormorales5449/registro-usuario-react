import React from 'react';

import "../css/tabla.css";

const Table = props => {
    return (
        <>
            <table>
                <caption>Notas finales de los estudiantes</caption>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Matricula</th>
                        <th>Edad</th>
                        <th>Calificación</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.showData != null ?
                            props.showData.map((user, id) => (
                                <tr key={id}>
                                    <td>{user.Nombre}</td>
                                    <td>{user.Matricula}</td>
                                    <td>{user.Edad}</td>
                                    <td>{user.Calificacion}</td>
                                    <td>
                                        <a className="btn-editar" href={user.matricula}>Editar</a>
                                        <a className="btn-useriminar" href={user.nombre}>Eliminar</a>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5">No hay datos</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Table;