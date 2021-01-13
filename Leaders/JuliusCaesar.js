"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuliusCaesar = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Roman_1 = require("../Roman");
class JuliusCaesar extends Leader_1.default {
    static civilization() {
        return Roman_1.default;
    }
    name() {
        return 'Abraham Lincoln';
    }
}
exports.JuliusCaesar = JuliusCaesar;
exports.default = JuliusCaesar;
//# sourceMappingURL=JuliusCaesar.js.map