"use strict";
exports.__esModule = true;
exports.Frutas = void 0;
var Frutas = /** @class */ (function () {
    function Frutas(pNombre) {
        this.nombre = pNombre;
    }
    Frutas.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Frutas.prototype.getNombre = function () {
        return this.nombre;
    };
    Frutas.prototype.getNombreFruta = function (pFrutas) {
    };
    return Frutas;
}());
exports.Frutas = Frutas;
