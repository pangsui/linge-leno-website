document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const navbarMenu = document.querySelector('.navbar__mobile-menu-items');
  const videoButton = document.querySelector('.preview__video-button');
  const modal = document.getElementById('videoModal');
  const videoToPlay = document.getElementById('videoPlayer');
  const modalClose = document.querySelector('.modal__close-button');
  const mobileMenuUl = document.querySelector('.navbar__mobil-menu-list');

  toggleButton.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
  });

  // Modal video player
  videoButton.addEventListener('click', function (e) {
    // show model when button is clicked
    modal.style.display = 'block';
    //show video source
    videoToPlay.src = 'https://www.youtube.com/embed/aKJKQLe-ohU';
  });
  //close modal when cross button is clicked
  modalClose.addEventListener('click', function (event) {
    modal.style.display = 'none';
    videoToPlay.src = '';
  });
  //close modal on outer click
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      videoToPlay.src = '';
    }
  });
  // nav bar backgroud
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('navbar--scroll');
    } else {
      navbar.classList.remove('navbar--scroll');
    }

    //mobile menu disappear when click on any of the items
    navbarMenu.addEventListener('click', function (e) {
      navbarMenu.classList.remove('active');
    });
  });

  // animation by revealing sections
  const allsections = document.querySelectorAll('.section');

  const obsCallback = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    // observer.unobserve(entry.target);
  };
  const observer = new IntersectionObserver(obsCallback, {
    root: null,
    threshold: 0.15, //section reveal when it is 15% visible
  });
  allsections.forEach(function (sect) {
    observer.observe(sect);
    sect.classList.add('section--hidden');
  });
});
