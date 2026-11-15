import { formatarMoeda } from '../utils/formatarMoeda'

// Mostra o total de gastos; recebe o valor já calculado pronto para exibição.
function TotalGastos({ total }) {
  return (
    <section className="total-gastos">
      <span className="total-gastos-rotulo">Total</span>
      <strong className="total-gastos-valor">{formatarMoeda(total)}</strong>
    </section>
  )
}

export default TotalGastos
