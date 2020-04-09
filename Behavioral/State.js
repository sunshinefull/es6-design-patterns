class TrafficLight{
    constructor(){
        this.states=[new GreenLight(),new RedLight(),new YelloLight()]
        this.current=this.states[0]
    }
    change(){
        const totalStates=this.states.length;
        let currentIndex=this.states.findIndex(light=>light=this.current)
        if(currentIndex+1<totalStates) this.current=this.states[currentIndex+1]
        else this.current=this.states[0]
    }
    sign(){
        return this.current.sign()
    }
}
class Light{
    constructor(light){
        this.light=light
    }
}
class GreenLight extends Light{
    constructor(){
        super('grenn')
    }
    sign(){
        return 'go'
    }
}
class YelloLight extends Light{
    constructor(){
        super('yellow')
    }
    sign(){
        return 'steady'
    }
}
class RedLight extends Light{
    constructor(){
        super('red')
    }
    sign(){
        return 'stop'
    }
}
module.exports = TrafficLight;