class BallFactory{
    constructor(){
        this.createBall=function(type){
            let ball;
            if(type==='football'||type==='soccer') ball=new Football();
            else if(type==='basketball') ball = new Basketball();
            ball.roll=function(){
                return `the ${this._type} is rolling.`
            }
            return ball
        }
    }
}
class Football{
    constructor(){
        this._type='flltball';
        this.kick=function(){
            return 'you kicked the football'
        }
    }
}
class BallFactory{
    constructor(){
        this._type='basketball';
        this.bounce=function(){
            return `you bounced the basketball`
        }
    }
}
module.exports=BallFactory