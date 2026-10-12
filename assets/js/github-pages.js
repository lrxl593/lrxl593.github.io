/* URL navigation and publication filtering for the static copy. */
$(function () {
  var links = document.querySelectorAll('.nav__item a');
  var panels = document.querySelectorAll('.content .tabcontent');
  function showTab(hash) {
    var panel = document.getElementById(hash.slice(1));
    if (!panel || !panel.classList.contains('tabcontent')) return;
    panels.forEach(function (item) {
      var active = item === panel;
      item.classList.toggle('active', active);
      item.style.display = active ? 'block' : 'none';
    });
    links.forEach(function (link) {
      var active = link.getAttribute('href') === hash;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    $(document.body).trigger('sticky_kit:recalc');
  }
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      var hash = link.getAttribute('href');
      if (location.hash !== hash) history.pushState(null, '', hash);
      showTab(hash);
    });
  });
  window.addEventListener('popstate', function () { showTab(location.hash || '#about-tab'); });
  window.addEventListener('hashchange', function () { showTab(location.hash || '#about-tab'); });
  showTab(location.hash || '#about-tab');

  // These items are full year lists, so filtering doesn't require masonry.
  $('.select').off('click', 'ul>li').on('click', 'li[data-filter]', function (event) {
    event.preventDefault();
    var filter = this.getAttribute('data-filter');
    document.querySelectorAll('.js-filter-container > ul').forEach(function (list) {
      list.hidden = filter !== '*' && !list.matches(filter);
    });
    $('.filter__item, .filter__link').removeClass('active');
    $(this).addClass('active').find('a').addClass('active');
    $(this).closest('.select').removeClass('is-open').find('.placeholder').text($(this).text());
    $(document.body).trigger('sticky_kit:recalc');
  });
  document.querySelector('.back-to-top').setAttribute('aria-label', 'Back to top');
});
