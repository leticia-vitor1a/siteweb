# Plano de Testes do Projeto: Brasa Burguer - Sistema Web de Pedidos

## 1. Introdução

### 1.2. Objetivo Principal dos Testes
Garantir que o usuário consiga, desde o login inicial até a finalização da compra de um hambúrguer, realizar todas as etapas de forma eficaz e sem impedimentos.

### 1.3. Escopo dos Testes
Serão testadas todas as funcionalidades disponíveis para o usuário final, incluindo:

- Cadastro de novo usuário  
- Login de usuário existente  
- Navegação pelo menu (hambúrgueres, acompanhamentos, bebidas)  
- Visualização de detalhes do produto  
- Adição de itens ao carrinho  
- Edição e remoção de itens do carrinho  
- Seleção de endereço de entrega  
- Seleção do método de pagamento  
- Finalização do pedido  
- Visualização do histórico de pedidos  
- Logout  

**Fora do escopo:**
- Funcionalidade de "repetir pedido"  

### 1.4. Referências a Documentos Relacionados
Baseado no documento de arquitetura do sistema.

---

## 2. Estratégia de Teste

### 2.1. Tipos de Teste a serem Executados
- Testes de Sistema (Funcionais/End-to-End) e Testes de Performance (Velocidade):

### 2.2. Ferramentas a serem Utilizadas
- Selenium WebDriver

### 2.3. Abordagem para cada Nível de Teste
- **Testes Funcionais (Automatizados):** Vitória executará os testes com Selenium, cobrindo o fluxo completo do usuário e interações com a interface.
- **Testes de Validação Manual:** Lucas Bilizaro simulará o comportamento de um usuário final navegando manualmente pelo sistema.

### 2.4. Critérios de Entrada e Saída

**Entrada:**
- Código completo e integrado  
- Ambiente de testes configurado (Live Server)

**Saída:**
- Todas as funcionalidades principais funcionando sem erros críticos  
- Cumprimento dos critérios mínimos de performance  
- Fluxos principais (login, pedido) com 100% de sucesso

---

## 3. Itens de Teste

### 3.1. Funcionalidades a Serem Testadas

**Login**
**Cadastro**
**Pedidos**
**Finalização**
**Suporte** 

### 3.2. Características Não-Funcionais

- **Segurança:** Criptografia de senha, proteção de dados  
- **Usabilidade:** Navegação intuitiva, clareza da interface  
- **Compatibilidade:** Responsividade em dispositivos móveis (Android, iOS)

### 3.3. Interfaces a Serem Testadas
- Interfaces internas do sistema web (SPA)

### 3.4. Priorização dos Itens

- **Alta Prioridade:** Login, Finalização de pedido  
- **Média Prioridade:** Cadastro, Carrinho, Complementos, Endereço, Pagamento  
- **Baixa Prioridade:** Histórico de pedidos, Suporte

---

## 4. Recursos

### 4.1. Papéis e Responsabilidades
- **Vitória:** Testes funcionais automatizados (Selenium)  
- **Lucas Bilizaro:** Testes manuais simulando uso real

### 4.2. Ambientes Necessários
- Ambiente local com Live Server no VS Code  

### 4.3. Ferramentas e Frameworks
- **Automação:** Selenium  
- **Gerenciamento de bugs:** Jira  

---

## 5. Critérios de Sucesso

### 5.1. Métricas
- Tempo de resposta inferior a 10 segundos por funcionalidade  
- Sucesso nas funcionalidades críticas  

### 5.2. Cobertura Mínima
- No mínimo 90% das funcionalidades executadas com sucesso  
- 100% de sucesso nos fluxos críticos (login, finalização de pedido)

### 5.3. Nível Aceitável de Defeitos
- Nenhum bug crítico permitido  
- Bugs leves tolerados se não afetarem o fluxo principal do usuário

---
