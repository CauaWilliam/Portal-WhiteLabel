# Portal-WhiteLabel

## 🇧🇷 Sobre o Projeto
O Portal-WhiteLabel é um sistema desenvolvido para proporcionar uma experiência completa e eficiente aos nossos clientes WhiteLabel do b1bank. O portal oferece funcionalidades como helpdesk, sistema de logística e gestão comercial, sendo uma solução SaaS vendida para parceiros.

## Estrutura do Projeto
O projeto segue uma arquitetura baseada em Clean Architecture e MVC, com separação clara de responsabilidades:

- `controllers/` — Controladores HTTP
- `usecase/` — Casos de uso (lógica de negócio)
- `repository/` — Acesso ao banco de dados
- `entity/` — Modelos de dados (entidades)
- `dto/` — Objetos de transferência de dados e validação
- `routes/` — Definição das rotas
- `db/` — Configuração e schemas do banco
- `script/` — Scripts utilitários

## Funcionalidades Principais
- Cadastro e gestão de POS (máquinas de cartão)
- Cadastro e gestão de chips
- Associação entre POS e chips
- Helpdesk para suporte
- Gestão comercial

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env` com as variáveis do banco de dados.
3. Rode as migrations (Drizzle ORM) se necessário.
4. Inicie o servidor:
   ```bash
   npm run dev
   ```

---

# Portal-WhiteLabel

## 🇺🇸 About the Project
Portal-WhiteLabel is a system developed to provide a complete and efficient experience for our b1bank WhiteLabel clients. The portal offers features such as helpdesk, logistics system, and commercial management, being a SaaS solution sold to partners.

## Project Structure
The project follows a Clean Architecture and MVC-based structure, with clear separation of responsibilities:

- `controllers/` — HTTP controllers
- `usecase/` — Use cases (business logic)
- `repository/` — Database access
- `entity/` — Data models (entities)
- `dto/` — Data Transfer Objects and validation
- `routes/` — Route definitions
- `db/` — Database config and schemas
- `script/` — Utility scripts

## Main Features
- POS (card machine) registration and management
- Chip registration and management
- Association between POS and chips
- Helpdesk for support
- Commercial management

## How to run the project
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure the `.env` file with your database variables.
3. Run the migrations (Drizzle ORM) if needed.
4. Start the server:
   ```bash
   npm run dev
   ```
