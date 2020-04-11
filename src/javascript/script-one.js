import '../css/script-one.scss';

import secondHeadline from './script-two';

import $ from 'jquery';

$(document).ready(() => {
  $('body').append(`<div class="second-headline">${secondHeadline}</div>`);
});

export default "Hmm... then I'm the third, I guess!?";