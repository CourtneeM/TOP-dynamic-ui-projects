const dropDownMenu = document.getElementsByClassName('drop-down-menu');

Array.from(dropDownMenu).map((div) => div.addEventListener('click', () => {
  Array.from(div.children).map((choice) => {
    if(choice.classList.contains('hidden')) {
      choice.classList.add('visible');
      choice.classList.remove('hidden');
    };
  });
}));

document.addEventListener('click', (e) => {
  if(!e.target.classList.contains('drop-down-menu')) {
    Array.from(dropDownMenu).map((div) => {
      Array.from(div.children).map((choice) => {
        if(choice.classList.contains('visible')) {
          choice.classList.add('hidden');
          choice.classList.remove('visible');
        };
      });
    });
  };
});