class Subject{
    constructor(){
        this._observers=[]
    }
    subscribe(observer){
        this._observers.push(observer)
    }
    unSubscribe(observer){
        this._observers=this._observers.filter(obs=>obs!=observer)
    }
    fire(change){
        this._observers.forEach(observer => {
            observer.update(change)
        });
    }
}
class Observer{
    constructor(state){
        this.state=state;
        this.initialState=state;
    }
    update(change){
        let state=this.state
        switch(change){
            case 'INC':
                this.state=++state
            case 'DEC':
                this.state = --state
            default :
                this.state = this.initialState
        }
    }
}
module.exports={
    Subject,
    Observer
}