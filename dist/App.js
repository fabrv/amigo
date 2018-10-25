"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
class Amigo {
    constructor() {
        this.args = minimist(process.argv.slice(2));
        console.log(this.args);
        let cmd = this.args._[0] || 'help';
        if (this.args.version || this.args.v) {
            cmd = 'version';
        }
        if (this.args.help || this.args.h) {
            cmd = 'help';
        }
        switch (cmd) {
            case 'translate':
                console.log(cmd);
                break;
            case 'conjugate':
                console.log(cmd);
                break;
            case 'detect':
                console.log(cmd);
                break;
            case 'help':
                console.log(`
        amigo [command] <options>

        translate ............... Translate phrase or words to spanish
        detect .................. Detects language
        conjugate ............... Lists conjugations for verbs in spanish
        help .................... Get help
        `);
                process.exit();
                break;
            default:
                console.error(`"${cmd}" is not a valid command!`);
                break;
        }
    }
}
exports.default = new Amigo();
//# sourceMappingURL=App.js.map