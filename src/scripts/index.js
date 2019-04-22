// libs
//-------------------------------------------------------
window.$ = window.jQuery = require('jquery');

require('./libs/index');

// utils
//----------------------------------------------
require('./utils/index');

//----------------------------------------------

require('./components/header');
require('./components/modal');

$(document).ready(function () {
	$('.js-example-basic-single').select2();
});

import '../styles/index.scss';
