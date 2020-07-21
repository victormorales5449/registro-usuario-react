import React from 'react';

function Table() {
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
    )
}

export default Table;