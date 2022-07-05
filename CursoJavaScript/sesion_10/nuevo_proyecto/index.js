import * as controllerJs from "./controller.js"
import chalk from 'chalk';


const multiplicacion = controllerJs.suma(1, 2) * controllerJs.suma(4, 5)

console.log(chalk.green(multiplicacion));
