function Airport() {
  this._hangar = [];
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.land = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  var index = this._hangar.indexOf(plane);
  this._hangar.splice(index, 1);
}
