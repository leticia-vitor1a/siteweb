# Documento de Arquitetura

## Histórico de Revisões desde Arquivo

| Data       | Versão | Descrição                | Autor  |
| ---------- | ------ | ------------------------ | ------ |
| DD/MM/AAAA | 1.0    | Versão inicial           | [Kauan Santos] |
| 04/05/2025 | 1.1    | [Descrição da alteração] |  Kauan  |

## 1. Introdução

### 1.1 Finalidade

Este documento descreve a arquitetura de software do sistema de um site de comida chamado 'Brasa Burguer'

### 1.2 Escopo

O sistema permite a interação entre usuários, restaurantes e para realizar pedidos de comida online com funcionalidades de busca, pagamento, rastreamento e avaliações.

### 1.3 Definições, Acrônimos e Abreviações

API: Interface de Programação de Aplicações

UI: Interface do Usuário

DB: Banco de Dados

REST: Estilo de arquitetura para web services

## 2. Representação Arquitetural

### 2.1 Modelo Arquitetural

Arquitetura baseada em microserviços, com comunicação via mobile para um melhor resultado


### 2.2 Justificativa

Microserviços foram escolhidos por facilitar escalabilidade independente, especialmente em componentes como catálogo, pedidos e rastreamento. A separação de responsabilidades favorece manutenção e evolução do sistema.

## 3. Metas e Restrições da Arquitetura

### 3.1 Metas

Alta disponibilidade e tolerância a falhas

Escalabilidade horizontal

Facilidade de integração com meios de pagamento

Entregas rápidas e rastreamento em tempo real


### 3.2 Restrições

Deve suportar grande volume de requisições simultâneas

Deve funcionar tanto em web quanto em apps móveis

Comunicação segura via HTTPS

## 4. Visão de Casos de Uso

### 4.1 Diagrama de Casos de Uso

https://github.com/leticia-vitor1a/siteweb/blob/66cad65ec7d4007f5476a9e67a2f53a94033ce63/docs/arquitetura/diagramas/diagrama%20foto%201.png

### 4.2 Descrição dos Casos de Uso Significativos

Realizar Pedido: o cliente seleciona itens, confirma endereço e método de pagamento.

Acompanhar Entrega: o cliente vê o status do pedido em tempo real 


## 5. Visão Lógica

### 5.1 Visão Geral

Sistema dividido em microsserviços como:

CatálogoService

PedidoService

PagamentoService

EntregaService

AuthService

### 5.2 Padrões de Design Significativos



### 5.3 Diagramas de Classes

Diagramas representam entidades como: Cliente, Pedido, Item, Pagamento, Entrega.


## 6. Visão de Processos

PedidoService inicia workflow com validação, notificação e reserva.

EntregaService utiliza workers com atualizações do andamento do pedido, verificando
se esta chegando ao local

## 7. Visão de Implantação

### 7.1 Diagrama de Implantação



### 7.2 Descrição dos Nós

pp Mobile/Web

Backend Services

Banco de Dados


## 8. Visão de Implementação

### 8.1 Visão Geral

Código dividido por domínio, seguindo arquitetura limpa (Clean Architecture).


### 8.2 Camadas

Apresentação (UI)

Aplicação (Use Cases)

Domínio (Modelos de Negócio)

Infraestrutura (Persistência, APIs externas)

## 9. Visão de Dados

### 9.1 Modelo de Dados

Entidades principais:

Cliente, Restaurante, Pedido, Item, Entrega, Pagamento
Relacionamentos:

Um Pedido possui vários Itens, pertence a um Cliente, e está associado a um Restaurante.


## 10. Tamanho e Performance

Tempo máximo de resposta da API: 1s

Tempo de entrega médio esperado: < 45 min

Banco de dados com partição por região para performance

Cache com Redis para dados de catálogo

## 11. Qualidade

Desempenho: Cache e balanceamento de carga

Segurança: OAuth 2.0 para autenticação, HTTPS obrigatório

Escalabilidade: Microsserviços desacoplados

Manutenibilidade: Código modular, testes automatizados

## 12. Princípios SOLID Aplicados

SRP: Cada serviço tem uma responsabilidade clara

OCP: Camadas permitem extensão sem modificação

LSP: Interfaces de repositórios bem definidas

ISP: Interfaces especializadas para repositórios

DIP: Injeção de dependências com inversão de controle (IoC)

## 13. Padrões de Design Utilizados

Factory: Para criação de pedidos

Strategy: Para cálculo de frete

Observer/Event-Driven: Para atualizações de status do pedido

Repository: Para persistência

Adapter: Integração com gateways de pagamento

>[!TIP]
>Ao longo do desenvolvimento, revise este documento para garantir que a implementação esteja alinhada com a arquitetura planejada. Documente as decisões arquiteturais importantes, incluindo as alternativas consideradas e os motivos da escolha final.
