let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                dodocument.querySelector('header nav a[href *=' + id + ' ]').classList.add('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.onclick = () => {
  document.body.classList.toggle("light-mode");

  // Change the icon
  if (document.body.classList.contains("light-mode")) {
    themeIcon.classList.replace("bx-sun", "bx-moon");
  } else {
    themeIcon.classList.replace("bx-moon", "bx-sun");
  }

  // save preference in localStorage
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
};

// Apply saved theme on reload
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeIcon.classList.replace("bx-sun", "bx-moon");
}
