const projects = [
    {
    title: "Scone Recipe Calculator", 
    screenshot: "./images/sconecalc.png", 
    description: "This calculator was created for bakers at Panera Bread in order to allow them to calculate the recipe for add-on catering orders.",
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://scone-calculator.000webhostapp.com/", 
    githubUrl: "https://github.com/LaCollins/sconeCalculator"
  }
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const createProjectCards = (projectArray) => {
    let domString = '';
    for (let i= 0; i < projectArray.length; i++) {
        const projectCard = projectArray[i];
        domString += `
        <div class="card">
            <h3>${projectCard.title}</h3>
            <img src="${projectCard.screenshot}">
            <p>${projectCard.description}</p>
            <p>Technologies Used: ${projectCard.technologiesUsed}</p>
            <a href="${projectCard.url}">Project Link</a>
            <a href="${projectCard.githubUrl}"><i id="smallGH" class="fab fa-github"></i>GitHub</a>
            `;
    }
    printToDom(domString, 'projectsPage');
}

createProjectCards(projects);