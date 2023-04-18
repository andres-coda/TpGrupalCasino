/* La clase jugador se encarga de manejar las apuestas, el dinero del jugador y de elegir el juego al que decea jugar. 
Tiene como atributos el nombre, el dinero y la apuesta que va a realizar.
cuando apuesta solo puede apostar mayor a 0 y menor a la cantidad de fichas que posee
 Cada vez que la apuesta es aceptada se le descuenta del dinero, y si gana se le reintegra junto al premio.
Tambien existe un metodo por si se queda sin fichas para recargar fichas.*/
import { Menu } from "./menu";
import * as readlineSync from 'readline-sync';
import { Pantalla } from "./pantalla";


export class Jugador {
    private nombre:String;
    private dinero:number;
    private apuesta:number;
    

    public constructor(pNombre:String, pDinero:number){
        this.nombre=pNombre;
        this.dinero=pDinero;
        this.apuesta=0;
    }

    public getNombre():String{
        return this.nombre;
    }

    public getDinero():number{
        return this.dinero;
    }

    public getApuesta():number{
        return this.apuesta;
    }

    public setApuesta(pApuesta:number):void {
        this.apuesta=pApuesta;
    }

    public setDinero(pDinero:number):void{
        this.dinero=pDinero;
    }

 
    

    public apostar(pPantalla:Pantalla):void {

        do {

            
    
           /* apuestaLocal = readlineSync.questionInt("Ingrese su apuesta: ".toUpperCase());
        
        
            if(apuestaLocal<=0){ 
                console.log("No se puede apostar en negativo".toUpperCase());
            } else {
                if (apuestaLocal>this.dinero){
                    console.log("Saldo insuficiente para esta apuesta".toUpperCase());
                }  
            }
        
            /*   if ((apuestaLocal>0)&&(apuestaLocal<=this.dinero)){
                this.dinero=this.dinero-apuestaLocal;
                this.apuesta=apuestaLocal;
            }   else {
                if(apuestaLocal<=0){ 
                    console.log("No se puede apostar en negativo".toUpperCase());
                } else {
                    console.log("Saldo insuficiente para esta apuesta".toUpperCase());
                }

                (apuestaLocal<=0)||(apuestaLocal>this.dinero)
            }*/
            
        
        } while (pPantalla.comprobacionDatoIngresado(this.dinero,1,2,this)===false);     // hace comprobacion de datos si es falso va a seguir preguntando

        this.dinero=this.dinero-this.apuesta;                                             // al dinero le resta la apuesta realizada
    }

    public agregarSaldo():void{
        let valor:number;
        console.log("\n")
        if (readlineSync.keyInYN("¿Desea comprar mas fichas? ")){
            valor = readlineSync.questionInt("Ingrese la cantidad de fichas que quiere comprar: ".toUpperCase());
            if (valor >= 0){
                this.dinero=this.dinero+valor;
            } else {
                console.log(`No se puede comprar en negativo`);
            
            }
        } 
        
    }

    public jugar(pPantalla:Pantalla):void{
        let valor:number;
        
        do {
            valor = pPantalla.menuPantalla();
            if ((valor>0)&&(valor<5)){
                let menu = new Menu();
                menu.fabrica(valor,this,pPantalla);
            } else {
                if ((valor<0)||(valor>=5)) {
                    console.log("Debe ingresar opciones del menu".toUpperCase());
                    console.log("\n");
                    pPantalla.pausaConsola();
                }
            }
            
        } while(valor!=0);
    }

}