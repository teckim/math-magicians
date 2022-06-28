import { Component } from 'react';
import calculate from '../../logic/calculate';
import './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      next: event.target.value,
    });
  }

  handleClick(event) {
    const operation = event.target.value;
    const calc = calculate(this.state, operation);

    this.setState(calc);
  }

  render() {
    const { next, total } = this.state;

    return (
      <div className="calculator">
        <div className="calculator__input-wrapper">
          <input className="calculator__input" name="equation" disabled onChange={this.handleInputChange} value={next || total || 0} />
        </div>
        <div className="calculator__actions">
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="AC">AC</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="+/-">+/-</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="%">%</button>
          <button className="calculator__btn calculator__btn--primary" onClick={this.handleClick} type="button" value="÷">÷</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="7">7</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="8">8</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="9">9</button>
          <button className="calculator__btn calculator__btn--primary" onClick={this.handleClick} type="button" value="x">x</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="4">4</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="5">5</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="6">6</button>
          <button className="calculator__btn calculator__btn--primary" onClick={this.handleClick} type="button" value="-">-</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="1">1</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="2">2</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value="3">3</button>
          <button className="calculator__btn calculator__btn--primary" onClick={this.handleClick} type="button" value="+">+</button>
          <button className="calculator__btn calculator__btn--span" onClick={this.handleClick} type="button" value="0">0</button>
          <button className="calculator__btn" onClick={this.handleClick} type="button" value=".">.</button>
          <button className="calculator__btn calculator__btn--primary" onClick={this.handleClick} type="button" value="=">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
