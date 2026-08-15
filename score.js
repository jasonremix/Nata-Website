export function animateScore(node, target = 11) {
  if (!node) return;
  let value = 0;
  const timer = setInterval(() => {
    value = Math.min(target, value + 1);
    node.textContent = value;
    if (value >= target) clearInterval(timer);
  }, 70);
}
