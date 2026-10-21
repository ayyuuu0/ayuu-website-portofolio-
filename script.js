const body=document.body;
const header=document.querySelector('.site-header');
const menuToggle=document.querySelector('.menu-toggle');
const navMenu=document.querySelector('.nav-menu');
const themeToggle=document.querySelector('.theme-toggle');
const backTop=document.querySelector('.back-top');

lucide.createIcons();

menuToggle?.addEventListener('click',()=>{
  const open=navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.innerHTML=open?'<i data-lucide="x"></i>':'<i data-lucide="menu"></i>';
  lucide.createIcons();
});

document.querySelectorAll('.nav-menu a').forEach(a=>a.addEventListener('click',()=>{
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
  menuToggle.innerHTML='<i data-lucide="menu"></i>';
  lucide.createIcons();
}));

const savedTheme=localStorage.getItem('ayu-theme');
if(savedTheme==='dark') body.classList.add('dark');
function updateThemeIcon(){themeToggle.innerHTML=body.classList.contains('dark')?'<i data-lucide="sun"></i>':'<i data-lucide="moon"></i>';lucide.createIcons();themeToggle.setAttribute('aria-label',body.classList.contains('dark')?'Aktifkan light mode':'Aktifkan dark mode')}
updateThemeIcon();
themeToggle?.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('ayu-theme',body.classList.contains('dark')?'dark':'light');updateThemeIcon()});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',window.scrollY>12);
  backTop.classList.toggle('show',window.scrollY>650);
},{passive:true});
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
