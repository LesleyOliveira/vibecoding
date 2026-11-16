// Chave única no localStorage; o prefixo evita colisão com outros dados da origem.
const CHAVE_GASTOS = 'controle-gastos:gastos'

// Lê a lista salva. Qualquer problema (vazio, JSON inválido, formato inesperado)
// resulta em lista vazia, para a aplicação nunca quebrar por dado corrompido.
export function carregarGastos() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_GASTOS))
    if (!Array.isArray(dados)) return []

    // Descarta itens fora do formato esperado, mantendo o restante.
    return dados.filter(
      (gasto) =>
        gasto &&
        typeof gasto.id === 'string' &&
        typeof gasto.descricao === 'string' &&
        typeof gasto.categoria === 'string' &&
        typeof gasto.valor === 'number' &&
        Number.isFinite(gasto.valor),
    )
  } catch {
    return []
  }
}

// Serializa a lista em JSON e grava. Falhas (modo privado, cota cheia)
// são ignoradas: a aplicação continua funcionando em memória.
export function salvarGastos(gastos) {
  try {
    localStorage.setItem(CHAVE_GASTOS, JSON.stringify(gastos))
  } catch {
    // Sem ação: persistência é um extra, não pode derrubar a interface.
  }
}
