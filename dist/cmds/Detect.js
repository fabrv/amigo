"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Detect {
    constructor(args) {
        this.url = 'https://translate.yandex.net/api/v1.5/tr.json/detect?';
        this.key = 'trnsl.1.1.20181025T171317Z.ef1c81cb9a030620.1799cee5559bf9985b24d90d6226fa9db7a6e38a';
        args = args.slice(1);
        console.log(args.join(' '));
        let toTranslate = args.join(' ');
        axios_1.default.get(`${this.url}key=${this.key}&text=${toTranslate}&lang=es`).then(res => {
            console.log(`Lenguaje detectado: ${res.data.lang}`);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.default = Detect;
//# sourceMappingURL=Detect.js.map