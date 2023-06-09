
import { Jugador } from "./jugador";
import { red, blue, green, yellow } from "colors";

export class Dados {

        private dados: number[];
        private nombre: string;
        protected jugador: Jugador;

        constructor(dados: number[], nombre: string, jugador: Jugador) {
                
                this.dados = [];
                this.nombre = nombre;
                this.jugador = jugador;
        }

        getdados(): number[] {
                return this.dados;
        }
        setDados(number: number[]): void {
                this.dados = []
        }

        public getNombreDados(): String {
                return this.nombre;
        }

        public setNombreDados(nombre: string): void {
                this.nombre = nombre;
        }


        protected bienvenido(): void {
                console.log(red(`BIENVENIDO A ${this.getNombreDados()}\n`.toUpperCase()));
                console.log(green(`Que comience el juego\n`.toUpperCase()));

        }


        premioObtenido(): void {
                let premio: String = `Ah perdido, su dinero actual es de ${this.jugador.getDinero()}`;
                if (this.verificarGenerala()) {
                        premio = `¡Felicidades, obtuviste Generala! Ganaste el premio Mayor.`;
                        this.jugador.setDinero(this.jugador.getDinero() + this.jugador.getApuesta() * 10);
                } else if (this.verificarEscalera()) {
                        premio = `¡Felicidades, Obtuviste escalera! Ganaste el cuarto premio`;
                        this.jugador.setDinero(this.jugador.getDinero() + this.jugador.getApuesta() * 2);
                } else if (this.verificarPoker()) {
                        premio = `¡Felicidades, obtuviste Poker! Ganaste el tercer premio`;
                        this.jugador.setDinero(this.jugador.getDinero() + this.jugador.getApuesta() * 4);
                } else if (this.verificarFull()) {
                        premio = `¡Obtuviste Full! Ganaste el segundo premio`;
                        this.jugador.setDinero(this.jugador.getDinero() + this.jugador.getApuesta() * 8);
                } else {
                        premio = `Lo siento, no obtuviste ninguna combinación ganadora, su dinero actual es de ${this.jugador.getDinero()}`;
                }
        }

        public jugarDados(): void {
                do {

                        this.bienvenido();
                        console.log(`Su dinero actual es de $${this.jugador.getDinero()}\n`);
                        this.jugador.apostar();
                        console.log(this.probPremioMayor())
                        this.tirarDados()
                        this.verificarGenerala();
                        this.verificarEscalera();
                        this.verificarPoker();
                        this.verificarFull();
                        console.log(this.premioObtenido());
                } while(readlineSync.keyInYN("¿Desea jugar de nuevo?"))
        
            }

        probPremioMayor(): number {

                const lados = 6; // número de lados en cada dado
                const combinacionesPosibles = Math.pow(lados, 5); // número total de combinaciones posibles
                const combinacionesCincoIguales = lados; // solo hay una combinación posible para obtener cinco dados iguales
                const probabilidad = combinacionesCincoIguales / combinacionesPosibles; // calcular la probabilidad

                return probabilidad;

        }

        // Cargamos el arreglo dados con cinco numeros aleatorios...

        tirarDados(): void {
                for (let i = 0; i < 5; i++) {
                        this.dados[i] = Math.floor(Math.random() * 6) + 1;
                }
        }

        /* Obtenemos el primer elemento del arreglo para compararlo con el resto.Iteramos a través 
        del resto de los elementos en el arreglo, si encontramos un elemento que no es igual al
        primer elemento, devolvemos falso. Si llegamos al final del bucle sin encontrar ningún 
        elemento diferente, devolvemos verdadero... */

        private verificarGenerala(): boolean {

                const primerElemento = this.dados[0];

                for (let i = 1; i < this.dados.length; i++) {

                        if (this.dados[i] !== primerElemento) {
                                return false;
                        }
                }

                return true;
        }

        /* Obtenemos el primer elemento del arreglo para compararlo con los demás.Contar la 
        cantidad de elementos iguales al primer elemento, retornamos verdadero si hay cuatro
        elementos iguales al primer elemento*/

        private verificarPoker(): boolean {

                const primerElemento = this.dados[0];

                let contador = 0;
                for (let i = 1; i < this.dados.length; i++) {
                        if (this.dados[i] === primerElemento) {
                                contador++;
                        }
                }

                return contador === 3;
        }

        /*Primero ordenamos el arreglo de menor a mayor con sort. Luego, iteramos a través de cada
        elemento del arreglo y verificamos si es igual al elemento anterior más 1. Si encontramos
        un elemento que no es consecutivo, devolvemos false. Si llegamos al final del bucle sin 
        encontrar ningún elemento que no sea consecutivo, devolvemos true. */

        public verificarEscalera(): boolean {
                this.dados.sort((a, b) => a - b);
                for (let i = 1; i < this.dados.length; i++) {
                        if (this.dados[i] !== this.dados[i - 1] + 1) {
                                return false;
                        }
                }
                return true;
        }

        /* Tomamos los valores de los dados y creamos un nuevo arreglo que contiene solo los valores 
        únicos almacenados en dados utilizando Set. Luego, verificamos si numerosUnicos contiene dos 
        valores únicos; si no es así, no puede haber un Full, por lo que la función devuelve false.
        Si hay exactamente dos valores únicos en numerosUnicos, contamos cuántas veces aparece uno de 
        ellos en dados utilizando el método filter. Si ese valor aparece exactamente dos o tres veces,
        retornamostrue, de lo contrario, retornamos false. */


        public verificarFull(): boolean {
                const numerosUnicos = [...new Set(this.dados)];
                if (numerosUnicos.length === 2) {
                        const numRepetidos = this.dados.filter((num) => num === numerosUnicos[0]).length;
                        return numRepetidos === 2 || numRepetidos === 3;
                }
                return false;
        }
}