import '../sass/style.scss';
import logoImageSrc from '../img/logo.png';
import taranImageSrc from '../img/taran.jpg';
import gravityTapImageSrc from '../img/GravityTap.jpg';
import imageImporter from './modules/imageImporter';

// This is a test function to make sure webpack has compiled assets
function buildBody() {
    let element = document.createElement('div');
    element.innerHTML = 'Brought to you by the Domain.com team.';

    return element;
}

document.body.appendChild(buildBody());

// // Uses imageImporter to import the required images to their elements
// imageImporter(taranImageSrc, 'taran');
// imageImporter(gravityTapImageSrc, 'gravityTap');
// imageImporter(logoImageSrc, 'header-link');

let images = [
    [taranImageSrc, 'taran'],
    [gravityTapImageSrc, 'gravityTap'],
    [logoImageSrc, 'header-link']
];

imageImporter(images);
