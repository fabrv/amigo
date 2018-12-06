"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require("minimist");
const Translate_1 = require("./cmds/Translate");
const Detect_1 = require("./cmds/Detect");
const Conjugate_1 = require("./cmds/Conjugate");
const { version } = require('../package.json');
class Amigo {
    constructor() {
        this.args = minimist(process.argv.slice(2));
        let cmd = this.args._[0] || 'help';
        if (this.args.version || this.args.v) {
            cmd = 'version';
        }
        if (this.args.help || this.args.h) {
            cmd = 'help';
        }
        switch (cmd) {
            case 'version':
                console.log(`v${version}`);
                process.exit();
                break;
            case 'translate':
                let trans = new Translate_1.default(this.args._);
                break;
            case 'conjugate':
                let conjugate = new Conjugate_1.default(this.args._[1]);
                break;
            case 'detect':
                let detect = new Detect_1.default(this.args._);
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