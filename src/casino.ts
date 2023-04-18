/* Esta clase es la entrada al cacino, como la mesa de entrada, en ella esta el nombre del cacino, con los metodos para leerlo
y modificarlo. Y también el metodo para inscribirse y comenzar a jugar. En este metodo se instancia la pantalla, y el jugador
con datos ingresados por teclado.
Despues de instanciar ambos ojetos, utiliza el metodo jugar del jugador para entrar en la dinamica del menu.
También estan los mensajes de despedida. */

import { Jugador } from "./jugador";
import { Pantalla } from "./pantalla";
import * as readlineSync from 'readline-sync';

export class Casino{
    private nombre:string;

    public constructor(){
        this.nombre="LA VIRULETA"
    }

    public getNombre():string {
        return this.nombre
    }
    public setNombre(pNombre:string):void{
        this.nombre=pNombre;
    }

    public inscripcion():void {
        const pantalla = new Pantalla([]);
        pantalla.borrarConsola();
        pantalla.bienvenido(this.nombre);
        pantalla.pausaConsola();
        const nombreAinscribirse = readlineSync.question("Ingrese su nombre: ".toUpperCase());
        const dinero = readlineSync.questionInt("Ingrese la cantidad de fichas a comprar: ".toUpperCase());
        const jugador= new Jugador(nombreAinscribirse,dinero);
        jugador.jugar(pantalla);
        pantalla.borrarConsola();
        console.log(`Gracias ${jugador.getNombre()} por apostar en ${this.nombre}`);
        console.log(`Puede canjear las ${jugador.getDinero()} fichas que gano`);
        console.log("Vuelva pronto");    
    }
}
