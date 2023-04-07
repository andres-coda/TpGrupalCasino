"use strict";
exports.__esModule = true;
exports.Pantalla = void 0;
var readlineSync = require("readline-sync");
var colors_1 = require("colors");
var Pantalla = /** @class */ (function () {
    function Pantalla(pPantalla) {
        this.pantalla = pPantalla;
    }
    Pantalla.prototype.getPantalla = function () {
        return this.pantalla;
    };
    Pantalla.prototype.setPantalla = function (pPantalla) {
        this.pantalla = pPantalla;
    };
    Pantalla.prototype.mostrarPantalla = function (pTitulo) {
        console.log("\n");
        console.log((0, colors_1.yellow)("                  ".concat(pTitulo, "\n").toUpperCase()));
        console.log("\n");
        console.log((0, colors_1.blue)("======================================================="));
        console.log("\n");
        console.log((0, colors_1.red)("                  MUCHA SUERTE EN SU TIRADA      \n"));
        console.log((0, colors_1.red)("           TRULULULULULULU TRULULULULU TRULULULU\n"));
        this.pausaConsola();
        console.log("\n");
        if (pTitulo === "La fruta de la fortuna") {
            for (var i = 0; i < 3; i++) {
                console.log((0, colors_1.blue)("Fila ".concat(i + 1, ".....")));
                console.log((0, colors_1.blue)("------ -----// " + (0, colors_1.green)(this.pantalla[i]) + " // " + (0, colors_1.green)(this.pantalla[i + 3]) + " // " + (0, colors_1.green)(this.pantalla[i + 6]) + " // --------"));
            }
        }
        else {
            if (pTitulo === "Las cartas tienen magia") {
                for (var i = 0; i < 3; i++) {
                    console.log((0, colors_1.blue)("Fila ".concat(i + 1, ".....")));
                    console.log((0, colors_1.blue)("------ -----// " + (0, colors_1.green)(this.pantalla[i]) + " // " + (0, colors_1.green)(this.pantalla[i + 3]) + " // " + (0, colors_1.green)(this.pantalla[i + 6]) + " // " + (0, colors_1.green)(this.pantalla[i + 9]) + " // --------"));
                }
            }
        }
        console.log((0, colors_1.blue)("\nCALCULANDO PREMIOS.....\n"));
    };
    Pantalla.prototype.borrarConsola = function () {
        console.clear();
    };
    Pantalla.prototype.pausaConsola = function () {
        readlineSync.question("Presiona " + (0, colors_1.green)("Enter") + " para continuar...");
    };
    return Pantalla;
}());
exports.Pantalla = Pantalla;
