/* Los mazos están llenos de cartas igual que las guias de la tragamonedas de cartas.
Son la unidad basica de esos juegos y estan compuesta por el nombre (cartas) de tipo string
que cuenta con un numero y un palo que se crea en mazos. 

Los metodos que tenemos aquí son modificar carta (setCartas), leer carta (getCartas), 
pregunta de que palo es la carta(deQuePaloEs), y crea una cadena string para mostrar en pantalla
(mostrarCartaPantalla) devuelve un string. Este metodo lo utiliza el juego mayor menor */


import { red } from "colors";

export class Cartas {
    private cartas : string;
        
    public constructor (pCartas:string){
      this.cartas = pCartas;
    }
    
    public setCartas(pCartas:string):void{
            this.cartas = pCartas
    }
    public getCartas():string{
            return this.cartas
    }

    public deQuePaloEs(pPalo:string):Boolean{
        return this.cartas.includes(pPalo)
    }

    public mostrarCartaPantalla(pCarta:boolean):string {
      let strCarta:string;  
      if (pCarta===true){
        strCarta=`La carta en la mesa es ${red(`${this.cartas}`)}`;
        } else{
          strCarta=`La nueva carta es ${red(`${this.cartas}`)}`;
        }
        return strCarta;
    }
}