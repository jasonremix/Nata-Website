export function FeatureHeader({ number, eyebrow, title, body }) {
  const node = document.createElement('div');
  node.className = 'feature-header';
  node.innerHTML = `
    <span class="feature-no">${number}</span>
    <span class="eyebrow">${eyebrow}</span>
    <h2>${title}</h2>
    <p>${body}</p>`;
  return node;
}
