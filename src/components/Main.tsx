import styled from "styled-components";
import type { ReactNode } from "react";

const StyledMain = styled.main`
  background-color: #15132b;
  color: #e9e7ff;
  padding: 3vw;
  min-height: 100vh;
  width: 70%;

  h2 {
    font-size: calc(20px + 1vw);
    margin-bottom: 2vw;
    color: #c084fc;
  } 
    h2.calculator-title {
        color: #ff4fd8;
    }
    

  p {
    font-size: calc(14px + 0.5vw);
    margin-bottom: 2vw;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export default function Main({ children }: { children: ReactNode }) {
    return <StyledMain>{children}</StyledMain>;
}