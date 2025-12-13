// Scroll reveal
const reveals = document.querySelectorAll('.reveal');

function revealOnLoadAndScroll() {
  const trigger = window.innerHeight * 0.85;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('active');
    }
  });
}

// Run immediately on load
window.addEventListener('load', revealOnLoadAndScroll);

// Run on scroll
window.addEventListener('scroll', revealOnLoadAndScroll);


// Mobile menu
const burger=document.querySelector('.burger');
const navLinks=document.querySelector('.nav-links');
burger.addEventListener('click',()=>{
  navLinks.style.display=navLinks.style.display==='flex'?'none':'flex';
});

// Particle background
const canvas=document.getElementById('particles');
const ctx=canvas.getContext('2d');
let w,h,particles=[];
function resize(){w=canvas.width=window.innerWidth;h=canvas.height=window.innerHeight}
window.addEventListener('resize',resize);resize();

for(let i=0;i<60;i++){
  particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+1,vx:Math.random()-.5,vy:Math.random()-.5});
}

function animate(){
  ctx.clearRect(0,0,w,h);
  particles.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0||p.x>w) p.vx*=-1;
    if(p.y<0||p.y>h) p.vy*=-1;
    ctx.fillStyle='rgba(205,130,255,.6)';
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();
