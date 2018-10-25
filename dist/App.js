"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
class Amigo {
    constructor() {
        this.args = minimist(process.argv.slice(2));
        console.log(this.args);
    }
}
exports.default = new Amigo();
//# sourceMappingURL=App.js.map