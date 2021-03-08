"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Roman_1 = require("./Roman");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Roman',
    nation: 'Rome',
    colors: ['#A20101', '#D1B24F'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Roman_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map