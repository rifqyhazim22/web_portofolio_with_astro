(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const btn = document.createElement('button');
  btn.className = 'fab';
  btn.setAttribute('aria-label', 'Kembali ke atas');
  btn.setAttribute('title', 'Kembali ke atas');
  btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 5l7 7-1.4 1.4L13 9.8V19h-2V9.8L6.4 13.4 5 12z"/></svg>';
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(btn);
    const onScroll = () => {
      if (window.scrollY > 200) btn.classList.add('fab--show');
      else btn.classList.remove('fab--show');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    btn.addEventListener('click', () => {
      if (reduce) window.scrollTo(0,0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
})();
