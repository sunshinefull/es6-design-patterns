class Hero {
  constructor(name, specialAbility) {
    this._name = this.name;
    this._specialAbility = specialAbility;
  }
  getDetails() {
    return `${this._name} can ${this._specialAbility}`;
  }
}
export default Hero;
