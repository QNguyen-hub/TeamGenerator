const Employee = require("./Employee");

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email, "Intern");
    this.school = school;
  }
  renderSpecificHTML() {
    const input = `School Attended: ${this.school}`;
    return this.renderBaseHTML(input);
  }
}

module.exports = Intern;
