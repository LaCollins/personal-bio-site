import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';
import './projects.scss';

const printProjects = () => new Promise((resolve, reject) => {
  let domString = '';
  projectData.getProjectData()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `
        <div class="card col-sm-4 projectCard">
            <h3>${project.title}</h3>
            <div id="imageContainer" class="mt-3">
            <img src="${project.screenshot}" alt="${project.title}">
            </div>
            <div class="container mt-3 mb-3">${project.description}</div>
            <div><strong>Technologies Used:</strong> ${project.technologiesUsed}</div>
            <a href="${project.url}" target="_blank">Project Link</a>
            <a href="${project.githubUrl}" target="_blank"><i class="githubProj fab fa-github"></i> GitHub</a>
        </div>
            `;
        domString += '</div>';
      });
      utilities.printToDom('projectsPage', domString);
    })
    .catch((error) => reject(error));
});


export default { printProjects };
