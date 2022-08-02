import chalk from 'chalk'
class Mersenne{
    
    isMersenne(primeNum){
        if (primeNum > 2) {
            let power = 0;
            let n = 0;
            while (power <= primeNum + 1) {
                power = parseInt(Math.pow(2, n));
                if (power == primeNum + 1) {
                    console.log(chalk.blue(primeNum));
                    return true;
                }
                n++;
            }
        }
        return false;


    }
}
export default Mersenne
