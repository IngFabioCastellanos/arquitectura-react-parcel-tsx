/**
 * updateObjectInSheet
 *
 * @param {String} id identificador der registro a actualizar
 * @param {String} datos JSON parseado a string con datos a actualizar
 * @param {String} datos JSON parseado a string con datos a actualizar
 */
function updateObjectInSheet(props: updateObjectInSheet): object {

  const { id, datos, nameSheet, nameId } = props;

  const table = obtenerSheet(nameSheet);

  if (!table) {
    Logger.log("Error: la tabla no fue encontrada");
    return { status: "failed", message: "Error: la tabla no fue encontrada" };
  };

  const headers = table.getDataRange().getValues().shift();

  const datosEncontrados = JSON.parse(findDataById({ nameSheet, id, nameId }));
  const datosObject = JSON.parse(datos);

  const numeroFila = datosEncontrados.row;

  if (!headers) {
    Logger.log("Error: No se encontraron los headers de la tabla");
    return { status: "failed", message: "Error: No se encontraron los headers de la tabla" };
  }

  for (const key in datosObject) {
    const numeroColumna = headers.indexOf(key) + 1;
    numeroColumna > 0 &&
      table.getRange(numeroFila, numeroColumna).setValue(datosObject[key]);
  }

  return { status: "ok", message: "Registro actualizado" }
}
