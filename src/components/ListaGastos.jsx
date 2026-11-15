import { formatarMoeda } from '../utils/formatarMoeda'

// Gastos de exemplo apenas para visualizar o layout.
// Serão substituídos pelos gastos reais quando a lógica chegar.
const gastosExemplo = [
  { id: 1, descricao: 'Supermercado', categoria: 'Alimentação', valor: 152.3 },
  { id: 2, descricao: 'Passagem de ônibus', categoria: 'Transporte', valor: 4.4 },
  { id: 3, descricao: 'Cinema', categoria: 'Lazer', valor: 39.9 },
]

// Lista de gastos cadastrados.
function ListaGastos() {
  return (
    <section className="lista-gastos">
      <h2>Gastos</h2>

      <ul>
        {gastosExemplo.map((gasto) => (
          <li key={gasto.id} className="item-gasto">
            <div className="item-gasto-info">
              <span className="item-gasto-descricao">{gasto.descricao}</span>
              <span className="badge-categoria">{gasto.categoria}</span>
            </div>
            <span className="item-gasto-valor">
              {formatarMoeda(gasto.valor)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ListaGastos
