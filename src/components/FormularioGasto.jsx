import { useState } from 'react'
import { CATEGORIAS } from '../utils/categorias'

// Converte "12,50" ou "12.50" em 12.5; devolve NaN quando não for número.
function converterValor(valor) {
  return Number(valor.trim().replace(',', '.'))
}

// Valida os campos e devolve só as mensagens dos campos inválidos.
function validar(descricao, valor) {
  const erros = { descricao: '', valor: '' }

  // A descrição é obrigatória: apenas espaços em branco não contam.
  if (descricao.trim() === '') {
    erros.descricao = 'Informe a descrição do gasto.'
  }

  // A validação usa o mesmo conversor do salvamento, aceitando vírgula decimal.
  const valorNumerico = converterValor(valor)
  if (valor.trim() === '') {
    erros.valor = 'Informe o valor do gasto.'
  } else if (Number.isNaN(valorNumerico) || valorNumerico <= 0) {
    erros.valor = 'O valor deve ser maior que zero.'
  }

  return erros
}

// Formulário de cadastro de gasto: valida os campos e envia o gasto para a lista.
function FormularioGasto({ onAdicionar }) {
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [categoria, setCategoria] = useState(CATEGORIAS[0])
  const [erros, setErros] = useState({ descricao: '', valor: '' })

  function aoEnviar(evento) {
    evento.preventDefault()

    const novosErros = validar(descricao, valor)

    // Se algo estiver inválido, mostra as mensagens e não adiciona nada.
    if (novosErros.descricao || novosErros.valor) {
      setErros(novosErros)
      return
    }

    onAdicionar({
      id: crypto.randomUUID(),
      descricao: descricao.trim(),
      categoria,
      valor: converterValor(valor),
    })

    // Limpa o formulário apenas quando o gasto é adicionado.
    setDescricao('')
    setValor('')
    setErros({ descricao: '', valor: '' })
  }

  return (
    // noValidate evita o balão nativo do navegador; a validação é toda nossa.
    <form className="formulario-gasto" onSubmit={aoEnviar} noValidate>
      <h2>Novo gasto</h2>

      <div className="campo">
        <label htmlFor="descricao">Descrição</label>
        <input
          id="descricao"
          name="descricao"
          type="text"
          placeholder="Ex.: Supermercado"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          aria-invalid={Boolean(erros.descricao)}
          aria-describedby={erros.descricao ? 'erro-descricao' : undefined}
        />
        {erros.descricao && (
          <p className="mensagem-erro" id="erro-descricao">
            {erros.descricao}
          </p>
        )}
      </div>

      <div className="campo">
        <label htmlFor="valor">Valor (R$)</label>
        <input
          id="valor"
          name="valor"
          type="text"
          inputMode="decimal"
          placeholder="0,00"
          value={valor}
          onChange={(evento) => setValor(evento.target.value)}
          aria-invalid={Boolean(erros.valor)}
          aria-describedby={erros.valor ? 'erro-valor' : undefined}
        />
        {erros.valor && (
          <p className="mensagem-erro" id="erro-valor">
            {erros.valor}
          </p>
        )}
      </div>

      <div className="campo">
        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={(evento) => setCategoria(evento.target.value)}
        >
          {CATEGORIAS.map((categoriaOpcao) => (
            <option key={categoriaOpcao} value={categoriaOpcao}>
              {categoriaOpcao}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="botao-adicionar">
        Adicionar gasto
      </button>
    </form>
  )
}

export default FormularioGasto
