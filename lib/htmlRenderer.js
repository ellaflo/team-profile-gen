// function to generate HTML for a single team member card
function generateMemberCard(member) {
    return `
      <div class="card">
        <h2>${member.name}</h2>
        <h3>${member.role}</h3>
        <ul>
          <li>ID: ${member.id}</li>
          <li>Email: <a href="mailto:${member.email}">${member.email}</a></li>
          ${member.role === "Manager" ? `<li>Office Number: ${member.officeNumber}</li>` : ""}
          ${member.role === "Engineer" ? `<li>GitHub: <a href="https://github.com/${member.github}" target="_blank">${member.github}</a></li>` : ""}
          ${member.role === "Intern" ? `<li>School: ${member.school}</li>` : ""}
        </ul>
      </div>
    `;
  }
  
  // function to generate overall HTML page with all team member cards
  function generateHTML(teamMembers) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <style>
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
          h1, h2, h3 {
            margin-top: 20px;
            margin-bottom: 10px;
            text-align: center;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 20px;
          }
          .card {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            margin: 10px;
            padding: 20px;
            width: 300px;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <h1>My Team</h1>
        <div class="container">
          ${teamMembers.map(generateMemberCard).join("")}
        </div>
      </body>
      </html>
    `;
  }
  
  module.exports = generateHTML;
  