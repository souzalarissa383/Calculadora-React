import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}


export default class Calculator extends Component {
    state = { ...initialState }

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    // restaura para o estado inicial

    clearMemory() {
        this.setState({ ...initialState })
    }
    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const result = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[1] = 0;
            }

            this.setState({
                displayValue: values[0],
                operation: result ? null : operation,
                current: result ? 0 : 1,
                clearDisplay: !result,
                values
            })

        }
    }
    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            // indice do valor que estou alterando 
            const i = this.state.current;
            // converte para float 

            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            // altera valor atual 

            values[i] = newValue;
            // substitui valor dentro do state

            this.setState({ values })
            console.log(values)
        }
    }
    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button triple label="AC" click={this.clearMemory} />
                <Button operation label="/" click={this.setOperation} />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button operation label="*" click={this.setOperation} />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button operation label="-" click={this.setOperation} />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button operation label="+" click={this.setOperation} />
                <Button double label="0" click={this.addDigit} />
                <Button label="." click={this.addDigit} />
                <Button operation label="=" click={this.setOperation} />
            </div>
        )
    }
}