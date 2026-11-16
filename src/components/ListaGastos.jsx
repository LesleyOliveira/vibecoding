import { formatarMoeda } from '../utils/formatarMoeda'

// Lista de gastos cadastrados, recebida da página principal.
function ListaGastos({
  gastos,
  onRemover,
  mensagemVazia = 'Nenhum gasto cadastrado ainda.',
}) {
  return (
    <section className="lista-gastos">
      <h2>Gastos</h2>

      {gastos.length === 0 ? (
        <p className="lista-gastos-vazio">{mensagemVazia}</p>
      ) : (
        <ul>
          {gastos.map((gasto) => (
            <li key={gasto.id} className="item-gasto">
              <div className="item-gasto-info">
                <span className="item-gasto-descricao">{gasto.descricao}</span>
                <span className="badge-categoria">{gasto.categoria}</span>
              </div>
              <div className="item-gasto-acoes">
                <span className="item-gasto-valor">
                  {formatarMoeda(gasto.valor)}
                </span>
                <button
                  type="button"
                  className="botao-remover"
                  onClick={() => onRemover(gasto.id)}
                  aria-label={`Remover gasto ${gasto.descricao}`}
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaGastos
