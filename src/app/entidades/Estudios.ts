export class Estudios {
    id?: number;
    logo: string;
    link_instit: string;
    instit: string;
    fecha_inicio: number;
    fecha_fin: number;
    titulo: string;
    descripcion: string;
    
    constructor(logo: string, link_instit: string, instit: string, fecha_inicio: number, fecha_fin: number, titulo: string, 
        descripcion: string) {
		this.logo = logo;
		this.link_instit = link_instit;
		this.instit = instit;
		this.fecha_inicio = fecha_inicio;
		this.fecha_fin = fecha_fin;
		this.titulo = titulo;
		this.descripcion = descripcion;
	}
}
