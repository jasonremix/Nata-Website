export function DeviceFrame(src, alt = 'Nata App') {
  const node = document.createElement('div');
  node.className = 'phone';
  node.innerHTML = `<img src="${src}" alt="${alt}">`;
  return node;
}
