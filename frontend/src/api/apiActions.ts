import { api } from "./api";

export const apiActions = {
  findAllByNamesheet: async (props: findAllByNamesheet) =>
    await api({ action: "findAllByNamesheet", ...props }),

  findDataById: async (props: findAllByNamesheet) =>
    await api({ action: "findDataById", ...props }),

  findMultipleDataById: async (props: findMultipleDataById) =>
    await api({ action: "findMultipleDataById", ...props }),

  saveObjectInSheet: async (props: saveObjectInSheet) =>
    await api({ action: "saveObjectInSheet", ...props }),

  updateObjectInSheet: async (props: updateObjectInSheet) =>
    await api({ action: "updateObjectInSheet", ...props }),
}