import * as minimist from 'minimist'
import Translate from './cmds/Translate' 
import Detect from './cmds/Detect';
import Conjugate from './cmds/Conjugate';

const { version } = require('../package.json')
class Amigo {
  args: minimist.ParsedArgs = minimist(process.argv.slice(2))
  constructor(){
    let cmd = this.args._[0] || 'help'

    if (this.args.version || this.args.v) {
      cmd = 'version'
    }

    if (this.args.help || this.args.h) {
      cmd = 'help'
    }

    switch (cmd) {
      case 'version':
        console.log(`v${version}`)
        process.exit()
        break
      case 'translate':
        let trans = new Translate(this.args._)
        break

      case 'conjugate':
        let conjugate = new Conjugate(this.args._[1])
        break

      case 'detect':
      let detect = new Detect(this.args._)
        break

      case 'help':
        console.log(`
        amigo [command] <options>
        
        translate ............... Translate phrase or words to spanish
        detect .................. Detects language
        conjugate ............... Lists conjugations for verbs in spanish
        help .................... Get help
        `)

        process.exit()

        break
      default:
        console.error(`"${cmd}" is not a valid command!`)
        break
    }
  }
}
export default new Amigo()