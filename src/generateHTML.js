const generateManager = function (manager) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-150">
            <div class="card-header p-3 mb-2 bg-success text-white">
                <h3>${manager.name}</h3>
                <h3>Manager</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-150">
            <div class="card-header p-3 mb-2 bg-info text-white">
                <h3>${engineer.name}</h3>
                <h3>Engineer</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-150">
            <div class="card-header p-3 mb-2 bg-info text-white">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
}

function generateHTML(data)  {
    const organize = []; 
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            organize.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            organize.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            organize.push(internCard);
        }  
    }
    const employeeCards = page.join('')
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

};

const generateTeamPage = function (employeeCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
  </head>
  <body>
      <header>
          <nav>
              <span class="navbar-brand p-3 mb-2 bg-primary text-white mb-2 h1 w-100 text-center">Team Profile</span>
          </nav>
      </header>
      <main>
          <div>
              <div class="row justify-content-center">
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
`;
};

export default generateHTML;