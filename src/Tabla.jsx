import React, { Fragment, useRef } from 'react'

export default function Tabla({addNewPeli}) {
const inputPeli = useRef();
const addPeli = (e) => {
    const nPeli = inputPeli.current.value;
    addNewPeli(nPeli);
    inputPeli.current.value = null;
}

    return (
        <Fragment>
        <div className="container mt-4">
            <div className="input-group mb-3">
                <input type="text" ref={inputPeli} className="form-control" placeholder="Nombre de una película"></input>
                <button onClick={addPeli}className="btn btn-outline-secondary" type="button" id="button-addon2">Añadir película</button>
            </div>
        </div>
        </Fragment>
    )
}
