class Singleton {
  constructor(data) {
    if (Singleton.exists) {
      return Singleton.instance;
    }
    this._data = data;
    Singleton.exists = true;
    Singleton.instance = this;
    return this;
  }
  getData() {
    return this._data;
  }
  setData(data) {
    return (this._data = data);
  }
}
module.export = Singleton;
