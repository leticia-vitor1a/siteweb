# Plano de Testes do Projeto: Brasa Burguer

## Objetivo Principal dos Testes  
Garantir que o usuário consiga, desde o login inicial até a finalização da compra de um hambúrguer, realizar todas as etapas de forma eficaz e sem impedimentos.

## Escopo dos Testes  
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
- Logout  

**Fora do escopo:**  
- Funcionalidade de "repetir pedido"

## Referências a Documentos Relacionados  
- Baseado no documento de arquitetura do sistema

## Definições, Acrônimos e Abreviações  
- **Selenium:** Ferramenta para automação de testes funcionais de interface web.  
- **E2E (End-to-End):** Testes que verificam o fluxo completo da aplicação.  
- **UI:** Interface do Usuário.  
- **Jira:** Ferramenta para gerenciamento de bugs e tarefas.

---

## Estratégia de Teste

### Tipos de Teste a serem Executados  
- Testes de Sistema (funcionais e end-to-end)  
- Testes de Performance (tempo de resposta, carga)  
- Testes de Segurança (validação de proteção de dados e autenticação)  
- Testes de Compatibilidade (em diferentes dispositivos e navegadores)  
- Testes de Usabilidade (facilidade de uso, navegação intuitiva)

### Ferramentas a serem Utilizadas  
- Testes Funcionais: Selenium  
- Gerenciamento de bugs: Jira

### Abordagem para cada Nível de Teste  
- **Sistema:** Testes completos do fluxo de usuário via Selenium, cobrindo funcionalidades críticas e cenários alternativos.  
- **Performance:** Simulações de carga para validar tempo de resposta e estabilidade.  
- **Segurança:** Testes focados em autenticação, autorização e proteção de dados.  
- **Usabilidade e Compatibilidade:** Testes manuais para avaliar navegação e visualização em dispositivos variados.

### Critérios de Entrada e Saída  
**Entrada:**  
- Código completo e integrado

**Saída:**  
- Todas as funções principais funcionando sem erros críticos  
- Cumprimento dos critérios mínimos de performance  
- Fluxos principais 100% funcionais

---

## Itens de Teste

### Funcionalidades a Serem Testadas  
- Login  
- Cadastro  
- Pedidos  
- Finalização  
- Pós-pedido  
- Suporte

### Características Não-Funcionais  
- Segurança: Proteção de dados  
- Usabilidade: Navegação intuitiva, clareza visual  
- Compatibilidade: Responsividade em dispositivos móveis

### Interfaces a Serem Testadas  
- Apenas interfaces do próprio sistema web

### Priorização dos Itens  
- **Alta:** Login, Finalização de Pedido  
- **Média:** Cadastro, Carrinho, Complementos, Endereço, Pagamento  
- **Baixa:** Histórico, Suporte

---

## Recursos

### Papéis e Responsabilidades  
- Leticia Vitória: Testes Funcionais com Selenium  
- Lucas Bilizaro: Testes manuais com simulação de uso real

### Ambientes Necessários  
- Ambiente local com Live Server no VS Code

### Ferramentas e Frameworks  
- Automação: Selenium  
- Gerenciamento de bugs: Jira

---

## Critérios de Sucesso

### Métricas  
- Tempo de resposta < 10 segundos para funcionalidades principais.  
- Cobertura mínima de 90% das funcionalidades testadas com sucesso.  
- 100% de sucesso nos testes de login e finalização de pedido.

### Cobertura Mínima  
- Testes automatizados cobrindo todos os fluxos críticos.  
- Testes manuais para funcionalidades complexas e não funcionais.

### Defeitos Aceitáveis  
- Bugs leves tolerados se não impactarem o fluxo  
- Defeitos críticos bloqueiam o lançamento e devem ser corrigidos.

