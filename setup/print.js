const chalk = require('chalk');
const { isEnvironmentMessages } = require('../config');

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const gray = chalk.keyword('gray');
const green = chalk.keyword('green');

module.exports = function(message, color) {
    if( isEnvironmentMessages ){
        let m;
        switch (color) {
            case "warning":
                m = warning(message);
                break;

            case "error":
                m = error(message);
                break;
            
            case "green":
                m = green(message);
                break;
                
            default:
                m = gray(message);
                break;
        }
        console.log(m);
    } 
};