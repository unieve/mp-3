import styled from "styled-components";
import useCalculator from "../hooks/useCalculator";

const StyledCalculator = styled.div`
  background-color: #1b1536;
  border: 2px solid #8b5cf6;
  padding: 2vw;
  margin-top: 2vw;
  max-width: 100%;

  label {
    display: block;
    color: #00e5ff;
    margin-bottom: 1vw;
  }

  input {
    width: 100%;
    padding: 1vw;
    margin-bottom: 2vw;
    background-color: #463568;
    color: #e9e7ff;
    border: 2px solid #8b5cf6;
  }

  input,
  button {
    font-family: 'Rajdhani', Arial, sans-serif;
    font-size: calc(14px + 0.5vw);
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 1vw;
  }

  button {
    flex: 1 1 30%;
    background-color: #ff4fd8;
    color: #1b1536;
    border: none;
    padding: 1vw;
    cursor: pointer;
  }

  button:hover {
    background-color: #00e5ff;
  }

  #output {
    background-color: #101225;
    color: #00e5ff;
    border: 2px solid #8b5cf6;
    padding: 1vw;
    margin-top: 2vw;
    min-height: 3vw;
    text-align: center;
  }

  #output.negative {
    color: red;
  }

  @media screen and (max-width: 750px) {
    .buttons {
      gap: 2vw;
    }

    button {
      flex: 1 1 45%;
      padding: 2vw;
    }

    input {
      padding: 2vw;
    }
  }
`;

export default function Calculator() {
    const {
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        result,
        calculate,
        clearCalculator,
    } = useCalculator();

    return (
        <>
            <h2 className="calculator-title">JavaScript Calculator</h2>

            <StyledCalculator>
                <label htmlFor="first-number">First Number:</label>
                <input
                    type="text"
                    id="first-number"
                    value={firstNumber}
                    onChange={(event) => setFirstNumber(event.target.value)}
                />

                <label htmlFor="second-number">Second Number:</label>
                <input
                    type="text"
                    id="second-number"
                    value={secondNumber}
                    onChange={(event) => setSecondNumber(event.target.value)}
                />

                <div className="buttons">
                    <button onClick={() => calculate("+")}>+</button>
                    <button onClick={() => calculate("-")}>-</button>
                    <button onClick={() => calculate("*")}>*</button>
                    <button onClick={() => calculate("/")}>/</button>
                    <button onClick={() => calculate("power")}>**</button>
                    <button onClick={clearCalculator}>Clear</button>
                </div>

                <h3
                    id="output"
                    className={
                        typeof result === "number" && result < 0 ? "negative" : ""
                    }
                    aria-live="polite"
                >
                    {result}
                </h3>
            </StyledCalculator>
        </>
    );
}
