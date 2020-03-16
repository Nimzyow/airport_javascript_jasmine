describe("airport.js", function() {
  describe("function not to be undefined for", () => {
    let airport;
    beforeEach(() => {
      airport = new Airport();
    });
    it("land_plane", function() {
      expect(airport.land_plane).not.toBeUndefined();
    });
    it("take_off_plane", function() {
      expect(airport.take_off_plane).not.toBeUndefined();
    });
    it("store_plane", function() {
      expect(airport.store_plane).not.toBeUndefined();
    });
    it("is_full?", function() {
      expect(airport.is_full).not.toBeUndefined();
    });
  });
});
