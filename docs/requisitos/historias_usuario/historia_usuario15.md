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
