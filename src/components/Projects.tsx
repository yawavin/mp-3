import { useState} from "react";
import CalcOutput from "./CalcOutput.tsx";

export default function Projects() {
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [output, setOutput] = useState("");
    const [color, setColor] = useState("white");

    function power() {
        let num = 1;
        let a = Number(firstNum);
        let b = Number(secondNum);

        if (b < 0) {
            for (let i = 0; i < (-1 * b); i++) {
                num *= a;
            }
            num = 1 / num
        }

        else {
            for (let i = 0; i < b; i++) {
                num *= a;
            }
        }

        turnRed(num);
        setOutput(String(num));
    }

    function addition() {
        let sum = Number(firstNum) + Number(secondNum)
        turnRed(sum);
        setOutput(String(sum));
    }

    function subtraction() {
        let difference = Number(firstNum) - Number(secondNum)
        turnRed(difference);
        setOutput(String(difference));
    }

    function multiplication() {
        let product = Number(firstNum) * Number(secondNum);
        turnRed(product);
        setOutput(String(product));
    }

    function division() {
        let product = Number(firstNum) / Number(secondNum);
        turnRed(product);
        setOutput(String(product));
    }

    function clear_all() {
        setOutput("");
        setFirstNum("");
        setSecondNum("");
    }

    function turnRed(num: number) {
        let color = num < 0 ? "red" : "white";
        setColor(color);
    }

    return (
        <>
            <div className="entry">
                <h3>ThriftU | December 2025</h3>
                <p>Developed full-stack campus secondhand marketplace web application using Flask, MongoDB, and JavaScript in team
                    of 4</p>
                <p>Implemented dynamic feed supporting searching, filtering, listing, messaging, and PayPal API checkout
                    functionality</p>
            </div>

            <div className="entry">
                <h3>Statistical Text Similarity Model | December 2023</h3>
                <p>Employed the use of statistical factors to develop a model that determines, given an arbitrary list of sources,
                    the most likely source of a given body of text</p>
                <p>Applied knowledge of fundamental Python concepts such as class development and the use of dictionaries for data
                    storage/retrieval</p>
            </div>

            <div id="calculator">
                <h3>Calculator</h3>
                <label>
                    First number: <input type="text" id="first-number" value={firstNum}
                                         onChange={e => setFirstNum(e.target.value)}/>
                </label>
                <label>
                    Second number: <input type="text" id="second-number" value={secondNum}
                                          onChange={e => setSecondNum(e.target.value)}/>
                </label>

                <button onClick={addition}>+</button>
                <button onClick={subtraction}>-</button>
                <button onClick={multiplication}>*</button>
                <button onClick={division}>/</button>
                <button onClick={power}>**</button>
                <button onClick={clear_all}>Clear</button>

                <CalcOutput $color={color}>{output}</CalcOutput>
            </div>
        </>

    )
}

