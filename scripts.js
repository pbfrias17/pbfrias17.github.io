var navTargets = [];
var navCurr = 1;
var prevScrollY = window.scrollY;
console.log(prevScrollY);

$.each($('.navTarget'), function(i, el) {
  navTargets.push({
    obj: $(el),
    top: $(el).offset().top,
    li: $('a[href="#'+$(el).attr('id')+'"]').parent()
  });
});


navTargets[navCurr].li.addClass('active');
console.log(navTargets[1]);

// Represent active nav link based on current window position
$(window).scroll(function() {
  var navActive = navTargets[navCurr]
  var navNext = '';

  if(window.scrollY >= prevScrollY) {
    //Scrolling down
    if(navCurr == navTargets.length - 1)
      return;

    navNext = navTargets[navCurr + 1];
    if(window.scrollY >= navNext.top) {
      navActive.li.removeClass('active');
      navNext.li.addClass('active');
      navCurr++;
    }
  } else {
    //Scrolling up
    if(navCurr == 0)
      return;

    navNext = navTargets[navCurr - 1];
    if(window.scrollY <= navActive.top) {
      navActive.li.removeClass('active');
      navNext.li.addClass('active');
      navCurr--;
    }
  }

  prevScrollY = window.scrollY;
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
