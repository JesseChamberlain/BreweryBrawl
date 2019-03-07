import _ from 'lodash';
import '../sass/style.scss';
import Icon from '../img/logo.png';

// This is a test function to make sure webpack has compiled assets
function component() {
    let element = document.createElement('div');

    element.innerHTML = 'Brought to you by the Domain.com team.';

       // Add the image to our existing div.
   var myIcon = new Image();
   myIcon.src = Icon;

   element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());
