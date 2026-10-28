(function(){
  var nav=document.querySelector('.wp-block-navigation'); if(!nav) return;
  var box=nav.querySelector('.wp-block-navigation__responsive-container');
  function open(){box.classList.add('is-menu-open','has-modal-open');document.documentElement.classList.add('has-modal-open');}
  function close(){box.classList.remove('is-menu-open','has-modal-open');document.documentElement.classList.remove('has-modal-open');}
  nav.querySelector('[data-nav-open]').addEventListener('click',open);
  nav.querySelector('[data-nav-close]').addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  nav.querySelectorAll('.wp-block-navigation-submenu__toggle').forEach(function(b){
    b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));});
  });
})();
