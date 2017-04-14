/*!
 * Contact Buttons Plugin Demo 0.1.0
 * https://github.com/joege/contact-buttons-plugin
 *
 * Copyright 2015, José Gonçalves
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 
(function ($) {
  'use strict';

  // Main function
  $.shareButtons = function( options ){
    
    // Define the defaults
    var defaults = { 
      effect  : '', // slide-on-scroll
      buttons : {
        'HOME':   { class: 'glyphicon glyphicon-home', use: true, link: 'index.html', extras: 'target="_blank"', title:'HOME' },
    'SUPPORT US':   { class: 'glyphicon glyphicon-thumbs-up', target:'#supportusModel', toggle:'model', use: true, link: 'support-us-model.html', title:'SUPPORT US' },
    'FEEDBACK':     { class: 'glyphicon glyphicon-comment',   target:'#feedbackModel', toggle:'modal', use: true, link: 'feedback-model.html', title:'FEEDBACK' },
    'CONTACT US':   { class: 'glyphicon glyphicon-map-marker', target:'#myModal', toggle:'modal', use: true, link: 'contact-us-model.html', title: 'CONTACT US' },
    'PHONE':      { class: 'glyphicon glyphicon-earphone',    use: true, link: 'tel:+000', title: 'CALL US' },
    'EMAIL':      { class: 'glyphicon glyphicon-envelope', id:'mail',    use: true, link: 'model.html', title:'EMAIL US' }
      }
    };


    $('#ls-modal').click(function(){
      alert("Hello");
    })

    // Merge defaults and options
    var s,
        settings = options;
    for (s in defaults.buttons) {
      if (options.buttons[s]) {
        settings.buttons[s] = $.extend( defaults.buttons[s], options.buttons[s] );
      }
    }
    
    // Define the container for the buttons
    var oContainer = $("#contact-buttons-bar");

    // Check if the container is already on the page
    if ( oContainer.length === 0 ) {
      
      // Insert the container element
      $('body').append('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
                            '<div class="modal-dialog">'+
                                '<div class="modal-content">'+
                                    '<div class="modal-header"></div>'+
                                  '<div class="modal-body"><div class="te"></div></div>'+
                                  '<div class="modal-footer"></div>'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                            '<div class="modal fade" id="feedbackModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
                            '<div class="modal-dialog">'+
                                '<div class="modal-content">'+
                                    '<div class="modal-header"></div>'+
                                  '<div class="modal-body"><div class="te"></div></div>'+
                                  '<div class="modal-footer"></div>'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                            '<div class="modal fade" id="supportusModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
                            '<div class="modal-dialog">'+
                                '<div class="modal-content">'+
                                    '<div class="modal-header"></div>'+
                                  '<div class="modal-body"><div class="te"></div></div>'+
                                  '<div class="modal-footer"></div>'+
                                '</div>'+
                              '</div>'+
                            '</div>'+
                          '<div id="contact-buttons-bar">');





























      
      // Get the just inserted element
      oContainer = $("#contact-buttons-bar");
      
      // Add class for effect
      oContainer.addClass(settings.effect);
      
      // Add show/hide button
      var sShowHideBtn = '<button class="contact-button-link show-hide-contact-bar"><span class="fa fa-angle-left"></span></button>';
      oContainer.append(sShowHideBtn);
      
      var i;
      for ( i in settings.buttons ) {
        var bs = settings.buttons[i],
            sLink = bs.link,
            active = bs.use;
        
        // Check if element is active
        if (bs.use === true) {
          
          // Change the link for phone and email when needed
          if (bs.type === 'phone') {
            sLink = 'tel:' + bs.link;
          } else if (bs.type === 'email') {
            sLink = 'mailto:' + bs.link;
          }
          
          // Insert the links
          var sIcon = '<span class="fa fa-' + bs.icon + '"></span>',
              sButton = '<a href="' + sLink + 
                          '"target="_self" data-target="'+bs.target+'" data-toggle="'+bs.toggle+'" id="'+bs.id+'" class="contact-button-link cb-ancor ' + bs.class + '" ' + 
                          (bs.title ? 'title="' + bs.title + '"' : '') + 
                          (bs.extras ? bs.extras : '') + 
                          '>' + sIcon + '</a>';
          oContainer.append(sButton);
        }
      }
      
      // Make the buttons visible
      setTimeout(function(){
        oContainer.animate({ left : 0 });
      }, 200);
      
      // Show/hide buttons
      $('body').on('click', '.show-hide-contact-bar', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        $('.show-hide-contact-bar').find('.fa').toggleClass('fa-angle-right fa-angle-left');
        oContainer.find('.cb-ancor').toggleClass('cb-hidden');
      });
    }
  };
  
  // Slide on scroll effect
  $(function(){
    
    // Define element to slide
    var el = $("#contact-buttons-bar.slide-on-scroll");
    
    // Load top default
    el.attr('data-top', el.css('top'));





    
    // Listen to scroll
    $(window).scroll(function() {
      clearTimeout( $.data( this, "scrollCheck" ) );
      $.data( this, "scrollCheck", setTimeout(function() {
        var nTop = $(window).scrollTop() + parseInt(el.attr('data-top'));
        el.animate({
          top : nTop
        }, 500);
      }, 250) );
    });
  });
  
 }( jQuery ));