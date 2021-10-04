import React from 'react';
import Keypad from './Keypad';
import ResultBox from './ResultBox';
import Button from './Button';
import { useState } from "react";

function Calculator() {
    const [data, setData] = useState('');
    const [isResult, setIsResult] = useState(false);

    const calcualate = () => {
        try {
            const result = eval(data
                .replace(/\b0+\b/g, 'z')                            // replace bare zeros with sentinel 
                .replace(/[1-9\.]0+/g, m => m.replace(/0/g, 'z'))   // save these too
                .replace(/0/g, '')                                  // throw away the rest of the zeros
                .replace(/z/g, '0')                                 // turn sentinels back to zeros
            );
            setData(result);
        } catch {
            setData('error');
        }

    }

    const clickButton = (event) => {
        const value = event.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                setData('');

                break;
            case 'equal':
                calcualate();
                setIsResult(true);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                setData(data + value);
                setIsResult(false);
                break;
            default:
                if (isResult === true) {
                    setData(value);
                    setIsResult(false);
                } else if (data.includes("error")) {
                    setData(value)
                } else {
                    setData(data + value);
                }

        }
    }

    return (
        <div className="calculator">
            <ResultBox data={data} />
            <Keypad>
                <Button onClick={clickButton} label="C" value="clear" />
                <Button onClick={clickButton} label="7" value="7" />
                <Button onClick={clickButton} label="4" value="4" />
                <Button onClick={clickButton} label="1" value="1" />

                <Button onClick={clickButton} label="+" size="2" value="+" />
                <Button onClick={clickButton} label="8" value="8" />
                <Button onClick={clickButton} label="5" value="5" />
                <Button onClick={clickButton} label="2" value="2" />

                <Button onClick={clickButton} label="-" value="-" />
                <Button onClick={clickButton} label="9" value="9" />
                <Button onClick={clickButton} label="6" value="6" />
                <Button onClick={clickButton} label="3" value="3" />


                <Button onClick={clickButton} label="x" value="*" />
                <Button onClick={clickButton} label="/" value="/" />
                <Button onClick={clickButton} label="." value="." />
                <Button onClick={clickButton} label="0" value="0" />

                <Button onClick={clickButton} label="=" value="equal" />
            </Keypad>
        </div>
    );
}
export default Calculator;