(() => {
  'use strict';

  const modal = document.querySelector('[data-modal]');
  const dialog = modal?.querySelector('.modal__dialog');
  const content = modal?.querySelector('[data-modal-content]');
  let triggerElement = null;

  const entries = {
    'book-01': {
      cover: 'assets/images/book-01.webp',
      alt: 'Capa ilustrada de Um Amor Predestinado',
      label: 'Primeira história · Em preparação',
      title: 'Um Amor Predestinado',
      description: 'Foi a primeira história concluída por Aisha. Tudo começou quando ela tinha aproximadamente onze anos e costumava cortar folhas de caderno para transformá-las em pequenos livros. Depois de iniciar algumas histórias, decidiu realmente continuar uma. Assim nasceu Um Amor Predestinado.',
      extra: 'Com atmosfera medieval, a obra representa o início de sua trajetória como escritora e ganhou novas possibilidades quando passou do papel para o computador.'
    },
    'book-02': {
      cover: 'assets/images/book-02.webp',
      alt: 'Capa ilustrada de Arcane Academy',
      label: 'Segunda obra · Em preparação',
      title: 'Arcane Academy',
      description: 'O segundo livro escrito por Aisha é uma história maior e mais desenvolvida que sua primeira obra, reunindo fantasia, aventura, personagens, surpresas e reviravoltas.',
      extra: 'Arcane Academy representa uma importante evolução em sua escrita e no desenvolvimento de universos narrativos.'
    },
    'book-03': {
      cover: 'assets/images/book-03.webp',
      alt: 'Arte conceitual do universo de Vanessa em Exside',
      label: 'Novo universo · Em desenvolvimento',
      title: 'Vanessa Doorman em Exside',
      subtitle: 'Uma Escola de Magia',
      description: 'O projeto atual de Aisha acompanha Vanessa Doorman, uma protagonista calma e tímida, em uma escola de magia repleta de aventuras, mistérios, amizades, descobertas e segredos.',
      extra: 'Exside abre as portas para um universo completamente novo, com personagens fantásticos e muitas histórias esperando para serem reveladas.'
    }
  };

  const bookTemplate = (entry) => `
    <div class="modal__book">
      <img src="${entry.cover}" width="900" height="1350" alt="${entry.alt}">
      <div>
        <span class="modal__label">${entry.label}</span>
        <h2 id="modal-title">${entry.title}</h2>
        ${entry.subtitle ? `<p class="modal__subtitle">${entry.subtitle}</p>` : ''}
        <p>${entry.description}</p>
        <p>${entry.extra}</p>
        <p class="modal__future">Mais informações sobre esta obra serão publicadas futuramente, sempre com supervisão e aprovação dos pais/responsáveis legais.</p>
      </div>
    </div>`;

  const simpleTemplates = {
    exside: `
      <span class="modal__label">O próximo universo</span>
      <h2 id="modal-title">Novidades de Exside</h2>
      <p>Mais novidades sobre Exside serão reveladas em breve.</p>
      <p class="modal__future">Toda publicação e futura interação relacionada à obra será administrada e monitorada pelos pais/responsáveis legais de Aisha.</p>`,
    writing: `
      <span class="modal__label">Exercício criativo</span>
      <h2 id="modal-title">Comece a imaginar</h2>
      <p>Pegue uma folha e responda:</p>
      <ol class="writing-prompts">
        <li>Quem é seu personagem?</li>
        <li>Onde ele vive?</li>
        <li>O que ele mais deseja?</li>
        <li>Qual problema ele precisará enfrentar?</li>
      </ol>
      <p class="modal__future">Este exercício funciona somente como inspiração. Nenhum dado é solicitado, enviado ou salvo pelo site.</p>`,
    contact: `
      <span class="modal__label">Contato e parcerias</span>
      <h2 id="modal-title">Canal em preparação</h2>
      <p>O canal oficial para escolas, imprensa, projetos literários, eventos e parcerias será disponibilizado futuramente.</p>
      <p class="modal__future">Todos os contatos, convites, parcerias e mensagens relacionados à autora são recebidos e monitorados pelos pais/responsáveis legais. Não há contato direto ou privado com Aisha através deste site.</p>`
  };

  const getFocusable = () => dialog?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') || [];

  const openModal = (key, trigger) => {
    if (!modal || !content || !dialog) return;
    const template = entries[key] ? bookTemplate(entries[key]) : simpleTemplates[key];
    if (!template) return;
    triggerElement = trigger;
    content.innerHTML = template;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    dialog.focus();
  };

  const closeModal = () => {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    content.innerHTML = '';
    triggerElement?.focus();
    triggerElement = null;
  };

  document.addEventListener('click', (event) => {
    const opener = event.target.closest('[data-modal-open]');
    if (opener) openModal(opener.dataset.modalOpen, opener);
    if (event.target.closest('[data-modal-close]')) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (!modal || modal.hidden) return;
    if (event.key === 'Escape') {
      closeModal();
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...getFocusable()];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
