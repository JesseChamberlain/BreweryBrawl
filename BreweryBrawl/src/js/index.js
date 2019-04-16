import '../sass/style.scss';

// This is a test function to make sure webpack has compiled assets
function buildBody() {
    let element = document.createElement('div');

    element.innerHTML = 'Brought to you by the Domain.com team.';
    element.classList.add('greeting');
    return element;
}

document.body.appendChild(buildBody());
