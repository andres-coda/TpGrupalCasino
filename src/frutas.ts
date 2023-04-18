/* Las guias de la tragamonedas de frutas estan llenas de frutas.
Son la unidad basica de estejuego y estan compuesta por el nombre (nombre) de tipo string
que cuenta con un nombre de frutas. 

Los metodos que tenemos aquí son modificar fruta (setFruat), leer Fruta (getFrutas)*/

import { IFrutas } from "./iFrutas";

export class Frutas implements IFrutas{
  private nombre : string;
        
    public constructor (pNombre:string){
      this.nombre = pNombre;
    }
    
    public setNombre(pNombre:string):void{
            this.nombre = pNombre;
    }
    public getNombre():string{
            return this.nombre;
    }
}