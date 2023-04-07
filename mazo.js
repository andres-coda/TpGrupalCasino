"use strict";
exports.__esModule = true;
exports.Mazo = void 0;
var cartas_1 = require("./cartas");
var Mazo = /** @class */ (function () {
    function Mazo(pMazo, pDescarte) {
        this.mazo = pMazo;
        this.descarte = pDescarte;
    }
    Mazo.prototype.cargarMazo = function () {
        var palo;
        for (var j = 0; j < 4; j++) {
            switch (j) {
                case 0:
                    palo = "CORAZONES ";
                    break;
                case 1:
                    palo = "PICA      ";
                    break;
                case 2:
                    palo = "DIAMANTE  ";
                    break;
                case 3:
                    palo = "TREBOL    ";
                    break;
                default:
                    palo = "";
                    break;
            }
            for (var i = 0; i < 14; i++) {
                if (i < 13) {
                    this.mazo.push(new cartas_1.Cartas("   ".concat(i + 1, "    de ").concat(palo)));
                }
                else {
                    this.mazo.push(new cartas_1.Cartas("COMODIN de ".concat(palo)));
                }
            }
        }
    };
    Mazo.prototype.setMazo = function (pMazo) {
        this.mazo = pMazo;
    };
    Mazo.prototype.getMazo = function () {
        return this.mazo;
    };
    Mazo.prototype.getNombreCarta = function (indice) {
    };
    Mazo.prototype.indiceCarta = function (carta) {
    };
    Mazo.prototype.estaLaCarta = function (pCarta) {
    };
    Mazo.prototype.getDescarte = function () {
        return this.descarte;
    };
    Mazo.prototype.darCarta = function () {
    };
    return Mazo;
}());
exports.Mazo = Mazo;
