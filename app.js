let img = document.querySelector('img');
let love = document.querySelector('i');
let like = document.querySelector('#like');

let isLiked = false;

img.addEventListener('dblclick', function (e) {

  if (!isLiked) {
    isLiked = true;

    //like button
    like.style.background ="linear-gradient(45deg, #fd1d1d, #e1306c, #c13584, #833ab4)";
    like.style.webkitBackgroundClip = "text";
    like.style.webkitTextFillColor = "transparent";
    //create hearts
    const heart1 = document.createElement('i'); 
    heart1.classList.add('ri-heart-3-fill', 'love', 'animate-heart');
    
    img.parentElement.appendChild(heart1);
    const createHeart = (size, left) => {
    const h = document.createElement('i');
    h.classList.add('ri-heart-3-fill', 'love', 'animate-heart');
    h.style.cssText = `
    font-size:${size}px;
    rotate:360deg;
    left:${left}; 
    top:50%;`;
    return h;
   };

img.parentElement.append(
  createHeart(50, '30%'),
  createHeart(50, '60%')
);


    [heart1, heart2, heart3].forEach(heart => {
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  });


  } else {
    isLiked = false;

    like.style.background = "none";
    like.style.webkitTextFillColor = "black";
  }
});



// img.addEventListener('dblclick',function(){
//   if(isLiked === false){
//      console.log("Love");
//   love.style.opacity = 1;
//   love.style.scale = '1';
//   love.style.rotate = '0deg';

//   love.classList.add("animate-heart");

//   // setTimeout(() => love.remove(), 1500);

//   like.style.background ="linear-gradient(45deg, #fd1d1d, #e1306c, #c13584, #833ab4)";
//   like.style.webkitBackgroundClip = "text";
//   like.style.webkitTextFillColor = "transparent";

//   isLiked = true;
//   }
//   else{
//       like.style.color = 'black';
//       isLiked = false;
//   }
// })