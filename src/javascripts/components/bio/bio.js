import $ from 'jquery';
import './bio.scss';
import utilities from '../../helpers/utilities';
import myImage from '../../../images/MyPhoto.jpg';

const displayBio = (e) => {
  $('#bioPage').removeClass('hide');
  $('#technologiesPage').addClass('hide');
  $('#projectsPage').addClass('hide');
  console.log(e.target.id);
};

const displayTech = () => {
  $('#technologiesPage').removeClass('hide');
  $('#projectsPage').addClass('hide');
  $('#bioPage').addClass('hide');
};

const displayProjects = () => {
  $('#technologiesPage').addClass('hide');
  $('#projectsPage').removeClass('hide');
  $('#bioPage').addClass('hide');
};

const printBio = () => {
  const domString = `
  <img src=${myImage}>
  <div id="text">
    <p>Born on a farm in the middle of nowhere, Wisconsin, I spent the majority of my youth splitting my attention between the great outdoors, art, and computers. I wrote my first program, a simple text based adventure game, in Basic at the tender age of eight. It sparked a love for programming within me that never went away. In middle school I picked up HTML and built a multitude of websites on Geocities and by high school I was learning Visual Basic and C++. 
    </p>
    <p>For whatever reason, I decided to set coding aside and persue art and Japanese langauge in college. I graduated from the University of Minnesota with a degree in Japanese Language and Literature right at the start of the second major economic crash of the early 2000's. As a result, work within my field was scarce and I ended up working a variety of unfulfilling jobs to pay the bills.</p>
    <p id="lastSegment">I have recently rekindled my love of computer technology, and have decided that it is time that I follow that path. I love the problem solving and challenges that development provides me, as well as the joy of creating something that can be shared with the world. Development allows me to actively use both my creative and intellectual energies.</p>
  </div>`;
  utilities.printToDom('bioPage', domString);
  $('body').on('click', '#navToBio', displayBio);
  $('body').on('click', '#navToTech', displayTech);
  $('body').on('click', '#navToProjects', displayProjects);
};

export default { printBio };
