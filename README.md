## Ahxterix - Store - Frontend

Loja online desenvolvida com Next.js, Typescript, TailwindCss. O projeto oferece uma experiência de compra completa, incluindo navegação por categorias, gerenciamento de favoritos, carrinho de compras, processamento de pedidos e um painel administrativo.

## Funcionalidades

- Navegação por Categorias: Produtos organizados por categorias para facilitar a busca.

- Página de Detalhes do Produto: Exibe informações detalhadas sobre cada produto.

- Carrinho de Compras: Adicione, remova e atualize itens antes de finalizar a compra.

- Favoritos: Usuários podem salvar produtos como favoritos para acessar mais tarde.

- Pedidos: Histórico de compras do usuário.

- Autenticação: Implementada com Clerk para segurança e facilidade de login.

- Painel Administrativo: Gerenciamento de produtos e pedidos para administradores.

## Tecnologias Utilizadas

- Next.js: Framework React para SSR e otimização de desempenho.

- Clerk: Gerenciamento de autenticação de usuários.

- Tailwind CSS: Estilização moderna e responsiva.

- ShadCN: Componentes pré-estilizados para melhor UX.

- Zustand: Gerenciamento de estado leve e eficiente.

- Stripe: Integração para processamento de pagamentos.

- MongoDB: Banco de dados NoSQL para armazenar informações dos produtos e pedidos.

- TypeScript: Tipagem estática para maior segurança e escalabilidade.

## Como Rodar o Projeto

- Clone o repositório:

``git clone https://github.com/seu-usuario/seu-repositorio.git``

- Instale as dependências:

``npm install``

- Configure as variáveis de ambiente:
Crie um arquivo .env.local e adicione as chaves necessárias (exemplo: Clerk, Stripe, MongoDB, etc.).

- Inicie o servidor de desenvolvimento:

``npm run dev``

- Acesse http://localhost:3000 no navegador.