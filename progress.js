export function initScrollProgress(node) {
  if (!node) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    node.style.width = `${max > 0 ? (scrollY / max) * 100 : 0}%`;
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}
