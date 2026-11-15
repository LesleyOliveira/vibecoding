import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

// Página principal: reúne o formulário, o total e a lista de gastos.
function App() {
  return (
    <div className="app">
      <header className="cabecalho">
        <h1>Controle de Gastos</h1>
        <p className="cabecalho-subtitulo">
          Anote seus gastos e acompanhe o total.
        </p>
      </header>

      <main className="conteudo">
        <div className="conteudo-formulario">
          <FormularioGasto />
          {/* O total ainda é fixo; o cálculo vem na próxima missão. */}
          <TotalGastos total={0} />
        </div>

        <ListaGastos />
      </main>
    </div>
  )
}

export default App
