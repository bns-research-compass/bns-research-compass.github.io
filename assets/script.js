  (function(){
    var root = document.documentElement;
    var btn = document.getElementById('themeToggle');
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    function current(){
      return root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
    }
    function label(){
      btn.textContent = current() === 'dark' ? 'Light mode' : 'Dark mode';
    }
    btn.addEventListener('click', function(){
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('rc-theme', next); } catch(e){}
      label();
    });
    media.addEventListener('change', label);
    label();
  })();
  document.getElementById('navToggle').addEventListener('click', function(){
    var links = document.getElementById('navLinks');
    var open = links.classList.toggle('open');
    this.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.navlinks a').forEach(function(a){
    a.addEventListener('click', function(){
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('navToggle').setAttribute('aria-expanded','false');
    });
  });
