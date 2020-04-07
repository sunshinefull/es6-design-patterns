class TrafficTower {
	constructor() {
		this._airplanes = [];
	}

	register(airplane) {
		this._airplanes.push(airplane);
		airplane.register(this);
	}

	requestCoordinates(airplane) {
		return this._airplanes.filter(plane => airplane !== plane).map(plane => plane.coordinates);
	}
}

class Airplane {
	constructor(coordinates) {
		this.coordinates = coordinates;
		this.trafficTower = null;
	}

	register(trafficTower) {
		this.trafficTower = trafficTower;
	}

	requestCoordinates() {
		if (this.trafficTower) return this.trafficTower.requestCoordinates(this);
		return null;
	}
}
// usage
// const tower = new TrafficTower();

// const airplanes = [new Airplane(10), new Airplane(20), new Airplane(30)];
// airplanes.forEach(airplane => {
//   tower.register(airplane);
// });

// console.log(airplanes.map(airplane => airplane.requestCoordinates()))

// class Customer{
//     constructor(name,dealerMediator){
//         this.name=name;
//         this.dealerMediator=dealerMediator;
//     }
//     getName(){
//         return this.name
//     }
//     makeOrder(auto,info){
//         this.dealerMediator.orderAuto(this,auto,info);
//     }
// }
// class OfficialDealer{
//     constructor() {
//         this.customer=[];
//     }
//     orderAuto(customer,auto,info){
//         const name=customer.getName();
//         console.log(`order name:${name}.order auto is ${auto}`)
//         console.log(`additional info:${info}`)
//         this.addToCustomersList(name)
//     }
//     addToCustomersList(name){
//         this.customer.push(name)
//     }
//     getCustomerList(){
//         return this.customer
//     }
// }
// const mediator = new OfficialDealer();
// const bob=new Customer('bob',mediator);
// const john=new Customer('john',mediator);
// bob.makeOrder('xyz','abc');
// bob.makeOrder('efg','hij')
// console.log(mediator.getCustomerList())

module.exports = {
	TrafficTower,
	Airplane,
};