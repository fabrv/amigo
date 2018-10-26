import axios from 'axios'
import codes from './languageCodes'

class Detect {
  url: string = 'https://translate.yandex.net/api/v1.5/tr.json/detect?'
  key: string = 'trnsl.1.1.20181025T171317Z.ef1c81cb9a030620.1799cee5559bf9985b24d90d6226fa9db7a6e38a'  
  constructor(args: Array<string>){    
    args = args.slice(1)
    console.log(args.join(' '))
    let toTranslate: string = args.join(' ')
    axios.get(`${this.url}key=${this.key}&text=${toTranslate}&lang=es`).then(res =>{
      console.log(`Lenguaje detectado: ${res.data.lang}`)
    }).catch(error => {
      console.log(error)
    })
  }
}
export default Detect