export function initScrollReveal(selector = '.reveal') {
  const nodes = document.querySelectorAll(selector);
  if (!('IntersectionObserver' in window)) {
    nodes.forEach(node => node.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  nodes.forEach(node => observer.observe(node));
}
