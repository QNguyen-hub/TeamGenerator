const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("Initialization", () => {
    it("should take in an id, name, email, school", () => {
      const intern = new Intern(1, "Q", "Q@gmail.com", "DU");

      expect(intern.id).toEqual(1);
      expect(intern.name).toEqual("Q");
      expect(intern.email).toEqual("Q@gmail.com");
      expect(intern.school).toEqual(DU);
    });
  });
});
