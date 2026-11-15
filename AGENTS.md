# AGENTS.md

Aplicação de **controle de gastos pessoais** em React 19 + Vite, com JavaScript/JSX puro.

O objetivo do projeto é o controle de gastos, mas o código atual ainda é o template padrão do Vite (`src/App.jsx`): não há funcionalidade de gastos, rotas, biblioteca de estado, backend nem testes. O README é o boilerplate original do Vite — confie no código e no `package.json`, não no README.

## Regras do projeto

- Use apenas React (e `useState`) para estado. **Não instale bibliotecas novas.**
- Componentes de função, um por arquivo, em `src/components/` (o diretório ainda não existe; crie ao adicionar o primeiro componente).
- Nomes de variáveis, funções e componentes em português.
- Comente o código em português.
- Mostre valores em reais com duas casas decimais, no formato `R$ 12,50` (ex.: `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`).
- Mantenha o código simples e organizado.
- **Nunca crie nem edite `RELATORIO.md`.**

## Comandos

```bash
npm install        # npm + package-lock.json; não crie outros lockfiles
npm run dev        # servidor de desenvolvimento Vite com HMR
npm run lint       # oxlint (não é ESLint); configuração em .oxlintrc.json
npm run build      # vite build — única verificação de compilação disponível
npm run preview    # serve dist/, então rode o build antes
```

- Não existe script de formatação, autofix, typecheck ou testes. Não invente `npm test` nem `tsc`.
- Verifique as alterações com `npm run lint && npm run build`.

## Estrutura e convenções

- Fluxo de entrada: `index.html` → `src/main.jsx` → `src/App.jsx`. Sem rotas; toda a UI é renderizada a partir de `App`.
- `src/index.css` contém o reset global, as variáveis de tema e as sobrescritas de `prefers-color-scheme: dark`. Estilos de páginas/componentes ficam em `src/App.css`.
- O CSS é CSS nativo com aninhamento, inclusive blocos `@media` aninhados. Não há Sass, PostCSS, Tailwind nem CSS-in-JS — mantenha essa sintaxe.
- Ícones vêm do sprite SVG `public/icons.svg`, usados como `<use href="/icons.svg#id-do-simbolo">`. Adicione novos ícones como entradas `<symbol>` nesse arquivo.
- Importações de `src/assets/` geram URLs com hash; arquivos em `public/` são servidos na raiz do site.
- Apenas JSX. `@types/react` está instalado, mas não há `tsconfig.json` nem configuração de TypeScript; não converta arquivos para `.tsx` sem que isso seja pedido.
