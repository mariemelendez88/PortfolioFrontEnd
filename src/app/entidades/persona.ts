export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    frase: string;
    acercade: string;
    img_banner: string;
    img_pfp: string;
    cvpdf: string;
    textofooter: string;
    email: string;
    password: string;
    
    constructor(nombre: string, apellido: string, titulo: string, frase: string, acercade: string, img_banner: string, 
        img_pfp: string, cvpdf: string, textofooter: string, email: string, password: string) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.titulo = titulo;
		this.frase = frase;
		this.acercade = acercade;
		this.img_banner = img_banner;
		this.img_pfp = img_pfp;
		this.cvpdf = cvpdf;
		this.textofooter = textofooter;
        this.email = email;
        this.password = password;
	}
}
