import 'bootstrap';
import firebase from 'firebase';
import '../styles/main.scss';
import bio from './components/bio/bio';

import myProjects from './components/projects/project';

import apiKeys from './helpers/apiKeys.json';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  bio.printBio();
  myProjects.printProjects();
};

init();
