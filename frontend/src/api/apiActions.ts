import { api } from "./api";

export const apiActions = {
  findAllByNamesheet: async (props: findAllByNamesheet) => await api(props),
  findDataById: async (props: findAllByNamesheet) => await api(props),
  findMultipleDataById: async (props: findMultipleDataById) => await api(props),
  saveObjectInSheet: async (props: saveObjectInSheet) => await api(props),
  updateObjectInSheet: async (props: updateObjectInSheet) => await api(props),
}