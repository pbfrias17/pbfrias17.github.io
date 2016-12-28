$.support.transition = true;
var targetPadding = 250;

$('a[data-parent="#exp-accordion"]').click(function() {
  var target = $(this.hash);
  target.collapse('toggle');
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
