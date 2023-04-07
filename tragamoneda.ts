import { Jugador } from "./jugador";
import { Pantalla } from "./pantalla";
import  {red, blue, green,yellow} from "colors";

export abstract class Tragamonedas {
    private nombre:String;
    protected jugador:Jugador;
    protected pantalla:Pantalla;



    public constructor(pJugador:Jugador,pNombre: String){
        this.jugador=pJugador;
        this.nombre=pNombre;
        this.pantalla= new Pantalla(new Array());
    }

    public getNombreTragamonedas():String{
        return this.nombre;
    }

    public setNombreTragamoneda(pNombre:String):void{
        this.nombre=pNombre;
    }

   
    protected bienvenido():void{
        console.log(red(`BIENVENIDO A ${this.getNombreTragamonedas()}\n`.toUpperCase()));
        console.log(green(`Que comience el juego\n`.toUpperCase()));
        
    }

    abstract juego():void;



}