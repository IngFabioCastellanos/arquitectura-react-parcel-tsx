import React, { useEffect } from 'react'
import { apiActions } from '../api/apiActions'
import { nameSheets } from '../api/nameSheets'

export default function Prueba() {

  const consultarUsuarios = () => {
    apiActions
      .findAllByNamesheet({ nameSheet: nameSheets.USUARIOS })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    consultarUsuarios()
  }, [])

  return (
    <div>Prueba</div>
  )
}
