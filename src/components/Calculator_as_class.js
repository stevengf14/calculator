import React, { Component } from 'react';
import Keypad from './Keypad';
import ResultBox from './ResultBox';
import Button from './Button';

class Calculator_as_class extends Component {
    state = {
        data: '',
        result: false
    }

    calcualate = () => {
        try {
            const result = eval(this.state.data
                .replace(/\b0+\b/g, 'z')                            // replace bare zeros with sentinel 
                .replace(/[1-9\.]0+/g, m => m.replace(/0/g, 'z'))   // save these too
                .replace(/0/g, '')                                  // throw away the rest of the zeros
                .replace(/z/g, '0')                                 // turn sentinels back to zeros
            );
            this.setState({
                data: result
            });
        } catch {
            this.setState({
                data: 'error'
            });
        }

    }

    clickButton = (event) => {
        const value = event.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                this.setState({
                    data: ''
                });

                break;
            case 'equal':
                this.calcualate();
                this.setState({
                    result: true
                });
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.setState({
                    data: this.state.data + value,
                    result: false
                });
                break;
            default:
                if (this.state.result === true) {
                    this.setState({
                        data: value,
                        result: false
                    });
                } else if (this.state.data.includes("error")) {
                    this.setState({
                        data: value
                    });
                } else {
                    this.setState({
                        data: this.state.data + value
                    });
                }

        }
    }

    render() {
        return (
            <div className="calculator">
                <ResultBox data={this.state.data} />
                <Keypad>
                    <Button onClick={this.clickButton} label="C" value="clear" />
                    <Button onClick={this.clickButton} label="7" value="7" />
                    <Button onClick={this.clickButton} label="4" value="4" />
                    <Button onClick={this.clickButton} label="1" value="1" />

                    <Button onClick={this.clickButton} label="+" size="2" value="+" />
                    <Button onClick={this.clickButton} label="8" value="8" />
                    <Button onClick={this.clickButton} label="5" value="5" />
                    <Button onClick={this.clickButton} label="2" value="2" />

                    <Button onClick={this.clickButton} label="-" value="-" />
                    <Button onClick={this.clickButton} label="9" value="9" />
                    <Button onClick={this.clickButton} label="6" value="6" />
                    <Button onClick={this.clickButton} label="3" value="3" />


                    <Button onClick={this.clickButton} label="x" value="*" />
                    <Button onClick={this.clickButton} label="/" value="/" />
                    <Button onClick={this.clickButton} label="." value="." />
                    <Button onClick={this.clickButton} label="0" value="0" />

                    <Button onClick={this.clickButton} label="=" value="equal" />
                </Keypad>
            </div>
        );
    }
}
export default Calculator_as_class;