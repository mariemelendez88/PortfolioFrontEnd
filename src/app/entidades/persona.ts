export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    frase: string;
    acercade: string;
    imgBanner: string;
    imgPfp: string;
    cvpdf: string;
    textofooter: string;
    email: string;
    password: string;
    
    constructor(nombre: string, apellido: string, titulo: string, frase: string, acercade: string, imgBanner: string, 
        imgPfp: string, cvpdf: string, textofooter: string, email: string, password: string) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.titulo = titulo;
		this.frase = frase;
		this.acercade = acercade;
		this.imgBanner = imgBanner;
		this.imgPfp = imgPfp;
		this.cvpdf = cvpdf;
		this.textofooter = textofooter;
        this.email = email;
        this.password = password;
	}
}
