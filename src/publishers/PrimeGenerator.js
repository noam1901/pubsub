import Events from "../myEvent.js";
class Prime extends Events{
    constructor(max){
        super()
        this.buttomNumber = 2
        this.max = max
    }
    *generator(){
        for(let i=this.buttomNumber; i<this.max;i++){
            if(this.isPrime(i)){
                yield i
            }
        }
    }
    isPrime(num){
        for(let i = 2, s = Math.floor(Math.sqrt(num)); i <= s ; i++ )
            if(num % i === 0) return false;
        return num > 1;
            
        
    }
}

export default Prime