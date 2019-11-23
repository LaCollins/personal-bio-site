// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';

const printProjects = () => new Promise((resolve, reject) => {
  let domString = '';
  projectData.getProjectData()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `
        <div class="card col-sm-4">
            <h3>${project.title}</h3>
            <img src="${project.screenshot}" alt="${project.title}">
            <p>${project.description}</p>
            <p><strong>Technologies Used:</strong> ${project.technologiesUsed}</p>
            <a href="${project.url}" target="_blank">Project Link</a>
            <a href="${project.githubUrl}" target="_blank"><i id="smallGH" class="fab fa-github"></i>GitHub</a>
        </div>
            `;
        domString += '</div>';
      });
      utilities.printToDom('projectsPage', domString);
    })
    .catch((error) => reject(error));
});

// const printProjects = (projectArray) => {
//   let domString = '';
//   for (let i = 0; i < projectArray.length; i += 1) {
//     if (projectArray[i].available) {
//       domString = '<div class="row">';
//       const projectCard = projectArray[i];
//       domString += `
//                 <div class="card col-sm-4">
//                     <h3>${projectCard.title}</h3>
//                     <img src="${projectCard.screenshot}" alt="${projectCard.title}">
//                     <p>${projectCard.description}</p>
//                     <p><strong>Technologies Used:</strong> ${projectCard.technologiesUsed}</p>
//                     <a href="${projectCard.url}" target="_blank">Project Link</a>
//                     <a href="${projectCard.githubUrl}" target="_blank"><i id="smallGH" class="fab fa-github"></i>GitHub</a>
//                 </div>
//                     `;
//       domString += '</div>';
//     }
//   }
//   utilities.printToDom('projectsPage', domString);
// };

export default { printProjects };
