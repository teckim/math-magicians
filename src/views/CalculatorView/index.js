import Calculator from '../../components/Calculator';
import './style.scss';

const CalculatorView = () => (
  <section className="container">
    <div className="calculator-view">
      <h1>Let&apos;s do some math!</h1>
      <Calculator />
    </div>
  </section>
);

export default CalculatorView;
