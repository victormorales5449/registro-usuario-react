import React from 'react';

import "../css/tabla.css";

class Table extends React.Component {
    render() {

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
                    <tbody id="est"></tbody>
                </table>
            </>
        );
    }
}

export default Table;