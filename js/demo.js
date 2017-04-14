/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
// Google Fonts
WebFontConfig = {
  google: { families: [ 'Lato:400,700,300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Initialize Share-Buttons
$.shareButtons({
  effect  : 'slide-on-scroll',
  buttons : {
    'HOME':   { class: 'glyphicon glyphicon-home', use: true, link: 'index.html', extras: 'target="_blank"', title:'HOME' },
    'SUPPORT US':   { class: 'glyphicon glyphicon-thumbs-up', target:'#supportusModel', toggle:'modal', use: true, link: 'support-us-model.html', title:'SUPPORT US' },
    'FEEDBACK':     { class: 'glyphicon glyphicon-comment',  target:'#feedbackModel', toggle:'modal', use: true, link: 'feedback-model.html', title:'FEEDBACK' },
    'CONTACT US':   { class: 'glyphicon glyphicon-map-marker', target:'#myModal', toggle:'modal', use: true, link: 'contact-us-model.html', title: 'CONTACT US' },
    'PHONE':      { class: 'glyphicon glyphicon-earphone separated',    use: true, link: 'tel:+91 11 4105 8454', title: 'CALL US' },
    'EMAIL':      { class: 'glyphicon glyphicon-envelope', id:'mail',  use: true, link: 'model.html', title:'EMAIL US' }
  }
});