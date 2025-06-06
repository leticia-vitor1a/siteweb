# Documento de Requisitos

## Histórico de Revisões Deste Arquivo

| Data       | Versão | Descrição      | Autor         |
| ---------- | ------ | -------------- | ------------- |
| 03/06/2025 | 1.0    | Versão inicial | Equipe Alunos |
| 04/06/2025 | 1.5    | Versão inicial | Equipe Alunos |
| 05/06/2025 | 2.0    | Versão inicial | Equipe Alunos |

## 1. Introdução

### 1.1 Propósito

Este documento tem como objetivo descrever de forma clara e organizada todos os requisitos funcionais e não funcionais do sistema de gerenciamento para restaurante, que está sendo desenvolvido para fins educacionais no contexto do Projeto Integrador.

### 1.2 Escopo

O sistema desenvolvido é um sistema de gerenciamento de restaurante com funcionalidades voltadas para o controle de pedidos, gerenciamento de mesas, controle de produtos e acesso de diferentes tipos de usuários (garçom, cozinheiro e administrador). O sistema será apresentado em ambiente acadêmico e não será colocado em produção real.

### 1.3 Definições, Acrônimos e Abreviações

* PI: Projeto Integrador
* RF: Requisito Funcional
* RNF: Requisito Não Funcional
* UI: Interface do Usuário

## 2. Descrição Geral

### 2.1 Perspectiva do Produto

O sistema será desenvolvido como uma aplicação web local, sem dependência de servidores externos. Utilizará HTML, CSS, JavaScript e PHP em sua implementação. O foco é demonstrar funcionalidades essenciais de um sistema de restaurante.

### 2.2 Funcionalidades do Produto

* Login de usuários com diferentes perfis (garçom, administrador, cozinheiro);
* Registro de pedidos por mesa;
* Visualização de pedidos pela cozinha;
* Controle de status dos pedidos;
* Cadastro e edição de produtos;
* Geração de relatórios simples.

### 2.3 Características dos Usuários

* Garçom: Responsável por registrar pedidos e interação com os clientes;
* Cozinheiro: Visualiza e atualiza o status dos pedidos em produção;
* Administrador: Gera relatórios e gerencia o cardápio e usuários.

### 2.4 Restrições

* O sistema não deve acessar banco de dados externo (funcionalidade simulada);
* Interface responsiva é opcional, não obrigatória;
* Apenas navegação local (simulação com arquivos locais).

## 3. Requisitos Específicos

### 3.1 Requisitos Funcionais

| ID   | Descrição                                                 | Prioridade |
| ---- | --------------------------------------------------------- | ---------- |
| RF01 | Permitir login para diferentes tipos de usuários          | Alta       |
| RF02 | Permitir registro de pedidos por mesa                     | Alta       |
| RF03 | Permitir que a cozinha visualize pedidos                  | Alta       |
| RF04 | Permitir cadastro e edição de produtos                    | Média      |
| RF05 | Permitir que o administrador visualize relatórios simples | Baixa      |

### 3.2 Requisitos Não Funcionais

| ID    | Categoria   | Descrição                                                  | Prioridade |
| ----- | ----------- | ---------------------------------------------------------- | ---------- |
| RNF01 | Usabilidade | Interface simples e intuitiva                              | Alta       |
| RNF02 | Performance | O sistema deve carregar cada página em menos de 3 segundos | Média      |
| RNF03 | Segurança   | Validação básica de login (usuário/senha)                  | Alta       |

## 4. Visão Geral do Sistema

O sistema será composto por módulos interligados:

* Módulo de Login
* Módulo de Pedidos
* Módulo de Cozinha
* Módulo Administrativo

## 5. Casos de Uso

### Caso de Uso: UC01 - Login de Usuário

**Descrição**
Permite que usuários cadastrados acessem o sistema por meio de autenticação com login e senha.

**Atores**

* Usuário (Garçom, Cozinheiro, Administrador)

**Pré-condições**

* O usuário deve estar previamente cadastrado no sistema.
* O sistema deve estar em funcionamento.

**Fluxo Básico**

1. O usuário acessa a tela de login.
2. O sistema solicita o nome de usuário e senha.
3. O usuário insere suas credenciais.
4. O sistema valida as informações.
5. O sistema redireciona o usuário para a página inicial correspondente ao seu perfil.

**Fluxo Alternativo**

* Esqueci minha senha:

  1. O usuário clica em "Esqueci minha senha".
  2. O sistema informa que a recuperação de senha não está disponível nesta versão.

**Fluxo de Exceção**

* Usuário ou senha incorretos:

  1. O sistema exibe uma mensagem de erro.
  2. Retorna para a tela de login.

**Pós-condição**

* O usuário está autenticado no sistema.

**Requisitos Relacionados**: RF01, RNF03

---

### Caso de Uso: UC02 - Registrar Pedido

**Descrição**
Permite que o garçom registre o pedido de uma mesa.

**Atores**

* Garçom

**Pré-condições**

* O garçom deve estar logado no sistema.
* A mesa deve estar disponível para pedidos.

**Fluxo Básico**

1. O garçom acessa a tela de pedidos.
2. Seleciona a mesa desejada.
3. Seleciona os itens do cardápio e quantidades.
4. Confirma o pedido.
5. O sistema registra e envia o pedido para a cozinha.

**Fluxo Alternativo**

* Pedido cancelado antes do envio:

  1. O garçom cancela o pedido antes de confirmar.
  2. O sistema descarta os itens e retorna à tela inicial.

**Fluxo de Exceção**

* Falha de conexão com cozinha:

  1. O sistema exibe alerta de falha no envio.
  2. O pedido é salvo localmente e reenviado automaticamente quando possível.

**Pós-condição**

* O pedido está registrado e visível para a cozinha.

**Requisitos Relacionados**: RF02, RF03

---

### Caso de Uso: UC03 - Gerenciar Produtos

**Descrição**
Permite ao administrador cadastrar, editar ou remover produtos do cardápio.

**Atores**

* Administrador

**Pré-condições**

* O administrador deve estar logado.

**Fluxo Básico**

1. O administrador acessa o menu de gerenciamento de produtos.
2. Visualiza a lista de produtos existentes.
3. Escolhe entre adicionar, editar ou remover um produto.
4. O sistema salva as alterações.

**Fluxo Alternativo**

* Produto duplicado:

  1. O sistema impede o cadastro de dois produtos com o mesmo nome.

**Fluxo de Exceção**

* Erro ao salvar produto:

  1. O sistema exibe mensagem de erro e solicita nova tentativa.

**Pós-condição**

* O produto é salvo ou atualizado com sucesso.

**Requisitos Relacionados**: RF04

---

### Diagrama de Casos de Uso (Mermaid)

```mermaid
actor Garcom
actor Administrador
actor Cozinheiro

Garcom --> (Login)
Garcom --> (Registrar Pedido)
Cozinheiro --> (Visualizar Pedidos)
Administrador --> (Login)
Administrador --> (Gerenciar Produtos)
Administrador --> (Visualizar Relatórios)
Cozinheiro --> (Atualizar Status do Pedido)
```

## 6. Priorizacão de Requisitos

Os requisitos foram priorizados com base na funcionalidade essencial para apresentação do projeto e nas tarefas atribuídas a cada membro do grupo.

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
