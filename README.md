# Site Oficial — Aisha Faustino

Primeira versão pública do site institucional da jovem escritora Aisha Faustino. O projeto apresenta sua trajetória, seus livros e o universo de Exside em uma experiência literária responsiva, acessível e preparada para GitHub Pages.

Todo o site, seus conteúdos e contatos são administrados e monitorados pelos pais/responsáveis legais da autora. Não há contato privado direto com Aisha, coleta de dados ou publicação de canais pessoais.

## Tecnologias

- HTML5 semântico
- CSS3 mobile first, Grid, Flexbox e animações
- JavaScript puro, IntersectionObserver e interações acessíveis
- SVGs originais para a ilustração conceitual e as capas
- Google Fonts: Cormorant Garamond e Poppins

Não há framework, build, banco de dados, API ou dependência obrigatória. O conteúdo essencial funciona sem JavaScript; apenas menu móvel, modais e animações dependem dele.

## Estrutura

```text
.
├── index.html
├── 404.html
├── assets/
│   ├── css/
│   ├── images/
│   └── js/
├── docs/
│   ├── DESIGN.md
│   └── FUTURE.md
├── manifest.webmanifest
├── robots.txt
└── sitemap.xml
```

## Executar localmente

É possível abrir `index.html` diretamente no navegador. Para simular melhor o ambiente do GitHub Pages, use um servidor HTTP simples, por exemplo:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Personalização

### Imagem da autora

A seção “Conheça Aisha” usa atualmente `assets/images/aisha-sonhadora.webp`, uma arte fornecida pela família. Quando houver uma fotografia oficial autorizada, salve-a em `assets/images/aisha.jpg` e atualize em `index.html` a referência, as dimensões e o texto alternativo. Há um comentário no HTML marcando o local.

### Capas

As capas ilustradas usadas no site ficam em:

- `assets/images/book-01.webp`
- `assets/images/book-02.webp`
- `assets/images/book-03.webp`

Os SVGs conceituais originais foram preservados como alternativas. As capas podem ser substituídas por versões oficiais autorizadas, mantendo os mesmos nomes ou atualizando as referências em `index.html` e `assets/js/modal.js`.

A arte atual de Exside contém uma variação gráfica do título. O texto editorial do site mantém “Vanessa Doorman em Exside — Uma Escola de Magia”, conforme a definição oficial fornecida para o projeto, até que a família aprove uma alteração textual.

### Contato oficial

Procure por `TODO: inserir contato oficial dos responsáveis` em `index.html`. Insira somente um canal oficial administrado e monitorado pelos pais/responsáveis legais. Não publique telefone, e-mail, redes sociais ou outros canais pessoais de Aisha.

### Livros e textos

Os cards e textos principais estão em `index.html`. As descrições exibidas nos modais estão em `assets/js/modal.js`. Atualize os dois locais para manter o conteúdo consistente. Toda publicação deve passar por supervisão e aprovação parental.

### Open Graph e domínio

Quando o domínio oficial estiver definido:

1. Crie `assets/images/og-aisha.jpg` em formato paisagem, preferencialmente 1200 × 630 px.
2. Adicione `og:url`, `og:image`, `twitter:image` e `<link rel="canonical">` no `<head>` de `index.html`.
3. Preencha `sitemap.xml` com a URL oficial.
4. Adicione a URL absoluta do sitemap em `robots.txt`.

Não há domínio fictício inserido no projeto.

## Publicação no GitHub Pages

1. Envie o projeto para um repositório no GitHub.
2. Abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch **main** e a pasta **/ (root)**.
5. Salve e aguarde a publicação.

Todos os caminhos locais são relativos, portanto o site funciona tanto em `usuario.github.io` quanto em `usuario.github.io/nome-do-repositorio/`.

```bash
git add .
git commit -m "feat: create initial Aisha Faustino author website"
git push origin main
```

## Segurança e privacidade

Esta versão não possui formulário funcional, chat, comentários, integrações de mensagem, analytics, cookies de marketing nem armazenamento de dados. Convites, entrevistas, parcerias e qualquer futura interação serão mediados pelos responsáveis legais. As regras obrigatórias para versões futuras estão em `docs/FUTURE.md`.

## Licença e direitos autorais

O código-fonte original deste repositório é disponibilizado sob a licença MIT, conforme `LICENSE`.

Essa licença **não** concede permissão de uso sobre os conteúdos literários, nomes das obras, personagens, textos autorais, capas, identidade visual, fotografias ou demais criações de Aisha Faustino. Esses materiais permanecem protegidos por direitos autorais e exigem autorização expressa de seus responsáveis legais.
