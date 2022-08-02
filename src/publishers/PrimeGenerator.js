class Prime{
    constructor(max){
        this.number = 1
        this.max = max
    }
    Generator(){
        for(let i = 1; i < this.max; i+2 ){
            let flag = true
            for (let y = 2; y * y <= i; y++){
                if (i % y === 0){
                    flag = false
                }
            }
            setTimeout(()=>console.log(i),1000) 
        }
    }
}

export default Prime