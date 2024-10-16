import { Personaje } from "./Personajes";

export class Mago extends Personaje {
    private ataque:string
    
    constructor(nombre:string,nivel:number,puntosDeVida:number) {
        super(nombre,nivel,puntosDeVida)  
        this.ataque="echizo"
    }

    atacar():void {
        console.log(this.nombre+ " esta atacando con un "+ this.ataque);
    }

    encontrarCofreMagico(nuevaHabilidad:string):void{
        this.ataque=nuevaHabilidad;
        console.log(this.nombre+ "  ha encontrado un cofre magico que le da la habilidad de un nuevo ataque llamado "+ nuevaHabilidad)

    }
}