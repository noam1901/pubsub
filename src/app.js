import Prime from "./publishers/PrimeGenerator.js";
import Mersenne from "./clients/mersenne.js";

const primes = new Prime(32)
const mersenne = new Mersenne()

for(let value of primes.generator()){
    console.log(value, mersenne.isMersenne(value));
}



