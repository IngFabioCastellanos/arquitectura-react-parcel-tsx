import React from 'react'
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Link to={"/prueba"}>
        <Button type="primary">Ruta prueba</Button>
      </Link>
    </>
  )
}
