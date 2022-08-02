import Prime from "./publishers/PrimeGenerator.js";
import Mersenne from "./clients/mersenne.js";
import primeEndsWithOne from "./clients/prime1.js";

const primes = new Prime(32)
const mersenne = new Mersenne()
const end1 = new primeEndsWithOne()

for(let value of primes.generator()){
    console.log(value, mersenne.isMersenne(value), end1.isEndsWithOne(value) );
}



