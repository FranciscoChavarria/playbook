describe("Unit test for spiderman class", () => {
    test('1) Create an spoderman object', () => {
      const andrewGarfield = new Spiderman("Spiderman Sony", 31)
      expect(andrewGarfield.name).toBe("Spiderman Sony");
      expect(andrewGarfield.age).toBe(31);
    });
})