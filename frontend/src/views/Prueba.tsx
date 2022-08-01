import React, { useEffect } from 'react'
import { apiActions } from '../api/apiActions'
import { nameSheets } from '../api/nameSheets'

export default function Prueba() {

  useEffect(() => {

    (async () => {
      console.log(
        await apiActions.findAllByNamesheet({
          nameSheet: nameSheets.USUARIOS
        })
      );
    })()
  }, [])


  return (
    <div>Prueba</div>
  )
}
