import chalk from 'chalk'
class fourDigits{
    is4Digits(primeNum){
        if(primeNum>999 && primeNum < 10000){
            console.log(chalk.yellow(10000-primeNum))
            return true
        }
       return false
    }
}
export default fourDigits