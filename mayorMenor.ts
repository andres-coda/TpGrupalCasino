import { Apuesta } from "./apuesta";
export class MayorMenor{
 private carta1 : number;
 private carta2 : number;
 private apuesta : Apuesta;
 
    public constructor (pCarta1:number,pCarta2:number,pAuesta:Apuesta){
        this.carta1 = pCarta1;
        this.carta2 = pCarta2;
        this.apuesta = pAuesta;
    }
  
    public setCarta1(pCarta1:number):void{
          this.carta1 = pCarta1
    }
    public setCarta2(pCarta2):void{
          this.carta2 = pCarta2
    }
    public juego(){

    }
    public victoriDerrota(pApuesta:Apuesta){
        
    }

}