const menuBtn = document.getElementById('menu').firstElementChild;
const menuItems = document.querySelector('ul');
menuBtn.addEventListener('click', () => {
  if(menuItems.classList.contains('hidden')) {
    menuItems.classList.add('visible');
    menuItems.classList.remove('hidden');
  } else {
    menuItems.classList.add('hidden');
    menuItems.classList.remove('visible');
  }
});

const screen = document.querySelector('section');
screen.addEventListener('click', (e) => {
  if(e.target !== menuBtn) {
    if(!(e.target.parentNode.classList.contains('visible'))) {
      menuItems.classList.add('hidden');
      menuItems.classList.remove('visible');
    }
  }
})