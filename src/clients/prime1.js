import chalk from 'chalk'
class primeEndsWithOne{
    isEndsWithOne(primeNum){
        if(primeNum%10 ===1){
            console.log(chalk.red(primeNum))
            return true
        }
        return false
    }
}

export default primeEndsWithOne