import { Dados } from "./dados";
import { Apuesta } from "./apuesta";

export class Casino {
    private nombre: string;
    private ciudad: string;
    private direccion: string;
    private juegoDados:Dados;

    constructor(nombre: string, ciudad: string, direccion: string, juegoDados:Dados) {
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.direccion = direccion;
        this.juegoDados = juegoDados;
        
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getCiudad(): string {
        return this.ciudad;
    }

    public setCiudad(ciudad: string) {
        this.ciudad = ciudad;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string) {
        this.direccion = direccion;
    }


    
}










