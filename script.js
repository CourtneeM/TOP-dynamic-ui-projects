// when arrow is clicked, move to next sibling, if no next sibling, go back to start

const autoSlideshow = function() {
  const imgs = document.getElementsByClassName('img');
  Array.from(imgs).forEach((img) => {
    if(img.id === 'current') {
      console.log('doggie');
      setTimeout(function() {
        if(!img.nextElementSibling) {
          console.log('aay');
          img.removeAttribute('id');
          imgs[0].id = 'current';
          autoSlideshow();
        };
      }, 5000);
      if(img.nextElementSibling) {
        setTimeout(function() {
          img.removeAttribute('id');
          img.nextElementSibling.id = 'current';
          autoSlideshow();
        }, 5000);
      };
    };
  });
};

const nextImg = function() {
  const nextImgBtn = document.getElementById('next-img-btn');
  const imgArray = Array.from(document.getElementsByClassName('img'));
  nextImgBtn.addEventListener('click', () => {
    let currentImg = document.getElementById('current');
    if(!currentImg.nextElementSibling) {
      currentImg.removeAttribute('id');
      imgArray[0].id = 'current';
    } else {
      currentImg.removeAttribute('id');
      currentImg.nextElementSibling.id = 'current';
    }
  });
};

const previousImg = function() {
  const previousImgBtn = document.getElementById('previous-img-btn');
  const imgArray = Array.from(document.getElementsByClassName('img'));
  previousImgBtn.addEventListener('click', () => {
    let currentImg = document.getElementById('current');
    if(!currentImg.previousElementSibling) {
      currentImg.removeAttribute('id');
      imgArray[imgArray.length - 1].id = 'current';

    } else {
      currentImg.removeAttribute('id');
      currentImg.previousElementSibling.id = 'current';
    };
  });
};

previousImg();
nextImg();
//autoSlideshow();