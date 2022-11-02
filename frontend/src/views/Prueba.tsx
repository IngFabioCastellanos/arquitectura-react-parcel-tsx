import React, { useEffect } from 'react'
import { apiActions } from '../api/apiActions'
import { nameSheets } from '../api/nameSheets'

export default function Prueba() {

  const consultarUsuarios = async () => {
    try {
      const respuesta = await apiActions
        .findAllByNamesheet({ nameSheet: nameSheets.USUARIOS });

      console.log(respuesta);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    consultarUsuarios()
  }, [])

  return (
    <div>Prueba</div>
  )
}
