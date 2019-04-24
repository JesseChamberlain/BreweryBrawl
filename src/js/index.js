import '../sass/style.scss';
import logoImageSrc from '../img/logo.png';
import taranImageSrc from '../img/taran.jpg';
import gravityTapImageSrc from '../img/GravityTap.jpg';
import bacCalculator from './modules/bacCalculator';
import imageImporter from './modules/imageImporter';

// Set the images to their imports and id
let images = [
    [taranImageSrc, 'taran'],
    [gravityTapImageSrc, 'gravityTap'],
    [logoImageSrc, 'header-link']
];

// This is a test function to make sure webpack has compiled assets
function buildBody() {
    let element = document.createElement('div');
    element.innerHTML = 'Brought to you by the Domain.com team.';

    return element;
}

document.body.appendChild(buildBody());

// Load images to imageImporter
imageImporter(images);

// Load blood alcohol content calculator
bacCalculator();
