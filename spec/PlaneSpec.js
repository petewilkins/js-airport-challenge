describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it('is flying by default', function() {
    expect(plane.flying).toBeTruthy();
  });

});
