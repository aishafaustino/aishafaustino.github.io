# Sistema visual — Aisha Faustino

## Conceito

O site materializa a ideia de “entrar nos mundos criados por Aisha”. A interface combina livro, portal, lua, estrelas e energia mágica em uma linguagem infantojuvenil sofisticada. O resultado evita referências visuais diretas a franquias existentes e também evita aparência infantilizada.

## Identidade

A alternância entre superfícies claras e seções profundas cria ritmo de leitura: o claro acolhe o conteúdo biográfico; o escuro marca os portais para a imaginação. Linhas douradas, pequenos brilhos e ornamentos geométricos funcionam como detalhes editoriais.

## Paleta

- Roxo principal: `#5B2C83`
- Roxo profundo: `#301A4B`
- Vinho: `#681B32`
- Azul-marinho: `#111C3A`
- Preto: `#0B0C10`
- Lavanda: `#EAE1F5`
- Branco: `#F8F7FB`
- Dourado: `#D9B86C`
- Dourado claro: `#F0DAA0`

Os fundos escuros usam texto branco com opacidade controlada; dourado claro é reservado a títulos, selos e pequenos destaques. Texto corrido em fundo claro usa `#21192B` ou `#696071`.

## Tipografia

- Títulos: Cormorant Garamond, pesos 500–700.
- Texto e controles: Poppins, pesos 400–700.

Tamanhos principais usam `clamp()` para preservar hierarquia entre 320 px e telas amplas. Textos corridos permanecem próximos de 16 px e com entrelinha generosa.

## Espaçamento e grid

O container usa `width: min(calc(100% - 40px), 1200px)` no celular e amplia a margem lateral a partir de 700 px. Seções usam espaçamento fluido entre 80 e 136 px. Grids mudam progressivamente de uma para duas ou três colunas.

## Cards

Cards usam bordas de baixa opacidade, raios entre 16 e 28 px e sombras suaves. Capas recebem moldura editorial e profundidade. Interações de hover alteram poucos pixels para manter estabilidade visual.

## Botões

Botões têm altura mínima de 48 px, formato pill, foco visível e texto explícito. Roxo é a ação principal em superfícies claras; dourado é usado sobre fundos escuros; azul-marinho marca ações institucionais.

## Bordas e sombras

- Raio pequeno: 8 px
- Raio médio: 16 px
- Raio grande: 28 px
- Painéis especiais: 40 px
- Sombras: discretas, com matiz roxa ou preta e baixa opacidade

## Animações

As animações incluem entrada suave, flutuação do livro, brilho alternado e rotação lenta do portal. Todas usam transform/opacity e são desativadas ou reduzidas com `prefers-reduced-motion: reduce`.

## Breakpoints

- Base: 320 px e acima, uma coluna
- 480 px: ações horizontais quando houver espaço
- 700 px: grids intermediários e modais em duas colunas
- 860 px: navegação desktop, hero e conteúdo em colunas
- 1100 px: refinamentos de escala e espaçamento

O comportamento é fluido para 320, 360, 375, 390, 414, 480, 768, 1024, 1280, 1440 e 1920 px.

## Mobile

O hero mantém título de alto impacto sem depender de altura fixa excessiva. Botões empilham em telas estreitas; cards, timeline e contato ficam em uma coluna; chips horizontais de Exside usam rolagem interna controlada. `html` e `body` ocultam overflow horizontal.

## Acessibilidade

- HTML semântico e idioma `pt-BR`
- Skip link
- Hierarquia de títulos
- Foco visível com contraste
- Alvos de toque com pelo menos 44 px
- Menu com `aria-expanded` e `aria-controls`
- Modais com `role="dialog"`, `aria-modal`, Escape, overlay e retorno de foco
- Conteúdo essencial independente de JavaScript
- Textos alternativos para todas as imagens significativas
- Fallback para IntersectionObserver e respeito a movimento reduzido

## Regras para futuras páginas

Novas páginas devem reutilizar tokens de `variables.css`, começar pelo layout móvel, preservar a alternância de luz e profundidade, manter linhas de texto legíveis e evitar ornamentos em excesso. Qualquer conteúdo, imagem, vídeo, depoimento, contato ou interação deve ser aprovado e monitorado pelos pais/responsáveis legais. Nenhuma página deve expor dados pessoais ou oferecer contato privado com Aisha.

