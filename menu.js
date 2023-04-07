"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var tragamonedaCartas_1 = require("./tragamonedaCartas");
var tragamonedaFrutas_1 = require("./tragamonedaFrutas");
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.fabrica = function (pIndice, pJugador) {
        var juego;
        switch (pIndice) {
            case 1:
                juego = new tragamonedaFrutas_1.TragamonedasFrutas(pJugador, "La fruta de la fortuna");
                juego.juego();
                break;
            case 2:
                juego = new tragamonedaCartas_1.TragamonedasCartas(pJugador, "Las cartas tienen magia");
                juego.juego();
                break;
            case 3:
                console.log("Pronto estara en funcionamiento");
                break;
            case 4:
                console.log("Pronto estara en funcionamiento");
                break;
            case 0:
                console.log("Gracias por sumarte al cacino");
                break;
            default:
                console.log("No pertence a este cacino");
        }
    };
    return Menu;
}());
exports.Menu = Menu;
