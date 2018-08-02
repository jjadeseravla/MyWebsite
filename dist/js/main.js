//Select DOM items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-items');

//Set initial state of menu (the overlay)
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menuBtn.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(otem => item.classList.add('show'));
    //Reset menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menuBtn.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(otem => item.classList.remove('show'));
    //Reset menu state
    showMenu = false;
  }
}
