import axios from 'axios'
import chalk from 'chalk';
class Translate {
  url: string = 'https://translate.yandex.net/api/v1.5/tr.json/translate?'
  key: string = 'trnsl.1.1.20181025T171317Z.ef1c81cb9a030620.1799cee5559bf9985b24d90d6226fa9db7a6e38a'  
  constructor(args: Array<string>){    
    args = args.slice(1)
    console.log(chalk.inverse(args.join(' ')))
    let toTranslate: string = args.join(' ')
    axios.get(`${this.url}key=${this.key}&text=${toTranslate}&lang=es`).then(res =>{
      console.log(chalk.hex('#E88388')(res.data.text[0]))
    }).catch(error => {
      console.log(error)
    })
  }
}
export default Translate