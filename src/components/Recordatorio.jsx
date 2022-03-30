import React from 'react';

const Recordatorio = (props) => {
    return (
        <div className='recordatorio'>
            <h3>
                Selección anterior: {props.seleccionAnterior}
            </h3>
            <h3>Historial de elecciones elegidas: </h3>
            <ul id='lista'></ul>
        </div>
    )
}

export default Recordatorio