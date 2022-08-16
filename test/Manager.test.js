const Manager = require("../lib/Manager");

describe("Manager class", () => {
  describe("Initialization", () => {
    it("should take in an id, name, email and officeNumber", () => {
      const manager = new Manager(1, "Q", "Q@gmail.com", 1);

      expect(manager.id).toEqual(1);
      expect(manager.name).toEqual("Q");
      expect(manager.email).toEqual("Q@gmail.com");
      expect(manager.officeNumber).toEqual(1);
    });
  });
});
