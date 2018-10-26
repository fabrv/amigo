# amigo NodeJS
Node CLI for Spanish translation and verb conjugation.  
This is a Node port of a [python proyect](https://github.com/hecris/amigo) made by Christopher He.

![alt text](/screenshots/conjugate.gif?raw=true)
![alt text](/screenshots/translate.gif?raw=true)

# Dependecies
* [Axios](https://www.npmjs.com/package/axios)
* [Chalk](https://www.npmjs.com/package/chalk)
* [Minimist](https://www.npmjs.com/package/minimist)
* [node-html-parser](https://www.npmjs.com/package/node-html-parser)

# Installation
## Using npm
To install and run the program using `npm` use the next command
```bash
npm install -g amigo-spanish
amigo [command] <options>
```
## Cloning repo, installing and running
Run the next to command to clone the repo
```
git clone https://github.com/fabrv/amigo.git
cd amigo
```
Install dependencies and run directly with node
```
npm install
npm run build
node dist/index [command] <options>
```

# Usage
`amigo [command] <options>`

| Command   | Definition and usage                                                            |
|-----------|---------------------------------------------------------------------------------|
| translate | Translate phrase or words to spanish. Eg: `amigo translate 'text to translate'` |
| detect    | Detects language. Eg: `amigo detect 'text to detect'`                           |
| conjugate | Lists conjugations for verbs in spanish Eg: `amigo conjugate ser`               |
| help      | Get help                                                                        |

# Credits
* *Author*: Fabrizzio Rivera - [fabrv](https://github.com/fabrv)
* *Original project*: Christopher He - [hecris](https://github.com/hecris)