'use strict';

const targetElement = document.querySelector('#target');

targetElement.classList.add('my-list');

targetElement.innerHTML = `
    <li>first item</li>
    <li>second item</li>
    <li>third item</li>
`;
targetElement.classList.add('my-list');