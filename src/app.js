import Prime from "./publishers/PrimeGenerator.js";
import Mersenne from "./clients/mersenne.js";
import primeEndsWithOne from "./clients/prime1.js";
import fourDigits from "./clients/prime4Digits.js";


const run = () => {
    const primes = new Prime(100)
    const mersenne = new Mersenne()
    const end1 = new primeEndsWithOne()
    const fourdigits = new fourDigits
    
    
    primes.on('generate number', mersenne.isMersenne)
    primes.on('generate number', end1.isEndsWithOne)
    primes.on('generate number', fourdigits.is4Digits)
    
    const nums = primes.generator()
    
    let timer =  setInterval(()=>{let num = nums.next();if(num.done){clearInterval(timer)};primes.emit('generate number',num.value);},1000)


}

export default run


