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
                        <th> Edad</th>
                        <th>NotaFinal</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.userData.length > 0 ?
                            props.userData.map(user => (
                                <tr>
                                    <td>{user.Nombre}</td>
                                    <td>{user.Matricula}</td>
                                    <td>{user.Edad}</td>
                                    <td>{user.Nota}</td>
                                    <td>
                                        <a className="btn-editar" href={user.Matricula}>Editar</a>
                                        <a className="btn-useriminar" href={user.Nombre}>Eliminar</a>
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