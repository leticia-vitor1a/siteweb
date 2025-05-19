# História de Usuário: HU01

## Título

Navegação eficiente no site

## Narrativa

**Como** cliente  
**Eu quero** acessar qualquer parte do site em até três cliques  
**Para que** eu consiga navegar facilmente e encontrar o que preciso sem dificuldades

## Critérios de Aceitação

1. O site deve conter um índice (menu) no topo da página  
2. O índice deve ter links visíveis para todas as funcionalidades principais  
3. O acesso a qualquer funcionalidade principal não deve exigir mais que três cliques a partir da página inicial

## Detalhes Técnicos

- Implementar um menu fixo no topo com HTML e CSS  
- Utilizar âncoras ou roteamento para navegação rápida  
- Garantir responsividade para dispositivos móveis

## Dependências

- Estrutura básica do site implementada  
- Definição das funcionalidades principais concluída

## Estimativa

3 Story Points

## Prioridade

Must

## Observações

- Pode-se utilizar frameworks como Bootstrap ou Tailwind para facilitar a construção do menu responsivo



# História de Usuário: HU02
## Título
Consulta ao cardápio por categorias
## Narrativa
**Como** cliente  
**Eu quero** visualizar o cardápio, organizado por categorias  
**Para que** eu possa encontrar facilmente os produtos disponíveis
## Critérios de Aceitação
1. O cardápio deve ser dividido em categorias como lanches, bebidas e sobremesas  
2. Cada produto deve exibir uma imagem representativa  
3. As categorias devem ser claramente identificadas e separadas visualmente
## Detalhes Técnicos
- Utilizar HTML e CSS para estruturar e estilizar o cardápio  
- As imagens devem estar otimizadas para carregamento rápido  
- Possível uso de JavaScript para navegação entre categorias (ex: abas ou filtros)
## Dependências
- Cadastro de produtos no banco de dados  
- Upload ou definição das imagens de cada produto
## Estimativa
5 Story Points
## Prioridade
Must
## Observações
- A responsividade deve ser garantida para diferentes tamanhos de tela


# História de Usuário: HU03

## Título

Visualização dos detalhes dos produtos

## Narrativa

**Como** cliente  
**Eu quero** clicar em um item do cardápio e visualizar mais informações sobre ele  
**Para que** eu possa decidir se quero comprá-lo

## Critérios de Aceitação

1. Ao clicar no produto, deve abrir um pop-up/modal com mais informações  
2. O pop-up deve exibir o nome do produto, descrição, preço e imagem  
3. O pop-up deve ter um botão para adicionar o item à sacola de compras

## Detalhes Técnicos

- Utilizar JavaScript para exibir o modal com os dados do produto  
- As informações podem ser carregadas dinamicamente a partir do banco de dados  
- Garantir que o modal seja acessível e funcione em dispositivos móveis

## Dependências

- Estrutura do cardápio implementada (HU02)  
- Dados completos dos produtos cadastrados

## Estimativa

5 Story Points

## Prioridade

Must

## Observações

- Pode-se usar bibliotecas como Bootstrap Modal ou criar uma solução personalizada




# História de Usuário: HU04
## Título
Adicionar produtos à sacola de compras
## Narrativa
**Como** cliente  
**Eu quero** adicionar produtos à sacola, especificando a quantidade de itens  
**Para que** eu possa montar meu pedido de forma personalizada e prática
## Critérios de Aceitação
1. Cada produto deve ter um botão chamativo "Adicionar à sacola"  
2. Deve ser possível escolher a quantidade antes de adicionar  
3. A sacola deve ser acessível a qualquer momento durante a navegação  
4. A sacola deve exibir os itens adicionados, com nome, quantidade e subtotal
## Detalhes Técnicos
- A sacola pode ser exibida como um ícone fixo no canto da tela  
- Utilizar JavaScript para armazenar os itens selecionados temporariamente (ex: localStorage)  
- Possível integração posterior com backend para pedidos
## Dependências
- Visualização dos detalhes dos produtos (HU03)  
- Estrutura básica de navegação implementada (HU01)
## Estimativa
5 Story Points
## Prioridade
Must
## Observações
- A sacola deve permanecer visível e atualizada mesmo após mudanças de página

# História de Usuário: HU05

## Título

Escolha de ingredientes adicionais

## Narrativa

**Como** cliente  
**Eu quero** adicionar ingredientes extras ao meu lanche  
**Para que** eu possa personalizar minha refeição conforme meu gosto

## Critérios de Aceitação

1. Ao selecionar um lanche, deve haver uma opção para escolher ingredientes extras  
2. Cada ingrediente extra deve ser exibido com nome e preço ao lado  
3. O valor total do lanche deve ser atualizado automaticamente conforme os extras forem selecionados ou removidos  
4. O cliente deve conseguir adicionar o lanche com os extras escolhidos à sacola  
5. Os ingredientes extras devem aparecer no resumo final do pedido

## Detalhes Técnicos

- Utilizar checkboxes para seleção dos ingredientes adicionais  
- O preço total deve ser recalculado em tempo real com JavaScript  
- Os extras devem ser armazenados junto ao item na sacola (como propriedades adicionais)

## Dependências

- Visualização dos detalhes do produto (HU03)  
- Funcionalidade da sacola de compras (HU04)

## Estimativa

8 Story Points

## Prioridade

Should

## Observações







# História de Usuário: HU06

## Título

Finalização do pedido

## Narrativa

**Como** cliente  
**Eu quero** revisar os itens no meu carrinho e confirmar meu pedido  
**Para que** eu possa concluir minha compra com segurança

## Critérios de Aceitação

1. O site deve exibir um resumo do pedido com todos os itens, quantidades, ingredientes extras (se houver) e valores totais  
2. Deve haver um botão de confirmação para finalizar o pedido  
3. O sistema deve solicitar confirmação antes de concluir a compra  
4. Após a confirmação, o cliente deve receber uma mensagem ou tela de sucesso

## Detalhes Técnicos

- A sacola deve ser transformada em um resumo de pedido detalhado  
- O botão de confirmação deve acionar uma função que finalize o pedido (ex: envia para o backend ou armazena no localStorage)  
- Pode-se utilizar um modal ou nova página para a confirmação final

## Dependências

- Funcionalidade da sacola de compras implementada (HU04)  
- Ingredientes adicionais incluídos corretamente no resumo (HU05)

## Estimativa

5 Story Points

## Prioridade

Must

## Observações







# História de Usuário: HU07

## Título

Edição do pedido após finalização

## Narrativa

**Como** cliente  
**Eu quero** poder editar meu pedido após finalizá-lo  
**Para que** eu possa corrigir ou alterar algum detalhe antes da preparação

## Critérios de Aceitação

1. O sistema deve permitir a edição do pedido por um tempo limitado (ex: 5 minutos) após a finalização  
2. Um botão "Editar pedido" deve estar visível durante esse período  
3. O cliente pode modificar itens, quantidades ou extras, com atualização automática do valor total  
4. Após o prazo, as edições são bloqueadas e o sistema informa que o pedido está em preparo

## Detalhes Técnicos

- Implementar um temporizador que controla o período de edição  
- Habilitar/desabilitar a interface de edição conforme o tempo restante  
- Atualizar o valor total do pedido em tempo real durante as edições  
- Exibir mensagens claras sobre o status do pedido (em edição, em preparo)

## Dependências

- Finalização do pedido implementada (HU06)  
- Funcionalidade completa da sacola e edição de itens (HU04 e HU05)

## Estimativa

8 Story Points

## Prioridade

Should

## Observações





# História de Usuário: HU08

## Título

Promoções em destaque na página inicial

## Narrativa

**Como** cliente  
**Eu quero** ver as promoções em destaque na página inicial  
**Para que** eu possa ficar sabendo das ofertas e novidades facilmente

## Critérios de Aceitação

1. O site deve conter um carrossel de imagens na página inicial  
2. O carrossel deve destacar promoções e novidades da hamburgueria  
3. As imagens devem ser clicáveis para levar o cliente à página ou seção relacionada

## Detalhes Técnicos

- Utilizar um plugin ou biblioteca JavaScript para o carrossel (ex: Slick, Swiper)  
- Garantir responsividade para diferentes dispositivos  
- As imagens e links devem ser facilmente configuráveis no backend ou arquivos de dados

## Dependências

- Estrutura básica da página inicial implementada (HU01)  
- Imagens e textos promocionais disponíveis

## Estimativa

5 Story Points

## Prioridade

Could

## Observações

- Pode-se adicionar indicadores visuais e botões de navegação no carrossel para melhorar a usabilidade







# História de Usuário: HU09

## Título

Filtrar produtos no cardápio por categoria

## Narrativa

**Como** cliente  
**Eu quero** filtrar os produtos do cardápio por categoria  
**Para que** eu possa encontrar facilmente o que desejo

## Critérios de Aceitação

1. O site deve permitir que o usuário selecione categorias como "Lanches", "Bebidas" e "Sobremesas"  
2. Ao selecionar uma categoria, somente os produtos dessa categoria devem ser exibidos  
3. Deve ser possível limpar o filtro para visualizar todo o cardápio novamente

## Detalhes Técnicos

- Utilizar botões, abas ou dropdown para seleção de categoria  
- Implementar filtro dinâmico com JavaScript para atualizar a exibição sem recarregar a página  
- Garantir que o filtro funcione bem em dispositivos móveis

## Dependências

- Consulta ao cardápio por categorias (HU02)  
- Estrutura básica de navegação implementada (HU01)

## Estimativa

3 Story Points

## Prioridade

Should

## Observações








# História de Usuário: HU10

## Título

Personalização de pedido com observações

## Narrativa

**Como** cliente  
**Eu quero** poder adicionar observações ao meu pedido  
**Para que** eu possa solicitar modificações específicas

## Critérios de Aceitação

1. Deve haver um campo de texto no pop-up do produto ou no carrinho para adicionar observações  
2. As observações devem ser salvas junto com o item no pedido  
3. O campo deve permitir texto livre e ser facilmente editável antes da finalização

## Detalhes Técnicos

- Adicionar campo de texto no modal de detalhes do produto ou na sacola  
- Garantir que as observações sejam enviadas junto com os dados do pedido ao backend ou armazenadas localmente  
- Validar tamanho máximo do texto para evitar problemas de armazenamento

## Dependências

- Visualização dos detalhes dos produtos (HU03)  
- Funcionalidade da sacola de compras (HU04)

## Estimativa

3 Story Points

## Prioridade

Could

## Observações

- Pode ser útil exibir as observações na confirmação do pedido para revisão final






# História de Usuário: HU11

## Título

Escolher forma de pagamento na finalização do pedido

## Narrativa

**Como** cliente  
**Eu quero** escolher a forma de pagamento ao finalizar o pedido  
**Para que** eu possa pagar da forma que for mais conveniente para mim

## Critérios de Aceitação

1. O sistema deve permitir pagamento via cartão de crédito  
2. O sistema deve permitir pagamento via cartão de débito  
3. O sistema deve permitir pagamento via PIX  
4. O sistema deve permitir pagamento em dinheiro na entrega  
5. O cliente deve poder selecionar a forma de pagamento antes da confirmação do pedido

## Detalhes Técnicos

- Implementar opções de pagamento no formulário de finalização do pedido  
- Integrar gateways de pagamento para cartões e PIX, se possível  
- Para pagamento em dinheiro, apenas registrar a escolha do cliente

## Dependências

- Finalização do pedido implementada (HU06)  
- Interface de revisão e confirmação do pedido

## Estimativa

8 Story Points

## Prioridade

Must

## Observações








# História de Usuário: HU12

## Título

Acesso ao histórico de pedidos anteriores

## Narrativa

**Como** cliente  
**Eu quero** acessar um histórico dos meus pedidos anteriores  
**Para que** eu possa repetir compras facilmente

## Critérios de Aceitação

1. O site deve exibir uma lista com os pedidos anteriores do cliente  
2. Cada pedido deve mostrar detalhes como itens, quantidades, data e valor total  
3. Deve haver uma opção para o cliente refazer o pedido completo com um clique

## Detalhes Técnicos

- Implementar área de usuário com autenticação para exibir pedidos anteriores  
- Armazenar os pedidos no backend vinculados ao usuário  
- Criar funcionalidade que permita carregar os dados do pedido anterior para a sacola atual

## Dependências

- Sistema de login/usuário implementado  
- Finalização e armazenamento de pedidos (HU06 e HU07)

## Estimativa

8 Story Points

## Prioridade

Could

## Observações

- Repetir pedido pode agilizar a experiência do cliente, aumentando a fidelização








# História de Usuário: HU13

## Título

Avaliação do pedido após entrega

## Narrativa

**Como** cliente  
**Eu quero** avaliar meu pedido após a entrega  
**Para que** eu possa compartilhar minha experiência com outros usuários

## Critérios de Aceitação

1. O sistema deve permitir que o cliente avalie o pedido com estrelas (ex: 1 a 5)  
2. Deve permitir adicionar um comentário de texto junto com a avaliação  
3. A avaliação deve estar disponível somente após a confirmação da entrega  
4. As avaliações devem ser exibidas para outros usuários no site (ex: na página do produto)

## Detalhes Técnicos

- Criar interface para avaliação após status de entrega confirmado  
- Armazenar avaliações no backend vinculadas ao pedido e ao cliente  
- Implementar sistema de exibição das avaliações públicas, com média de estrelas

## Dependências

- Histórico de pedidos implementado (HU12)  
- Sistema de autenticação de usuários

## Estimativa

5 Story Points

## Prioridade

Could

## Observações









# História de Usuário: HU14

## Título

Exibir tempo estimado de entrega

## Narrativa

**Como** cliente  
**Eu quero** ver o tempo estimado de entrega antes de finalizar meu pedido  
**Para que** eu saiba quanto tempo devo esperar

## Critérios de Aceitação

1. O sistema deve calcular o tempo estimado de entrega baseado na localização do cliente  
2. O cálculo deve considerar a demanda atual do estabelecimento  
3. O tempo estimado deve ser exibido claramente na tela de revisão do pedido antes da finalização  
4. O tempo deve ser atualizado se a localização ou condições mudarem antes da confirmação

## Detalhes Técnicos

- Integrar API de geolocalização para capturar a localização do cliente  
- Criar algoritmo que considere a distância e a carga de pedidos ativos  
- Atualizar dinamicamente o tempo estimado na interface do usuário

## Dependências

- Finalização do pedido implementada (HU06)  
- Sistema de localização ativado

## Estimativa

8 Story Points

## Prioridade

Should

## Observações







# História de Usuário: HU15

## Título

Escolher entre entrega e retirada no local

## Narrativa

**Como** cliente  
**Eu quero** poder escolher entre entrega e retirada no local  
**Para que** eu possa optar por pegar meu pedido no estabelecimento se preferir

## Critérios de Aceitação

1. Deve haver uma opção para selecionar "Delivery" ou "Retirada" antes da finalização do pedido  
2. Se escolher "Retirada", o sistema deve ajustar o fluxo e não solicitar endereço para entrega  
3. O tempo estimado ou horário de retirada deve ser exibido para a opção escolhida

## Detalhes Técnicos

- Adicionar opção no formulário de finalização do pedido para seleção do método  
- Ajustar backend para tratar os dois tipos de pedido de forma adequada  
- Atualizar interface para mostrar informações específicas de cada opção

## Dependências

- Finalização do pedido (HU06)  
- Tempo estimado de entrega (HU14)

## Estimativa

5 Story Points

## Prioridade

Must

## Observações

- Pode ser interessante oferecer opção de agendar horário para retirada






# História de Usuário: HU16

## Título

Opção de saída (logout) do usuário

## Narrativa

**Como** cliente  
**Eu quero** poder sair da minha conta no site  
**Para que** eu mantenha minha privacidade

## Critérios de Aceitação

1. O sistema deve oferecer um botão "Sair" acessível no menu superior  
2. Após clicar em "Sair", o usuário deve ser desconectado e redirecionado para a página inicial ou de login  
3. O botão deve estar visível e funcional em todas as páginas após o login

## Detalhes Técnicos

- Implementar logout que encerra a sessão do usuário  
- Garantir que após logout, o usuário não tenha acesso a áreas restritas  
- Atualizar interface para refletir o estado deslogado

## Dependências

- Sistema de autenticação e login implementado

## Estimativa

3 Story Points

## Prioridade

Must

## Observações



