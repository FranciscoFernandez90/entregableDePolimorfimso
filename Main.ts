import { Mago } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";
import { Personaje } from "./Personajes";

function instanciarmetodos(personaje:any,nuevaHabilidad:string):void{// funcion para probar los metodos y no instanciar los mismos por cada personaje
    console.log(personaje)//muestra el personaje creado
    personaje.atacar()//prueba el metodo atacar
    personaje.defender()//prueba el metodo defender
    personaje.encontrarCofreMagico(nuevaHabilidad)//instancia encontrar el cofre y adquirir nuevo ataque
    personaje.atacar()//prueba el nuevo ataque adquirido
    console.log(personaje)//muestra si el nuevo ataque adquirido quedo almacenado
    }

let Mago1=new Mago("merlin",20,100);
instanciarmetodos(Mago1,"abracadabra")
let Arquero1=new Arquero("Arrow",25,100)
instanciarmetodos(Arquero1,"lluvia de flechas")
let Luchador1=new Luchador("Tyson",25,100)
instanciarmetodos(Luchador1,"upercout")


