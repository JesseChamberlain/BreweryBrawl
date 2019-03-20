import '../sass/style.scss';
import Icon from '../img/logo.png';
import TaranImageSrc from '../img/taran.jpg';
import gravityTapImageSrc from '../img/GravityTap.jpg'

// This is a test function to make sure webpack has compiled assets
function buildBody() {
    let element = document.createElement('div');

    element.innerHTML = 'Brought to you by the Domain.com team.';

    // Add the image to our existing div.
    let myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    document.getElementById('header-link').appendChild(myIcon);

    return element;
}

document.body.appendChild(buildBody());

function createTaranImage() {
    let taran = new Image();
    taran.src = TaranImageSrc;

    return taran;
}

let taranDiv = document.getElementById('taran');
if (taranDiv) {
    taranDiv.appendChild(createTaranImage());
}

function beerHistoryImage() {
    let gravityTap = new Image();
    gravityTap.src = gravityTapImageSrc;

    return gravityTap;
}

let beerHistoryDiv = document.getElementById('gravityTap');
if (beerHistoryDiv) {
    beerHistoryDiv.appendChild(beerHistoryImage());
}
