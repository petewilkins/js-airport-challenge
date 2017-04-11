function Airport(capacity=10) {
  this.capacity = capacity;
  this._hangar = [];
}


Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.land = function(plane) {
  if(this._full() === true) {
    throw new TypeError('Cannot land, airport is full')
  }
  if(this._weatherCheck() === true) {
    throw new TypeError("Cannot land, too stormy")
  }
  this._hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if(this._weatherCheck() === true) {
    throw new TypeError('Cannot take off, too stormy')
  }
  var index = this._hangar.indexOf(plane);
  this._hangar.splice(index, 1);
}

Airport.prototype._weatherCheck = function () {
  var weather = new Weather();
  weather.isStormy();
};

Airport.prototype._full = function() {
  if(this._hangar.length >= this.capacity) {
    return true;
  }
  return false;
};
