export interface IProyecto {
    _id:           string;
    id_proyecto:   string;
    name_proyecto: string;
    id_equipo:     string;
    estado: string;
    tareas:        Array<any[]>;
    __v:           number;
}