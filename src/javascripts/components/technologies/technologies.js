import './technologies.scss';
import utilities from '../../helpers/utilities';

const printTechnologies = () => {
  const domString = `
  <h2 class="text-center">Tools and Technologies</h2>
  <div class="row" id="techIcons">
    <div class="col-sm-4"><i class="fab fa-html5" alt="HTML 5"></i> HTML5</div>
    <div class="col-sm-4"><i class="fab fa-css3-alt" alt="CSS"></i> CSS</div>
    <div class="col-sm-4"><i class="fab fa-js-square" alt="JavaScript"></i> JavaScript</div>
  </div>`;
  utilities.printToDom('technologiesPage', domString);
};

export default { printTechnologies };
