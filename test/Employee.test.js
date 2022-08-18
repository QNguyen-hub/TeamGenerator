const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("Initialization", () => {
    it("should take in an id, name, email, position", () => {
      const employee = new Employee(1, "Q", "Q@gmail.com", "manger");

      expect(employee.id).toEqual(1);
      expect(employee.name).toEqual("Q");
      expect(employee.email).toEqual("Q@gmail.com");
      expect(employee.school).toEqual("manger");
    });
  });
});
