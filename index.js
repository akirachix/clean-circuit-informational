const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navMenu = document.getElementById('navMenu');
const link1=document.getElementById('link1');
const link2=document.getElementById('link2');
const link3=document.getElementById('link3');
const link4=document.getElementById('link4');
openMenu.addEventListener('click', () => {
  navMenu.classList.add('active');
 
});
 
closeMenu.addEventListener('click', () => {
  
  navMenu.classList.remove('active');
 
});

link1.addEventListener('click',()=>{
  navMenu.classList.remove('active')
});
link2.addEventListener('click',()=>{
  navMenu.classList.remove('active')
});
link3.addEventListener('click',()=>{
  navMenu.classList.remove('active')
});
link4.addEventListener('click',()=>{
  navMenu.classList.remove('active')
});