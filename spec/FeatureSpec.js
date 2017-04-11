describe('Airport', function() {

  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('can land a plane', function() {
    airport.land(plane)
    expect(airport.planes()).toContain(plane)
  });

  it('can take off plane', function() {
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes()).not.toContain(plane)

  });


});
