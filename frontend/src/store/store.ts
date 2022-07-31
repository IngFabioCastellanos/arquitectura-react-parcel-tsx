import { createState, useState as useStateCore } from "@hookstate/core";
import { Iciudades } from "../interfaces/store/iCiudades";


const listaDesplegables = createState<Iciudades>({
  ciudades: ["bogota", "medellin", "neiva"],
});

export const useListasDesplegables = () => useStateCore(listaDesplegables);

