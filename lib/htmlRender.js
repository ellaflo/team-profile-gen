const path = require('path');
const fs = require('fs');
const templatesDir = path.resolve(__dirname, '../templates');

const render = employees => {
  const html = [];

  html.push(
    ...employees
      .filter(employee => employee.getRole() === 'Manager')
      .map(manager => renderManager(manager)).join('')
  );
  html.push(
    ...employees
      .filter(employee => employee.getRole() === 'Engineer')
      .map(engineer => renderEngineer(engineer)).join('')
  );
  html.push(
    ...employees
      .filter(employee => employee.getRole() === 'Intern')
      .map(intern => renderIntern(intern)).join('')
  );

  return renderMain(html.join(''));
};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'manager.html'), 'utf8');
  template = replacePlaceholders(template, 'name', manager.getName());
  template = replacePlaceholders(template, 'role', manager.getRole());
  template = replacePlaceholders(template, 'email', manager.getEmail());
  template = replacePlaceholders(template, 'id', manager.getId());
  template = replacePlaceholders(template, 'officeNumber', manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'engineer.html'), 'utf8');
  template = replacePlaceholders(template, 'name', engineer.getName());
  template = replacePlaceholders(template, 'role', engineer.getRole());
  template = replacePlaceholders(template, 'email', engineer.getEmail());
  template = replacePlaceholders(template, 'id', engineer.getId());
  template = replacePlaceholders(template, 'github', engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, 'intern.html'), 'utf8');
  template = replacePlaceholders(template, 'name', intern.getName());
  template = replacePlaceholders
}