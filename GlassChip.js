export function GlassChip(text, className = '') {
  const node = document.createElement('div');
  node.className = `glass-chip ${className}`;
  node.textContent = text;
  return node;
}
