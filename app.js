const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Frontend Developer",
    description: "Passionate about building clean and responsive user interfaces using modern web technologies.",
  },
  {
    fullName: "Nisha Roy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Designs intuitive user experiences with a strong focus on accessibility and aesthetics.",
  },
  {
    fullName: "Rahul Verma",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Backend Developer",
    description: "Specializes in building secure and scalable server-side applications.",
  },
  {
    fullName: "Sneha Das",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Content Creator",
    description: "Creates engaging content around technology, productivity, and personal growth.",
  },
  {
    fullName: "Arjun Patel",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "Data Analyst",
    description: "Transforms raw data into meaningful insights to support better decision-making.",
  }
];

let sum ='';
users.forEach(function(e){
  sum = sum + `<div class="card">
         <img src=${e.image} alt="">
         <h3>${e.fullName}</h3>
         <h4>${e.profession}</h4>
         <p>${e.description}}</p>
      </div>`

})

let main = document.querySelector('main');
main.innerHTML = sum;

