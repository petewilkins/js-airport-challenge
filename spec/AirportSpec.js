describe('Airport', function() {

  var airport;
  beforeEach(function() {
    airport = new Airport();
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('has a default capacity of 10', function() {
    expect(airport.capacity).toEqual(10);
  });

  it('can have a specified capacity', function() {
    airport2 = new Airport(20);
    expect(airport2.capacity).toEqual(20);
  });


});
