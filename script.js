const navSlide=()=>{
  const burger=document.querySelector('.burger')
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');
// Toggle Nav
  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  });
  // Animate Links
  navLinks.forEach((link,index)=>{
  link.style.animation='navLinkFade 0.5s ease forwards'
  });

}
navSlide();

window.addEventListener('scroll', function () {
            let header = document.querySelector('div');
            let windowPosition = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowPosition);
});
