class Employee {
  constructor(id, name, email, position) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.position = position;
  }

  renderBaseHTML(input) {
    return `<div class="card border-info text-bg-dark" style="width: 18rem;">
        <div class="card-body">
          <div class="card-title text-center">${this.name}</div>
          <div class="card-subtitle text-center">${this.position}</div>
          <div class="card-text text-center">
            <a href="mailto:${this.email}">Email</a>
            ${input}
          </div>
        </div>
      </div>`;
  }

  renderSpecificHTML() {
    return;
  }
}

module.exports = Employee;
