'use strict';

describe('Airport', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpy('weather');
  });

  describe('when stormy', function() {

    beforeEach(function() {
      spyOn(airport, "_weatherCheck").and.returnValue(true);
    });

    it('throws error if landing when stormy', function() {
      expect( function(){ airport.land(plane); } ).toThrowError('Cannot land, too stormy');
    });

    it('throws error if taking off when stormy', function() {
      plane.flying = false;
      expect(function() { airport.takeOff(plane); } ).toThrowError('Cannot take off, too stormy');
    });

  });

  describe('when not stormy', function() {

    beforeEach(function() {
      spyOn(airport, "_weatherCheck").and.returnValue(false);
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

    it('throws error if try to land a plane when full', function() {
      for(var x=0; x<10; x++) {
        airport.land(plane)
        plane = new Plane();
      }
      expect( function() { airport.land(plane); } ).toThrowError('Cannot land, airport is full')
    });

    it('throws error if landing a plane that is not flying', function() {
      airport.land(plane)
      expect( function() { airport.land(plane); } ).toThrowError('Cannot land, plane already landed')
    });

    it('throws error if taking off a plane that is already flying', function() {
      plane.flying = true;
      expect( function() { airport.takeOff(plane); } ).toThrowError('Cannot take off, plane already flying')
    });


  });


});
