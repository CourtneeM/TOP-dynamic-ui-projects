const autoSlideshow = function () {
  setTimeout(function () {
    nextImg();
    autoSlideshow();
  }, 5000);
};


const nextImg = function () {
  const imgArray = Array.from(document.getElementsByClassName('img'));
  const progressCircles = Array.from(document.getElementById('img-progress').children);
  let currentImg = document.getElementById('current');
  let imgIndex = (Array.from(currentImg.parentNode.children)).indexOf(currentImg);
  if(!currentImg.nextElementSibling) {
    currentImg.removeAttribute('id');
    imgArray[0].id = 'current';
    progressCircles[0].id = 'current-slide-circle';
    progressCircles[imgIndex].removeAttribute('id');
  } else {
    currentImg.removeAttribute('id');
    currentImg.nextElementSibling.id = 'current';
    progressCircles[imgIndex].removeAttribute('id');
    progressCircles[imgIndex + 1].id = 'current-slide-circle';
  }
};

const previousImg = function () {
  const imgArray = Array.from(document.getElementsByClassName('img'));
  const progressCircles = Array.from(document.getElementById('img-progress').children);
  let currentImg = document.getElementById('current');
  let imgIndex = (Array.from(currentImg.parentNode.children)).indexOf(currentImg);
  if(!currentImg.previousElementSibling) {
    currentImg.removeAttribute('id');
    imgArray[imgArray.length - 1].id = 'current';
    progressCircles[progressCircles.length - 1].id = 'current-slide-circle';
    progressCircles[imgIndex].removeAttribute('id');
  } else {
    currentImg.removeAttribute('id');
    currentImg.previousElementSibling.id = 'current';
    progressCircles[imgIndex].removeAttribute('id');
    progressCircles[imgIndex - 1].id = 'current-slide-circle';
  };
};

const pickImage = function () {
  const imgArray = Array.from(document.getElementsByClassName('img'));
  const progressCircles = document.getElementById('img-progress');
  progressCircles.addEventListener('click', (e) => {
    if(e.target.tagName === 'P') {
      let index = Array.from(e.target.parentNode.children).indexOf(e.target);
      Array.from(progressCircles.children).forEach((circle) =>  {
        circle.removeAttribute('id');
      });
      imgArray.forEach((img) => {
        img.removeAttribute('id');
      });
      Array.from(progressCircles.children)[index].id = 'current-slide-circle';
      imgArray[index].id = 'current';
    };
  });
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

pickImage();
controls();
autoSlideshow();