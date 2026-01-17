let btn = document.querySelector('button');
let main = document.querySelector('.main');

btn.addEventListener('click', function(){
    let x = Math.random()*90;
    let y = Math.random()*90;
    let z = Math.random()*361;
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let div = document.createElement('div');
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    div.style.position = 'absolute';
    div.style.left = x+'%';
    div.style.top = y+'%'; 
    div.style.rotate = z+'deg';
    console.log(div);
    main.appendChild(div);
})