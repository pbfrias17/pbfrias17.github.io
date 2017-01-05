$.support.transition = true;
var targetPadding = 250;
var coll_margin_top = $('.panel-title a h4').first().css('margin-top');
var target_margin = '5px';

$('a[data-parent="#exp-accordion"]').click(function() {
  var target = $(this.hash);
  target.collapse('toggle');
  
  // this needs to toggle as well...
  $(this).find('h4').css({'margin-top': '0px', 'margin-bottom': '0px'});
});

// keep track of all navigation targets and initialize
$.each($('.navTarget'), function(i, el) {
  // #top is a special-case
  var href = (i != 0) ? $(el).attr('id') : '';
  var top = ($(el).offset().top != 0) ? $(el).offset().top - targetPadding : 0;

  navTargets.push({
    obj: $(el),
    top: top,
    li: $('a[href="#'+href+'"]').parent()
  });

  if(window.scrollY >= $(el).offset().top) {
    navCurr = i;
  }
});
