import React from 'react'
import { useListasDesplegables } from '../store/store';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function App() {

  const listasDesplegables = useListasDesplegables();

  listasDesplegables.get().ciudades.map(e => console.log(e))


  return (
    <>
      {
        listasDesplegables.get().ciudades.map((e, index) =>
          <button
            key={index}
            className='font-bold text-2xl border-2 rounded-full bg-yellow-300 text-green-800 py-2 px-10 hover:shadow-lg hover:shadow-green-500 duration-700'>{e}</button>
        )
      }
      <Link to={"/prueba"}>
        <Button type="primary">Ruta prueba</Button>
      </Link>
    </>
  )
}
