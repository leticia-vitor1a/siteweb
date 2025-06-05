# Documento de Requisitos

## Histórico de Revisões Deste Arquivo

| Data       | Versão | Descrição                | Autor             |
| ---------- | ------ | ------------------------ | ----------------- |
| 05/06/2025 | 1.0    | Versão inicial           | Brasa Burguer     |

## 1. Introdução

### 1.1 Propósito

Este documento tem como objetivo especificar os requisitos funcionais e não funcionais do sistema Brasa Burguer, estabelecendo uma base para o desenvolvimento, validação e manutenção da aplicação. O documento também serve como referência para todos os envolvidos no projeto.

### 1.2 Escopo

O Brasa Burguer é um sistema web para gerenciamento de pedidos de um restaurante especializado em hambúrgueres. Ele contempla a visualização de cardápio, cadastro e login de usuários, montagem de pedidos personalizados com adicionais, integração com área administrativa (via Odoo) e uma interface amigável para clientes e administradores.

### 1.3 Definições, Acrônimos e Abreviações

- **RF**: Requisito Funcional  
- **RNF**: Requisito Não Funcional  
- **UC**: Caso de Uso  
- **UI**: Interface do Usuário  
- **CRUD**: Create, Read, Update, Delete

## 2. Descrição Geral

### 2.1 Perspectiva do Produto

O Brasa Burguer é um sistema independente voltado para web, acessível por navegadores modernos. A parte administrativa será integrada ao sistema ERP Odoo, que será responsável pelo controle interno de estoque, relatórios e fluxo financeiro.

### 2.2 Funcionalidades do Produto

- Visualização do cardápio com imagens e preços
- Cadastro e login de usuários
- Montagem e personalização de pedidos
- Escolha de adicionais e observações
- Cadastro de endereço de entrega
- Simulação de pagamento (PIX, cartão, etc.)
- Integração com Odoo na área administrativa

### 2.3 Características dos Usuários

- **Clientes**: Pessoas que acessam o site para visualizar o cardápio e fazer pedidos.
- **Administradores**: Funcionários responsáveis pela gestão do sistema, acessando o Odoo.
- **Equipe de desenvolvimento**: Membros do grupo que atualizam e mantêm o sistema.

### 2.4 Restrições

- Utilização de tecnologias definidas: HTML, CSS, JavaScript, Node.js e MySQL.
- Integração obrigatória com Odoo para a parte administrativa.
- O sistema deve ser responsivo e funcionar em dispositivos móveis.
- O banco de dados deve estar hospedado em servidor local ou na nuvem.

## 3. Requisitos Específicos

### 3.1 Requisitos Funcionais

| ID   | Descrição                                                                 | Prioridade |
| ---- | ------------------------------------------------------------------------- | ---------- |
| RF01 | O sistema deve permitir o cadastro de novos usuários                     | Alta       |
| RF02 | O sistema deve permitir login de usuários já cadastrados                 | Alta       |
| RF03 | O cliente deve poder visualizar o cardápio com imagens e descrições      | Alta       |
| RF04 | O cliente deve poder montar um pedido personalizado                      | Alta       |
| RF05 | O sistema deve permitir adicionar observações e adicionais ao pedido     | Média      |
| RF06 | O sistema deve permitir simular pagamento por diferentes meios           | Média      |
| RF07 | O sistema deve permitir cadastro de endereço de entrega                  | Média      |
| RF08 | O sistema deve registrar os pedidos feitos no banco de dados             | Alta       |

### 3.2 Requisitos Não Funcionais

| ID    | Categoria   | Descrição                                                                 | Prioridade |
| ----- | ----------- | ------------------------------------------------------------------------- | ---------- |
| RNF01 | Usabilidade | O sistema deve ser intuitivo e acessível para usuários leigos             | Alta       |
| RNF02 | Performance | O sistema deve responder a ações do usuário em até 2 segundos             | Média      |
| RNF03 | Segurança   | O sistema deve criptografar senhas dos usuários                           | Alta       |
| RNF04 | Confiabilidade | O sistema deve salvar pedidos mesmo que haja instabilidade momentânea | Alta       |
| RNF05 | Responsividade | O sistema deve se adaptar a dispositivos móveis e tablets            | Alta       |

## 4. Visão Geral do Sistema

O sistema é composto por:

- Interface pública (frontend): página inicial, cardápio, pedidos, login e cadastro.
- Backend: API em Node.js responsável por gerenciar os dados e lógica de pedidos, login, e integração com MySQL.
- Integração externa: Odoo (ERP) para gestão administrativa.

## 5. Casos de Uso

Os principais casos de uso estão descritos no documento de Casos de Uso e incluem:

- UC01: Cadastrar Usuário
- UC02: Login
- UC03: Visualizar Cardápio
- UC04: Montar Pedido
- UC05: Finalizar Pedido
- UC06: Cadastrar Endereço
- [casos de uso](../arquitetura/diagramas)

## 6. Priorização de Requisitos

Foi utilizada a técnica **MoSCoW** para priorização, classificando os requisitos como:

- **Must Have** (Obrigatórios): RF01, RF02, RF03, RF04, RF08, RNF01, RNF03, RNF05
- **Should Have** (Importantes): RF05, RF06, RF07, RNF02, RNF04
- **Could Have** (Desejáveis): Integrações futuras com métodos de pagamento reais
- **Won’t Have** (Fora do escopo atual): Aplicativo mobile nativo

## 7. Aprovação

| Nome                 | Papel         | Assinatura | Data       |
| -------------------- | ------------- | ---------- | ---------- |
| Letícia Vitória      | Frontend/doc  |            | 05/06/2025 |
| Lucas Bilizaro       | Frontend/doc  |            | 05/06/2025 |
| Lucas Kopeska        | Frontend/doc  |            | 05/06/2025 |
| João Gabriel Pereira | Backend/doc   |            | 05/06/2025 |
| Kauan Santos         | Backend/doc   |            | 05/06/2025 |
| Mauricio Ramos       | Backend/doc   |            | 05/06/2025 |
| Gabriel Abonizio     | Backend/doc   |            | 05/06/2025 |
| Prof. Moacyr         | Avaliador     |            |            |

>[!NOTE]  
>Este documento será atualizado incrementalmente ao longo do desenvolvimento do projeto.
