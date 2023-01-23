export class Proyectos {
    id?: number;
    logo: string;
    link_repo: string;
    fin: string;
    titulo: string;
    descripcion: string;
    
    constructor(logo: string, link_repo: string, fin: string, titulo: string, 
        descripcion: string) {
		this.logo = logo;
		this.link_repo = link_repo;
		this.fin = fin;
		this.titulo = titulo;
		this.descripcion = descripcion;
	}
}
