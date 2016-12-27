$.support.transition = true;

$('a[data-parent="#exp-accordion"]').click(function() {
  var target = $(this.hash);
  target.collapse('toggle');
});
