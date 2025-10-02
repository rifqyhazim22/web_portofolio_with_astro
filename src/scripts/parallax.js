(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const root = document.querySelector('.hero-parallax');
  if (!root) return;

  const items = Array.from(root.querySelectorAll('[data-parallax]')).map(el => {
    const speed = parseFloat(el.getAttribute('data-parallax')) || 0.4; // 0..1 (lebih kecil = gerak lebih halus)
    return { el, speed };
  });

  let ticking = false;
  const update = () => {
    const y = window.scrollY || 0;
    items.forEach(({el, speed}) => {
      const t = Math.round(y * speed * 0.05 * 100) / 100; // skala kecil
      el.style.transform = `translateY(${t}px)`;
    });
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  update();
})();
