import Events from "../myEvent.js";
import chalk from 'chalk'
class Prime extends Events{
    constructor(max){
        super()
        this.buttomNumber = 2
        this.max = max
    }
    generator(){
        let flag = false
        if (this.buttomNumber===this.max){
            return
        }
        if(this.isPrime(this.buttomNumber)){
            this.emit('start',this.buttomNumber)
            console.log(chalk.white(this.buttomNumber));
            flag = true
        }
        
        this.buttomNumber++
        if(flag){
            setTimeout(()=> this.generator(),1000)
        }
        else{
            this.generator()
        }
    }
    isPrime(num){
        for(let i = 2, s = Math.floor(Math.sqrt(num)); i <= s ; i++ )
            if(num % i === 0) return false;
        return num > 1;
    }
}

export default Prime