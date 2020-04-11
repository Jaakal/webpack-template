import '../css/script-two.scss';

import $ from 'jquery';

$(document).ready(() => {
  $('body').html('<div class="first-headline">I am THE headline!</div>');
});

export default 'Wait... am I then the Second Headline?';
