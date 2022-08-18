const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email, "Manager");
    this.officeNumber = officeNumber;
  }
  renderSpecificHTML() {
    const input = ``;
    return this.renderBaseHTML(input);
  }
}

module.exports = Manager;
