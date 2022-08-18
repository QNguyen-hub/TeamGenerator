const fs = require("fs");

class Team {
  constructor() {
    this.members = [];
  }

  addMember(member) {
    this.members.push(member);
  }

  renderTeamHTML() {
    return this.members
      .map((employee) => employee.renderSpecificHTML())
      .join("");
  }

  renderBaseHTML() {
    return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
          <title>Team</title>
        </head>
        <body>
          <h1 style="text-align:center">Here are your team.</h1>
          <div class="container row">
            ${this.renderTeamHTML()}
          </div
        </body>
      </html>
      `;
  }

  saveFile() {
    fs.writeFile("./dist/index.html", this.renderBaseHTML(), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Render Complete");
      }
    });
  }
}

module.exports = Team;
