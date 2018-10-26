"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const chalk_1 = require("chalk");
class Translate {
    constructor(args) {
        this.url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
        this.key = 'trnsl.1.1.20181025T171317Z.ef1c81cb9a030620.1799cee5559bf9985b24d90d6226fa9db7a6e38a';
        args = args.slice(1);
        console.log(chalk_1.default.inverse(args.join(' ')));
        let toTranslate = args.join(' ');
        axios_1.default.get(`${this.url}key=${this.key}&text=${toTranslate}&lang=es`).then(res => {
            console.log(chalk_1.default.hex('#E88388')(res.data.text[0]));
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.default = Translate;
//# sourceMappingURL=Translate.js.map