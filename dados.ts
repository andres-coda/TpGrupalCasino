export class Dados {
    private cara : number;
        
    public constructor (pCara:number){
      this.cara = pCara;
    }
    
    public setCara(pCara:number):void{
            this.cara = pCara
    }
    public getCara():number{
            return this.cara
    }
    public tirarDado():void{

    }
}