import { useEffect, useState } from 'react'
import FiltroGastos from './components/FiltroGastos'
import FormularioGasto from './components/FormularioGasto'
import ListaGastos from './components/ListaGastos'
import TotalGastos from './components/TotalGastos'
import {
  carregarGastos,
  salvarGastos,
} from './utils/armazenamentoGastos'
import { TODAS_AS_CATEGORIAS } from './utils/categorias'
import './App.css'

// Página principal: reúne o formulário, o total e a lista de gastos.
function App() {
  // Inicializador preguiçoso: lê o localStorage antes do primeiro render,
  // para a lista já aparecer preenchida ao recarregar a página.
  const [gastos, setGastos] = useState(carregarGastos)
  const [categoriaFiltro, setCategoriaFiltro] = useState(TODAS_AS_CATEGORIAS)

  // Sempre que a lista mudar (adicionar ou remover), regrava a versão atual.
  useEffect(() => {
    salvarGastos(gastos)
  }, [gastos])

  // Adiciona o novo gasto ao final da lista.
  function adicionarGasto(novoGasto) {
    setGastos((anteriores) => [...anteriores, novoGasto])
  }

  // Remove o gasto pelo id; o total é recalculado a partir da nova lista.
  function removerGasto(id) {
    setGastos((anteriores) =>
      anteriores.filter((gasto) => gasto.id !== id),
    )
  }

  // A lista exibida é derivada do filtro, sem guardar uma cópia no estado.
  const gastosFiltrados =
    categoriaFiltro === TODAS_AS_CATEGORIAS
      ? gastos
      : gastos.filter((gasto) => gasto.categoria === categoriaFiltro)

  // O total acompanha o filtro: soma apenas os gastos visíveis na lista.
  const total = gastosFiltrados.reduce((soma, gasto) => soma + gasto.valor, 0)

  // Distingue a lista realmente vazia da categoria sem nenhum gasto.
  const mensagemVazia =
    gastos.length === 0
      ? 'Nenhum gasto cadastrado ainda.'
      : 'Nenhum gasto nesta categoria.'

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

        <div className="conteudo-lista">
          <FiltroGastos
            categoriaSelecionada={categoriaFiltro}
            onSelecionarCategoria={setCategoriaFiltro}
          />
          <ListaGastos
            gastos={gastosFiltrados}
            onRemover={removerGasto}
            mensagemVazia={mensagemVazia}
          />
        </div>
      </main>
    </div>
  )
}

export default App
