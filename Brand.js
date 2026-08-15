export function Brand({ compact = false } = {}) {
  const root = document.createElement('a');
  root.href = '#top';
  root.className = compact ? 'brand brand--compact' : 'brand';
  root.innerHTML = '<span class="brand-icon">N</span><span>NATA</span>';
  return root;
}
