import styled, { createGlobalStyle } from "styled-components";
import Colors from "./Colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, button, input {
        font-family: Roboto, sans-serif;
    }    
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;

        margin-top: 2rem;
        background-color: ${(props) => Colors.fundo};
    }

    @media (max-width: 630px) {
        html {
            font-size: 50%;
        }

    }

    @media (max-width: 420px) {
        html {
            font-size: 35%;
        }

    }

    a {
        text-decoration: none;
    }

`;

export const ContainerG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentG = styled.div`
  background-color: ${(props) => Colors.white};
  width: 50rem;
  height: 70vh;

  @media (max-width: 450px) {
    width: 100%;
    height: 100vh;
  }
`;
