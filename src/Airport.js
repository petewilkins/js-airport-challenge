function Airport() {
  this._hangar = [];
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.land = function(plane) {
  if(this._weatherCheck() === true) {
    throw new TypeError("Cannot land, too stormy")
  }
  this._hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  var index = this._hangar.indexOf(plane);
  this._hangar.splice(index, 1);
}

Airport.prototype._weatherCheck = function () {
  var weather = new Weather();
  weather.isStormy();
};
