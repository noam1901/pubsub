
class Events{
    constructor(){
        this.listeners = {}
    }
    emit(type, ...args){
        for(let func of this.listeners[type]){
            func(...args)
        }
    }
    on(typeOfListener, listener){
        if(this.listeners[typeOfListener]){
            this.listeners[typeOfListener].push(listener) 
        }else{
            this.listeners[typeOfListener] = [listener]
        }
    }
}
export default Events
