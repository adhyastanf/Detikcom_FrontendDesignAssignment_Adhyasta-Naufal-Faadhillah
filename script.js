let isAnimationInProgress = false;

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarIcon = document.querySelector('.navbar-toggler-icon');

navbarToggler.addEventListener('click', () => {
  if (!isAnimationInProgress) {
    isAnimationInProgress = true;

    navbarIcon.classList.toggle('menu-toggle');

    setTimeout(() => {
      isAnimationInProgress = false;
    }, 300);
  }
});
