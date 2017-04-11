describe('Airport', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });

  it('can land a plane', function() {
    spyOn(airport, "_weatherCheck").and.returnValue(false);
    airport.land(plane)
    expect(airport.planes()).toContain(plane)
  });

  it('can take off plane', function() {
    spyOn(airport, "_weatherCheck").and.returnValue(false);
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes()).not.toContain(plane)
  });

  it('throws error if landing when stormy', function() {
    spyOn(airport, "_weatherCheck").and.returnValue(true);
    expect( function(){ airport.land(plane); } ).toThrowError('Cannot land, too stormy');
  });

  it('throw error if taking off when stormy', function() {
    spyOn(airport, '_weatherCheck').and.returnValue(true);
    expect(function() { airport.takeOff(plane); } ).toThrowError('Cannot take off, too stormy');
  });

  it('throws an error if try to land a plane when full', function() {
    for(var x=0; x<10; x++) {
      airport.land(plane)
      // plane = new Plane()
    }
    expect( function() { airport.land(plane); } ).toThrowError('Cannot land, airport is full')


  });

});
