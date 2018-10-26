import axios from 'axios'
import { parse } from 'node-html-parser';
import chalk from 'chalk'

class Conjugate {
  url: string = 'https://www.spanishdict.com/conjugate/'
  constructor(arg: string){
    axios.get(`${this.url}${arg}`).then(res =>{
      const root = parse(res.data)
      const target = root.querySelector('.card')
      let headers = parse(target.toString().toString()).querySelectorAll('.vtable-label-link-text')      
      let tables = parse(target.toString().toString()).querySelectorAll('.vtable')

      for (let i = 0; i < headers.length; i ++){
        const header = headers[i];
        const table = tables[i];

        console.log(chalk.inverse(header.rawText))
        this.prettyTable(table.toString().toString())
      }
      //console.log(tables)
      
    }).catch(error => {
      console.log(error)
    })
  }

  prettyTable(html: string) {
    let space = ''
    const n = parse(html).querySelector('tr').childNodes.length
    const data = parse(html).querySelectorAll('td')
    let build = '|'
    const colors = ['#E88388', '#A8CC8C', '#DBAB79', '#71BEF2', '#D290E4', '#66C2CD', '#B9C0CB']

    for (let i = 0; i < data.length; i++){
      const td = data[i].rawText
      const diff = 22 - td.length
      for (let s = 0; s < diff; s ++){
        space += ' '
      }
      build = build + td + space + '|'
      space = ''
      if ((i + 1) % n == 0){
        //console.log(build)
        console.log(chalk.hex(colors[Math.floor(i/n)])(build))        
        build = '|'
      }
    }
  }
}
export default Conjugate