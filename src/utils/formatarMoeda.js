// Formatador único de moeda brasileira, reaproveitado em toda a aplicação.
const formatoReal = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

// Formata um número em reais com duas casas decimais (ex.: R$ 12,50).
export function formatarMoeda(valor) {
  return formatoReal.format(valor)
}
