import { useState } from "react";

export default function useCalculator() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [result, setResult] = useState<number | string>("");

    function calculate(operation: string) {
        const num1 = Number(firstNumber);
        const num2 = Number(secondNumber);

        if (
            firstNumber.trim() === "" ||
            secondNumber.trim() === "" ||
            !Number.isFinite(num1) ||
            !Number.isFinite(num2)
        ) {
            setResult("Please enter two valid numbers.");
            return;
        }

        let answer = 0;

        if (operation === "+") {
            answer = num1 + num2;
        } else if (operation === "-") {
            answer = num1 - num2;
        } else if (operation === "*") {
            answer = num1 * num2;
        } else if (operation === "/") {
            if (num2 === 0) {
                setResult("Cannot divide by zero.");
                return;
            }

            answer = num1 / num2;
        } else if (operation === "power") {
            if (!Number.isInteger(num2)) {
                setResult("Please use an integer exponent.");
                return;
            }

            if (num1 === 0 && num2 < 0) {
                setResult("Cannot divide by zero.");
                return;
            }

            answer = 1;
            let exponent = num2;

            if (exponent < 0) {
                exponent = -exponent;
            }

            for (let i = 0; i < exponent; i++) {
                answer = answer * num1;
            }

            if (num2 < 0) {
                answer = 1 / answer;
            }
        }

        setResult(answer);
    }

    function clearCalculator() {
        setFirstNumber("");
        setSecondNumber("");
        setResult("");
    }

    return {
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        result,
        calculate,
        clearCalculator,
    };
}