//$('body').addClass('hidden');

var navTargets = [];
var navCurr = 0;
var targetPadding = 140;
var prevScrollY = window.scrollY;

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


navTargets[navCurr].li.addClass('active');
navTargets[navCurr].obj.find('.title')
  .css('margin-top', '0px')
  .css('opacity', '1');

// Denote active nav link based on current window position
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
      navNext.obj.find('.title')
        .css('margin-top', '0px')
        .css('opacity', '1');
      navCurr++;
    }
  } else {
    //Scrolling up
    if(navCurr == 0)
      return;

    navNext = navTargets[navCurr - 1];
    if(window.scrollY < navActive.top) {
      navActive.li.removeClass('active');
      navNext.li.addClass('active');
      navCurr--;
    }
  }

  prevScrollY = window.scrollY;
});

// Enable smooth, same-page navigation scrolling
$(function() {
  $('li a[href*="#"]').click(function() {
    var target = $(this.hash);
    var scrollLoc = (target.length ? target.offset().top : 0);
    $('body').animate({ scrollTop: scrollLoc }, {
      duration: 1000,
    });

    return false;
  });
});
