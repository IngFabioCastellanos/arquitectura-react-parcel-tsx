export interface findAllByNamesheet {
  nameSheet: string;
}

export interface findDataById {
  nameSheet: string;
  id: string;
  nameId: string;
}

export interface findMultipleDataById {
  nameSheet: string;
  id: string;
  nameId: string;
}

export interface saveObjectInSheet {
  data: string;
  nameSheet: string;
}

export interface updateObjectInSheet {
  id: string;
  datos: string;
  nameSheet: string;
  nameId: string;
}
