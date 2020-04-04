require('../css/reset.css');
require('../css/style.scss');
require('../css/index.scss');

/**
 * JavaScript module requirers have to be below the stylesheet imports.
 * Otherwise stylesheets which will come with other modules
 * will be added before the main stylesheets. 
 * **/ 

// Make JQuery globally available before the other module calls,
// then it's available in the other modules without having to require it. 
window.$ = window.JQuery = require('jquery');

const thirdHeadline = require('./script-one');

$(document).ready(() => {
  $('body').append(`<div class="third-headline">${thirdHeadline}</div>`);
  
  $('body').append(`<div class="fourth-headline">
    I just like to be here for making things more colorful!</div>`
  );
});

