import axios from 'axios'
import codes from './languageCodes'
import chalk from 'chalk'

class Detect {
  url: string = 'https://translate.yandex.net/api/v1.5/tr.json/detect?'
  key: string = 'trnsl.1.1.20181025T171317Z.ef1c81cb9a030620.1799cee5559bf9985b24d90d6226fa9db7a6e38a'  
  constructor(args: Array<string>){    
    args = args.slice(1)
    console.log(chalk.inverse(args.join(' ')))
    let toTranslate: string = args.join(' ')
    axios.get(`${this.url}key=${this.key}&text=${toTranslate}&lang=es`).then(res =>{
      codes.forEach( (value,index) => {
        if (value.code == res.data.lang){
          console.log(chalk.hex('#E88388')(`Lenguaje detectado: ${value.nativeName}`))
        }
      })      
    }).catch(error => {
      console.log(error)
    })
  }
}
export default Detect