"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const node_html_parser_1 = require("node-html-parser");
const chalk_1 = require("chalk");
class Conjugate {
    constructor(arg) {
        this.url = 'https://www.spanishdict.com/conjugate/';
        axios_1.default.get(`${this.url}${arg}`).then(res => {
            const root = node_html_parser_1.parse(res.data);
            const target = root.querySelector('.card');
            let headers = node_html_parser_1.parse(target.toString().toString()).querySelectorAll('.vtable-label-link-text');
            let tables = node_html_parser_1.parse(target.toString().toString()).querySelectorAll('.vtable');
            for (let i = 0; i < headers.length; i++) {
                const header = headers[i];
                const table = tables[i];
                console.log(chalk_1.default.inverse(header.rawText));
                this.prettyTable(table.toString().toString());
            }
            //console.log(tables)
        }).catch(error => {
            console.log(error);
        });
    }
    prettyTable(html) {
        let space = '';
        const n = node_html_parser_1.parse(html).querySelector('tr').childNodes.length;
        const data = node_html_parser_1.parse(html).querySelectorAll('td');
        let build = '|';
        const colors = ['#E88388', '#A8CC8C', '#DBAB79', '#71BEF2', '#D290E4', '#66C2CD', '#B9C0CB'];
        for (let i = 0; i < data.length; i++) {
            const td = data[i].rawText;
            const diff = 22 - td.length;
            for (let s = 0; s < diff; s++) {
                space += ' ';
            }
            build = build + td + space + '|';
            space = '';
            if ((i + 1) % n == 0) {
                //console.log(build)
                console.log(chalk_1.default.hex(colors[Math.floor(i / n)])(build));
                build = '|';
            }
        }
    }
}
exports.default = Conjugate;
//# sourceMappingURL=Conjugate.js.map