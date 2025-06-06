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
