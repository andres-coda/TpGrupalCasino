"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var pantalla_1 = require("./pantalla");
var colors_1 = require("colors");
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas(pJugador, pNombre) {
        this.jugador = pJugador;
        this.nombre = pNombre;
        this.pantalla = new pantalla_1.Pantalla(new Array());
    }
    Tragamonedas.prototype.getNombreTragamonedas = function () {
        return this.nombre;
    };
    Tragamonedas.prototype.setNombreTragamoneda = function (pNombre) {
        this.nombre = pNombre;
    };
    Tragamonedas.prototype.bienvenido = function () {
        console.log((0, colors_1.red)("BIENVENIDO A ".concat(this.getNombreTragamonedas(), "\n").toUpperCase()));
        console.log((0, colors_1.green)("Que comience el juego\n".toUpperCase()));
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;
