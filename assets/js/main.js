(() => {
  'use strict';

  /**
   * Scroll suave para links internos.
   */
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');

        if (!targetId || targetId === '#') {
          return;
        }

        let target;

        try {
          target = document.querySelector(targetId);
        } catch (error) {
          return;
        }

        if (!target) {
          return;
        }

        event.preventDefault();

        const reduceMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        target.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start'
        });

        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, '', targetId);
        }
      });
    });
  }


  /**
   * Formata números no padrão brasileiro.
   *
   * Exemplo:
   * 1284 -> 1.284
   */
  function formatVisitCount(value) {
    if (value === null || value === undefined) {
      return null;
    }

    const rawValue = String(value).trim();

    /*
     * Caso o GoatCounter já devolva um valor formatado,
     * mantemos como está.
     */
    if (!/^\d+$/.test(rawValue)) {
      return rawValue;
    }

    const numericValue = Number(rawValue);

    if (!Number.isFinite(numericValue)) {
      return rawValue;
    }

    return new Intl.NumberFormat('pt-BR').format(numericValue);
  }


  /**
   * Busca o total de visitas registrado pelo GoatCounter.
   */
  async function loadSiteVisitCount() {
    const counterElement = document.querySelector(
      '#site-visit-count'
    );

    if (!counterElement) {
      return;
    }

    const endpoint =
      'https://aishafaustino.goatcounter.com/counter/TOTAL.json';

    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(
          `GoatCounter respondeu com status ${response.status}`
        );
      }

      const data = await response.json();

      if (
        !data ||
        data.count === null ||
        data.count === undefined
      ) {
        throw new Error(
          'O GoatCounter não retornou o total de visitas.'
        );
      }

      const formattedCount = formatVisitCount(data.count);

      counterElement.textContent = formattedCount || '0';

      counterElement.classList.add(
        'site-visits__number--loaded'
      );

    } catch (error) {
      console.warn(
        'Não foi possível carregar o contador de visitas:',
        error
      );

      /*
       * Não mostramos erro técnico para o visitante.
       */
      counterElement.textContent = '—';
    }
  }


  /**
   * Inicialização geral.
   */
  function init() {
    initSmoothScroll();
    loadSiteVisitCount();
  }


  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      init,
      { once: true }
    );
  } else {
    init();
  }

})();