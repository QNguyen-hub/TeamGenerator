const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("Initialization", () => {
    it("should take in an id, name, email, github", () => {
      const engineer = new Engineer(
        1,
        "Q",
        "Q@gmail.com",
        "https://github.com/QNguyen-hub"
      );

      expect(engineer.id).toEqual(1);
      expect(engineer.name).toEqual("Q");
      expect(engineer.email).toEqual("Q@gmail.com");
      expect(engineer.school).toEqual("https://github.com/QNguyen-hub");
    });
  });
});
