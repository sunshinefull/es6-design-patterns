class Commute{
    travel(transport){
        return transport.travelTime();
    }
}
class Vehicle{
    travelTime(){
        return this._timeTaken;
    }
}
class Bus extends Vehicle{
    constructor(){
        super()
        this._timeTaken=0
    }
}
class Taxi extends Vehicle{
    constructor(){
        super()
        this._timeTaken=10
    }
}
class PersonalCar extends Vehicle{
    constructor() {
        super()
        this._timeTaken=3;
    }
}
module.exports={
    Commute,
    Bus,
    Taxi,
    PersonalCar
}
