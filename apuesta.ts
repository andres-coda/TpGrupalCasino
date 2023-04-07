export class Apuesta {
private apuesta : number;
private dinero : number;

public constructor (pApuesta:number,pDinero:number){
this.apuesta = pApuesta;
this.dinero = pDinero;
}

public setApuesta(pApuesta:number):void{
        this.apuesta = pApuesta
}
public getApuesta():number{
        return this.apuesta
}
public setDinero(pDinero:number):void{
        this.dinero = pDinero
}
public getDinero():number{
        return this.dinero
}
public victoriaDerrota():void{
    this
}




}
