export class Skills {
    id?: number;
    habilidad: string;
    porcentaje: string;
    iconskill: string;
    tipo: string;
    
    constructor(habilidad: string, porcentaje: string, iconskill: string, tipo: string) {
		this.habilidad = habilidad;
		this.porcentaje = porcentaje;
		this.iconskill = iconskill;
		this.tipo = tipo;
	}
}
