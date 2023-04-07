export class Casino {
    private nombre : string;
    private fichasEntrada : number;
    private premio : number;

    public constructor (pNombre:string,pFichas:number,pPremio:number){
        this.nombre = pNombre;
        this.fichasEntrada = pFichas;
        this.premio = pPremio;
    }

public setNombre(pNombre:string):void{
        this.nombre = pNombre;
}
public getNombre():string{
        return this.nombre;
}
public setEntrada(pFichas:number):void{
        this.fichasEntrada = pFichas;
}
public getEntrada():number{
        return this.fichasEntrada
}
public setPremio(pPremio:number):void{
    this.premio = pPremio;
}
public getPremio():number{
    return this.premio;
}
} 
