export function openBetaModal() {
  if (document.querySelector('[data-nata-modal]')) return;
  const modal = document.createElement('div');
  modal.dataset.nataModal = 'true';
  modal.className = 'nata-modal';
  modal.innerHTML = `
    <div class="nata-modal__card">
      <button class="nata-modal__close" aria-label="Schließen">×</button>
      <span>NATA BETA</span>
      <h2>Sei von Anfang an dabei.</h2>
      <p>Sichere dir deinen Platz in der ersten Nata-Generation.</p>
      <form>
        <input type="email" required placeholder="deine@email.de">
        <button>Beta sichern →</button>
      </form>
    </div>`;
  document.body.append(modal);
  modal.querySelector('.nata-modal__close').onclick = () => modal.remove();
  modal.onclick = event => { if (event.target === modal) modal.remove(); };
}
