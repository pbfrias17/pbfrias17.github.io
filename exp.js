$.support.transition = true;
var targetPadding = 250;
var coll_margin_top = $('.panel-title a h4').first().css('margin-top');
var target_margin = '5px';

$('a[data-parent="#exp-accordion"]').click(function() {
  var target = $(this.hash);
  target.collapse('toggle');
});

// adjust margin/padding when toggling collapsables
$('.panel-collapse.collapse').on('show.bs.collapse', function() {
  var href = $(this).attr('id');
  console.log($('a[href="#' + href + '"]').closest('.panel-heading'));
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
