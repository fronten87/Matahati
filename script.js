
    const header = document.querySelector('.site-header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 8);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    if (menuToggle && navLinks) menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      document.body.classList.toggle('menu-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
    });
    if (navLinks && menuToggle) navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka navigasi');
    }));

    const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();

    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach(item => observer.observe(item));
    } else {
      revealItems.forEach(item => item.classList.add('visible'));
    }
  
    document.querySelectorAll('.filter-btn').forEach(button => button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const category = button.dataset.filter;
      document.querySelectorAll('.food-card').forEach(card => {
        card.hidden = category !== 'all' && card.dataset.category !== category;
      });
    }));
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) reservationForm.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(reservationForm);
      const message = `Halo Mata Hati Cafe Blitar, saya ingin menanyakan reservasi.\nNama: ${data.get('name')}\nTanggal: ${data.get('date')}\nJam: ${data.get('time')}\nJumlah orang: ${data.get('people')}\nCatatan: ${data.get('note') || '-'}`;
      window.open('https://wa.me/628113661316?text=' + encodeURIComponent(message), '_blank', 'noopener');
    });
