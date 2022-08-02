import Prime from "./publishers/PrimeGenerator.js";
import Mersenne from "./clients/mersenne.js";
import primeEndsWithOne from "./clients/prime1.js";
import fourDigits from "./clients/prime4Digits.js";

const primes = new Prime(32)
const mersenne = new Mersenne()
const end1 = new primeEndsWithOne()
const fourdigits = new fourDigits

for(let value of primes.generator()){
    console.log(value, mersenne.isMersenne(value), end1.isEndsWithOne(value), fourdigits.is4Digits(value) );
}



