import Prime from "./publishers/PrimeGenerator.js";
import Mersenne from "./clients/mersenne.js";
import primeEndsWithOne from "./clients/prime1.js";
import fourDigits from "./clients/prime4Digits.js";

const primes = new Prime(2000)
const mersenne = new Mersenne()
const end1 = new primeEndsWithOne()
const fourdigits = new fourDigits


primes.on('start', mersenne.isMersenne)
primes.on('start', end1.isEndsWithOne)
primes.on('start', fourdigits.is4Digits)

for(let number of primes.generator()){

}


