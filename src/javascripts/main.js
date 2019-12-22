import 'bootstrap';
import firebase from 'firebase';
import '../styles/main.scss';
import bio from './components/bio/bio';
import '@fortawesome/fontawesome-free/js/all';
import contact from './components/contact/contact';

import myProjects from './components/projects/project';
import technologies from './components/technologies/technologies';

import apiKeys from './helpers/apiKeys.json';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  bio.printBio();
  myProjects.printProjects();
  contact.printConactInfo();
  technologies.printTechnologies();
};

init();
