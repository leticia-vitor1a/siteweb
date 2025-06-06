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
