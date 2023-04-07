import { Cartas } from "./cartas";

export class Mazo {
   private mazo : Cartas[]
   private descarte : number[]

   public constructor(pMazo:Cartas[],pDescarte:number[]){
        this.mazo = pMazo;
        this.descarte = pDescarte;
   }

   public cargarMazo():void{
     let palo:string;
     for (let j:number=0; j<4; j++) {
          switch (j){
               case 0:
                    palo="CORAZONES ";
                    break;
               case 1:
                    palo="PICA      ";
                    break;
               case 2:
                    palo="DIAMANTE  "
                    break;
               case 3: 
                    palo="TREBOL    "
                    break;
               default :
                    palo=""
                    break;
          }
          for (let i:number=0; i<14;i++){
               if (i<13){
                    this.mazo.push(new Cartas(`   ${i+1}    de ${palo}`));
               } else {
                    this.mazo.push(new Cartas(`COMODIN de ${palo}`));
               }   
          }
     }
   }

   public setMazo(pMazo:Cartas[]):void{
        this.mazo = pMazo;
   }
   public getMazo():Cartas[]{
    return this.mazo
   }
   public getNombreCarta(indice:number){
         
   }
   public indiceCarta(carta:string){

   }
   public estaLaCarta(pCarta:number){

   }
   public getDescarte():number[]{
    return this.descarte
   }
   public darCarta(){
    
   }
}