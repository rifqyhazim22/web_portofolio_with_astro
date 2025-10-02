/* Reveal halus saat scroll; hormati prefers-reduced-motion */
(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // Target default: judul, kartu, tombol, dan link utama.
  const targets = document.querySelectorAll([
    '.h1','.h2','.h3',
    '.card','a.pill','a.btn-outline',
    'section','.row-list'
  ].join(','));

  const addReveal = el => {
    // jangan ganggu elemen yang disembunyikan atau sudah di-reveal
    if (!el) return;
    el.classList.add('reveal');
  };
  targets.forEach(addReveal);

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
