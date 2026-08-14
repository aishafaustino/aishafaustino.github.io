(() => {
  'use strict';

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', targetId);
    });
  });
})();


async function loadSiteVisitCount() {
    const counterElement = document.querySelector('#site-visit-count');

    if (!counterElement) {
        return;
    }

    const goatCounterCode = 'SEU-CODIGO';

    try {
        const response = await fetch(
            `https://${goatCounterCode}.goatcounter.com/counter/TOTAL.json`
        );

        if (!response.ok) {
            throw new Error('Não foi possível carregar o contador.');
        }

        const data = await response.json();

        counterElement.textContent = data.count ?? '—';
    } catch (error) {
        console.warn('Contador de visitas indisponível:', error);

        counterElement.textContent = '—';
    }
}

document.addEventListener('DOMContentLoaded', loadSiteVisitCount);