export  abstract class Personaje {
    protected nombre:string;
    private nivel:number;
    private puntosDeVida:number;

    constructor(nombre:string,nivel:number,puntosDeVida:number) {
        this.nombre=nombre;
        this.nivel=nivel;
        this.puntosDeVida=puntosDeVida;
        
    }
    
     abstract atacar():void

    defender():void{
        console.log(this.nombre+"  esta defendiendo");
    }
    
}