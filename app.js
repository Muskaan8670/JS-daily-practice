const arr = [
  "Keep going",
  "You are doing great",
  "One step at a time",
  "Progress over perfection",
  "Small steps matter",
  "Stay consistent",
  "Believe in yourself",
  "Learning every day",
  "Don’t quit now",
  "You’ve got this"
];

document.addEventListener("click", (e) => {
    let z = Math.random()*361;
    let scl = Math.random()*3;

    let txt = Math.floor(Math.random()*arr.length); 
    let h1 = document.createElement('h1');
    h1.innerHTML = arr[txt];
    h1.style.position = 'absolute';
    h1.style.left = e.clientX + "px";
    h1.style.top = e.clientY + "px";
    h1.style.rotate = z+'deg';
    h1.style.scale = scl;
    console.log(h1);
    document.body.appendChild(h1);
})