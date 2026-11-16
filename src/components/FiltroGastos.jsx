import { CATEGORIAS, TODAS_AS_CATEGORIAS } from '../utils/categorias'

// Filtro por categoria da lista de gastos; o valor selecionado fica na página principal.
function FiltroGastos({ categoriaSelecionada, onSelecionarCategoria }) {
  return (
    <section className="filtro-gastos">
      <div className="campo">
        <label htmlFor="filtro-categoria">Filtrar por categoria</label>
        <select
          id="filtro-categoria"
          name="filtro-categoria"
          value={categoriaSelecionada}
          onChange={(evento) => onSelecionarCategoria(evento.target.value)}
        >
          <option value={TODAS_AS_CATEGORIAS}>{TODAS_AS_CATEGORIAS}</option>
          {CATEGORIAS.map((categoriaOpcao) => (
            <option key={categoriaOpcao} value={categoriaOpcao}>
              {categoriaOpcao}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}

export default FiltroGastos
