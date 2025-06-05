# Matriz de Rastreabilidade de Requisitos

## Histórico de Revisões deste Arquivo

| Data       | Versão | Descrição                | Autor         |
| ---------- | ------ | ------------------------ | ------------- |
| 05/06/2025 | 1.0    | Versão inicial           | Equipe XYZ    |

## 1. Introdução

Este documento apresenta a matriz de rastreabilidade dos requisitos do sistema, permitindo visualizar as relações entre requisitos, casos de uso, componentes do sistema e casos de teste.

## 2. Matriz de Rastreabilidade

### 2.1 Requisitos x Casos de Uso

| Requisito | UC01 – Realizar Pedido | UC02 – Registrar Produto | UC03 – Visualizar Relatório | UC04 – Login Sistema | UC05 – Cadastrar Usuário |
| --------- | ---------------------- | ------------------------ | --------------------------- | -------------------- | ------------------------ |
| RF01      | X                      |                          |                             |                      |                          |
| RF02      | X                      |                          |                             |                      |                          |
| RF03      |                        | X                        |                             |                      |                          |
| RF04      |                        |                          | X                           |                      |                          |
| RF05      |                        |                          |                             | X                    |                          |
| RF06      |                        |                          |                             |                      | X                        |

### 2.2 Requisitos x Componentes do Sistema

| Requisito | Comp01 – Tela Pedido | Comp02 – Tela Produto | Comp03 – Tela Relatório | Comp04 – Tela Login | Comp05 – Tela Cadastro Usuário |
| --------- | ------------------- | --------------------- | ------------------------ | ------------------- | ------------------------------ |
| RF01      | X                   |                       |                          |                     |                                |
| RF02      | X                   |                       |                          |                     |                                |
| RF03      |                     | X                     |                          |                     |                                |
| RF04      |                     |                       | X                        |                     |                                |
| RF05      |                     |                       |                          | X                   |                                |
| RF06      |                     |                       |                          |                     | X                              |

### 2.3 Requisitos x Casos de Teste

| Requisito | CT01 | CT02 | CT03 | CT04 | CT05 | CT06 |
| --------- | ---- | ---- | ---- | ---- | ---- | ---- |
| RF01      | X    |      |      |      |      |      |
| RF02      |      | X    |      |      |      |      |
| RF03      |      |      | X    |      |      |      |
| RF04      |      |      |      | X    |      |      |
| RF05      |      |      |      |      | X    |      |
| RF06      |      |      |      |      |      | X    |

### 2.4 Requisitos x Requisitos (Dependências)

| Requisito | RF01 | RF02 | RF03 | RF04 | RF05 | RF06 |
| --------- | ---- | ---- | ---- | ---- | ---- | ---- |
| RF01      | -    | X    |      |      |      |      |
| RF02      | X    | -    |      |      |      |      |
| RF03      |      |      | -    | X    |      |      |
| RF04      |      |      | X    | -    |      |      |
| RF05      |      |      |      |      | -    | X    |
| RF06      |      |      |      |      | X    | -    |

## 3. Análise de Impacto

Esta seção descreve o processo para análise de impacto de mudanças nos requisitos:

1. Identificar o requisito a ser alterado  
2. Consultar a matriz para verificar todos os elementos relacionados  
3. Avaliar o impacto da mudança em cada elemento relacionado  
4. Documentar a análise de impacto  
5. Obter aprovação para a mudança  
6. Atualizar todos os artefatos afetados

> [!IMPORTANT]

> A matriz de rastreabilidade deve ser mantida atualizada durante todo o ciclo de desenvolvimento para garantir a integridade do sistema.