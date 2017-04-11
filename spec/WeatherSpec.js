describe('Weather', function() {

  var weather;
  beforeEach(function() {
    weather = new Weather();
  });

  it('is usually not stormy', function() {
    spyOn(Math, "random").and.returnValue(0.1);
    expect(weather.isStormy()).toBeFalsy();
  });
});
