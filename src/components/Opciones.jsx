import React from 'react';

const Opciones = (props) => {
    return (
        <div className='opciones'>
        <div className='opcion'>
            <button id='A' className='botones' onClick={props.handleClickA}>A</button>
            <h2>
                {props.opcionA}
            </h2>
        </div>
        <div className='opcion'>
            <button id='B' className='botones' onClick={props.handleClickB}>B</button>
            <h2>
                {props.opcionB}
            </h2>
        </div>
    </div>
    )
}

export default Opciones