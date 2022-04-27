const Spiderman = require("./../app/spiderman")

describe("Unit test for spiderman class", () => {
    test('1) Create an spoderman object', () => {
      const andrewGarfield = new Spiderman("Spiderman Sony", 31)
      expect(andrewGarfield.name).toBe("Spiderman Sony");
      expect(andrewGarfield.age).toBe(31);
    });

    test('2) Get Spiderman Studio', () => {
      const andrewGarfield = new Spiderman("Spiderman Sony", 31)
      expect(andrewGarfield.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });
})