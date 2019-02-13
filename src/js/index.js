import _ from 'lodash';

// This is a test function to make sure webpack has compiled assets
function component() {
    let element = document.createElement('div');

    element.innerHTML = 'Brought to you by the Domain.com team.';

    return element;
}

document.body.appendChild(component());
