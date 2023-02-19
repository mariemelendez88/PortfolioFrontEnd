export class Experiencias {
    id?: number;
    logo: string;
    link_instit: string;
    instit: string;
    inicio: string;
    fin: string;
    puesto: string;
    descripcion: string;
    
    constructor(logo: string, link_instit: string, instit: string, inicio: string, fin: string, puesto: string, 
        descripcion: string) {
		this.logo = logo;
		this.link_instit = link_instit;
		this.instit = instit;
		this.inicio = inicio;
		this.fin = fin;
		this.puesto = puesto;
		this.descripcion = descripcion;
	}
}
