
/**
 * saveObjectInSheet
 * @param {string} props
 * @returns {object}
 */
function saveObjectInSheet(props: saveObjectInSheet): object {

  const { data, nameSheet } = props;

  const table = obtenerSheet(nameSheet);

  if (!table) {
    Logger.log("Error: la tabla no fue encontrada");
    return { status: "failed", message: "Error: la tabla no fue encontrada" };
  };

  const headers = table.getDataRange().getValues().shift();

  if (!headers) {
    Logger.log("Error: No se encontraron los headers de la tabla");
    return { status: "failed", message: "Error: No se encontraron los headers de la tabla" };
  }

  const nuevaFila = ordenarArray(JSON.parse(data), headers);
  table.appendRow(nuevaFila);

  return { status: "ok", message: "Registro guardado" }
}



function ordenarArray(data: { [x: string]: string }, headers: string[]): string[] {
  let arregloOrdenado: string[] = [];

  for (let posicion = 0; posicion < headers.length; posicion++) {
    let value = data[headers[posicion]];
    arregloOrdenado[posicion] = value;
  }

  return arregloOrdenado;
}

