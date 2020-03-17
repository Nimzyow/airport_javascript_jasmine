let Airport = function() {
  this._hanger = [];
};

Airport.prototype.land_plane = function(plane) {
  this._hanger.push(plane);
  console.info(plane.flight_number);
};

Airport.prototype.take_off_plane = function(flight_number) {
  this._hanger.map((plane, index) => {
    if (plane.flight_number === flight_number) {
      this._hanger.splice(index, 1);
      return;
    }
  });
};

Airport.prototype.store_plane = function() {};

Airport.prototype.is_full = function() {};

Airport.prototype.is_stormy = function() {};

Airport.prototype.hanger = function() {
  return this._hanger;
};
