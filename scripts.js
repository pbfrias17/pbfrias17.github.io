var navTargets = [];
var navCurr = 0;

$.each($('.navTarget'), function(i, el) {
  navTargets.push({ obj: $(el), top: $(el).offset().top });
});

navTargets[navCurr].obj.toggleClass('active');
console.log(navTargets[navCurr].obj);

$(window).scroll(function() {
  var navActive = navTargets[navCurr].obj,
      navNext = navTargets[navCurr + 1].obj;

  if(window.scrollY >= navActive.offset().top) {
    console.log('still here1');
    if(window.scrollY >= navNext.offset().top) {
      navActive.toggleClass('active');
      navNext.toggleClass('active');
      navCurr++;
    } else {
      console.log('still here2');
    }
  } else {
    console.log(window.scrollY + ' < ' + navActive.offset().top);
  }
});

// Enable smooth, same-page navigation scrolling
$(function() {
  $('a[href*="#"]').click(function() {
    var target = $(this.hash);
    var scrollLoc = (target.length ? target.offset().top : 0);
    $('html, body').animate({
      scrollTop: scrollLoc
    }, 1000);

    return false;
  });
});
