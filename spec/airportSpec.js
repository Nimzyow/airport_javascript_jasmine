describe("airport.js", function() {
  let airport;
  beforeEach(() => {
    airport = new Airport();
  });
  describe("function not to be undefined for", () => {
    it("land_plane", () => {
      expect(airport.land_plane).not.toBeUndefined();
    });

    it("take_off_plane", () => {
      expect(airport.take_off_plane).not.toBeUndefined();
    });

    it("store_plane", () => {
      expect(airport.store_plane).not.toBeUndefined();
    });

    it("is_full?", () => {
      expect(airport.is_full).not.toBeUndefined();
    });

    it("is_stormy", () => {
      expect(airport.is_stormy).not.toBeUndefined();
    });
  });

  it("no planes in the hanger by default", () => {
    expect(airport.hanger()).toEqual([]);
  });

  describe("landing plane functionality", () => {
    let plane1;
    let plane2;
    beforeEach(() => {
      plane1 = jasmine.createSpy("plane1", ["flight_number"]);
      plane1.flight_number = "1";
      plane2 = jasmine.createSpy("plane2", ["flight_number"]);
      plane2.flight_number = "2";
      spyOn(airport, "is_stormy").and.returnValue(false);
    });

    it("lands plane", () => {
      airport.land_plane(plane1);
      airport.land_plane(plane2);
      expect(airport.hanger()).toContain(plane1);
      expect(airport.hanger()).toContain(plane2);
    });
  });

  describe("taking off plane functionality", () => {
    let plane1;
    let plane2;
    let plane3;
    beforeEach(() => {
      plane1 = jasmine.createSpy("plane1", ["flight_number"]);
      plane1.flight_number = "1";
      plane2 = jasmine.createSpy("plane2", ["flight_number"]);
      plane2.flight_number = "2";
      plane3 = jasmine.createSpy("plane3", ["flight_number"]);
      plane3.flight_number = "3";
      spyOn(airport, "is_stormy").and.returnValue(false);
    });
    it("takes off plane", () => {
      airport.land_plane(plane1);
      airport.take_off_plane("1");
      expect(airport.hanger()).toEqual([]);
    });
    it("takes off 2nd plane", () => {
      airport.land_plane(plane1);
      airport.land_plane(plane2);
      airport.land_plane(plane3);
      airport.take_off_plane("2");
      expect(airport.hanger()).not.toContain(plane2);
    });
  });

  describe("other method functionality", () => {
    it("is_stormy returns false", () => {
      spyOn(Math, "random").and.returnValue(0.3);
      expect(airport.is_stormy()).toBe(false);
    });
    it("is_stormy returns true", () => {
      spyOn(Math, "random").and.returnValue(0.6);
      expect(airport.is_stormy()).toBe(true);
    });
  });

  describe("error handling", () => {
    let plane1;
    beforeEach(() => {
      plane1 = jasmine.createSpy("plane1", ["flight_number"]);
      plane1.flight_number = "1";
    });

    it("prevents takeoff when weather is stormy", () => {
      spyOn(airport, "is_stormy").and.returnValue(false);
      airport.land_plane(plane1);
      airport.is_stormy.and.returnValue(true);
      expect(() => {
        airport.take_off_plane("1");
      }).toThrowError("It's stormy, can't take off plane");
    });

    it("prevents landing when weather is stormy", () => {
      expect(() => {
        spyOn(airport, "is_stormy").and.returnValue(true);
        airport.land_plane(plane1);
      }).toThrowError("Weather stormy, can't land plane");
    });
  });
});
