import './contact.scss';
import utilities from '../../helpers/utilities';

const printConactInfo = () => {
  const domString = `
  <a href="mailto:laura.e.collins1@gmail.com">e-mail</a>
  <a href="https://github.com/LaCollins" target="_blank"><i class="fab fa-github fa-2x"></i></a>
  <a href="https://www.facebook.com/DawnZerlyDesigns/" target="_blank"><i class="fab fa-facebook fa-2x"></i></a>
  <a href="https://www.deviantart.com/mrinx" target="_blank"><i class="fab fa-deviantart fa-2x" alt="DeviantArt"></i></a>`;
  utilities.printToDom('page-footer', domString);
};

export default { printConactInfo };
