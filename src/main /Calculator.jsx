import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'
export default class Calculator extends Component {

    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        console.log('limpar')
    }
    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

    render() {
        /*
        //arrow functions
        //receber valor e passando o valor para funcao addDigit no objeto local onde irei implementar a logica da calculadora
        const addDigit = n => this.addDigit(n)
         //receber valor e passando o valor para funcao setOperation
        const setOperation = op => this.setOperation(op)*/
        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" click={this.clearMemory}  tiplr/>
                <Button label="/" click={this.setOperation}  operation/>
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation}  operation/>
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="0" click={this.addDigit}  />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation}  operation1/>
            </div>
        )
    }
}