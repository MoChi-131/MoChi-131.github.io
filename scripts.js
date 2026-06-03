const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if(navToggle && navLinks){
  navToggle.addEventListener('click', ()=>{
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Close mobile nav when a link is clicked
  Array.from(navLinks.querySelectorAll('a')).forEach(a=>{
    a.addEventListener('click', ()=>{
      if(window.innerWidth <= 700){
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Highlight the current page in the nav
  const normalizePath = path => path.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
  const currentPath = normalizePath(window.location.pathname);
  Array.from(navLinks.querySelectorAll('a')).forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    const linkUrl = new URL(href, window.location.origin + window.location.pathname);
    const linkPath = normalizePath(linkUrl.pathname);
    if(linkPath === currentPath){
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // Smooth scroll for internal links (optional fallback if CSS not supported)
  Array.from(document.querySelectorAll('a[href^="#"]')).forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href && href.startsWith('#')){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth'});
        }
      }
    });
  });
}
