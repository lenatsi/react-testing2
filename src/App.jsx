import { Fragment, useState } from 'react'
import './App.css'
import NavTab from './NavTab'
import Tabla from './Tabla'

function App() {
  const [peli, setPeli] = useState([
    { id: 1, name: 'Avengers', state:false },
    { id: 2, name: 'Iron Man', state:false },
  ])

  const addNewPeli = (value) => {
    const newPeli = {
      id: peli[peli.length - 1].id + 1,
      name: value,
    }
    setPeli((prevPeli) => [...prevPeli, newPeli])
  }

  const tooglePeli = (valor) =>{
    const peliCambiar= peli.findIndex((peliculas) => peliculas.id === valor.id);
    const pelisVista = [...peli];
    pelisVista[peliCambiar].state = !valor.state
    setPeli(pelisVista)
  }

  const deletePeli = (valor) =>{
   
    const pelisNuevas = [...peli]
    pelisNuevas.splice(pelisNuevas.findIndex(peliculas => peliculas.id === valor.id),1)
    console.log(pelisNuevas)
    const id = valor.id
    console.log(id)
    setPeli(pelisNuevas)
  }

  return (
    <div className="App">
      <div className="row">
        <NavTab />
        <Tabla addNewPeli={addNewPeli} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Pelicula</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {peli.map((peli) => {
              return (
                <Fragment>
                  <tr key={peli.id}>
                    <th scope="row">{peli.id}</th>
                    <td>
                      {peli.name} <span> {peli.state ? '✅':' '}</span>
                    </td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button onClick={() => tooglePeli(peli)} type="button" className="btn btn-success">
                          {peli.state ? 'No la he visto':'La he visto'}
                        </button>
                        <button onClick={() => deletePeli(peli)} type="button" className="btn btn-danger">
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                </Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
