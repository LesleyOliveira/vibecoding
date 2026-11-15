import { useState } from 'react'
import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import './App.css'

// Página principal: reúne o formulário, o total e a lista de gastos.
function App() {
  const [gastos, setGastos] = useState([])

  // Adiciona o novo gasto ao final da lista.
  function adicionarGasto(novoGasto) {
    setGastos((anteriores) => [...anteriores, novoGasto])
  }

  // O total é sempre derivado da lista, sem guardar estado duplicado.
  const total = gastos.reduce((soma, gasto) => soma + gasto.valor, 0)

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
          <FormularioGasto onAdicionar={adicionarGasto} />
          <TotalGastos total={total} />
        </div>

        <ListaGastos gastos={gastos} />
      </main>
    </div>
  )
}

export default App
