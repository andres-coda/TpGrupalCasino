import { Jugador } from "./jugador";
import { TragamonedasCartas } from "./tragamonedaCartas";
import { TragamonedasFrutas } from "./tragamonedaFrutas";

export class Menu {

    public constructor (){
        
    }
    public fabrica(pIndice:number, pJugador:Jugador):void{
        let juego;
        switch (pIndice) {
        case 1: 
            juego = new TragamonedasFrutas(pJugador,"La fruta de la fortuna"); 
            juego.juego();       
            break;
        case 2:
            juego = new TragamonedasCartas(pJugador,"Las cartas tienen magia"); 
            juego.juego(); 
            break;
        case 3:
            console.log("Pronto estara en funcionamiento");
            break;
        case 4:
            console.log("Pronto estara en funcionamiento");
            break;
        case 0:
            console.log("Gracias por sumarte al cacino");
            break;
        default:
            console.log("No pertence a este cacino");
        }
        

    }
   
}