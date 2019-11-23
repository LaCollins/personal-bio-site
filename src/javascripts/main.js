import 'bootstrap';
import bio from './components/bio/bio';
import '../styles/main.scss';
import myProjects from './components/projects/project';


const init = () => {
  bio.printBio();
  myProjects.printProjects(projects);
};

init();
