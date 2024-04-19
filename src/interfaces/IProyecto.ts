export interface IProyecto {
    _id:           string;
    id_proyecto:   string;
    name_proyecto: string;
    id_equipo:     string;
    status:        string;
    tareas:        Array<any[]>;
    __v:           number;
}