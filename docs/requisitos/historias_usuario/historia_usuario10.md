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
