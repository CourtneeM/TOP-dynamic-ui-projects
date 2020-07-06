const autoSlideshow = function() {
  setTimeout(function() {
    nextImg();
    autoSlideshow();
  }, 5000);
};


const nextImg = function() {
  const imgArray = Array.from(document.getElementsByClassName('img'));
  let currentImg = document.getElementById('current');
  if(!currentImg.nextElementSibling) {
    currentImg.removeAttribute('id');
    imgArray[0].id = 'current';
  } else {
    currentImg.removeAttribute('id');
    currentImg.nextElementSibling.id = 'current';
  }
};

const previousImg = function() {
  const imgArray = Array.from(document.getElementsByClassName('img'));
  let currentImg = document.getElementById('current');
  if(!currentImg.previousElementSibling) {
    currentImg.removeAttribute('id');
    imgArray[imgArray.length - 1].id = 'current';
  } else {
    currentImg.removeAttribute('id');
    currentImg.previousElementSibling.id = 'current';
  };
};

const controls = function () {
  const nextImgBtn = document.getElementById('next-img-btn');
  nextImgBtn.addEventListener('click', () => {
    nextImg();
  });
  
  const previousImgBtn = document.getElementById('previous-img-btn');
  previousImgBtn.addEventListener('click', () => {
    previousImg();
  });
};


controls();
autoSlideshow();