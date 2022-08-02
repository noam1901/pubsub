import Prime from "./publishers/PrimeGenerator.js";

const primes = new Prime(30)

for(let value of primes.generator()){
    console.log(value);
}



