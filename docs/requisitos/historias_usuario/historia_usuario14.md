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


