class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }
  work() {
    return `${this._name} handles ${this.responsibilities()}`;
  }
  getPaid() {
    return `${this._name} got paid ${this._salary}`;
  }
}
class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  responsibilities() {
    return "application development";
  }
}
class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }
  responsibilities() {
    return "testing";
  }
}
export { Tester, Developer };
