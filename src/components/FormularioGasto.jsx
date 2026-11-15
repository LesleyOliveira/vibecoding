// Categorias fixas disponíveis para classificar os gastos.
const CATEGORIAS = ['Alimentação', 'Transporte', 'Lazer', 'Outros']

// Formulário de cadastro de gasto: por enquanto só o layout, sem estado.
function FormularioGasto() {
  return (
    <form className="formulario-gasto">
      <h2>Novo gasto</h2>

      <div className="campo">
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          name="descricao"
          type="text"
          placeholder="Ex.: Supermercado"
        />
      </div>

      <div className="campo">
        <label htmlFor="valor">Valor (R$)</label>
        <input
          id="valor"
          name="valor"
          type="number"
          min="0"
          step="0.01"
          placeholder="0,00"
        />
      </div>

      <div className="campo">
        <label htmlFor="categoria">Categoria</label>
        <select id="categoria" name="categoria" defaultValue="Alimentação">
          {CATEGORIAS.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      {/* O envio do formulário será implementado na próxima missão. */}
      <button type="button" className="botao-adicionar">
        Adicionar gasto
      </button>
    </form>
  )
}

export default FormularioGasto
