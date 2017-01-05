// BLUR
$(window).scroll(function() {
  var filterVal = window.scrollY / 95;
  if(filterVal > 10)
    filterVal = 10;

  var filterStr = 'blur(' + filterVal +'px) saturate(125%)';

  $('#background-img')
    .css('filter',filterStr)
    .css('webkitFilter',filterStr)
    .css('mozFilter',filterStr)
    .css('oFilter',filterStr)
    .css('msFilter',filterStr);

  // simple parallax scrolling
  $('#background-img').css('top',-window.scrollY * .03);
});

// entrance animations for each page
