export class Referencias {
    id?: number;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    
    constructor(nombre: string, apellido: string, telefono: string, email: string) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.telefono = telefono;
		this.email = email;
	}
}
