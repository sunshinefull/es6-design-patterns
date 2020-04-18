const car = {
  noOfWheels: 4,
  start() {
    return "started";
  },
  stop() {
    return "stopped";
  },
};

// Object.create(proto[, propertiesObject])
//Object.setPrototypeOf(object,proto)
//class xxx extends xxx
export default car;
