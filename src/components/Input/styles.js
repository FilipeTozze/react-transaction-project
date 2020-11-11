import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 5.5rem;
  margin-bottom: 1.2rem;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    height: 4.5rem;

    border: 1px solid ${(props) => Colors.borderColorInput};
    background: transparent;
    border-radius: 0.5rem;
    box-sizing: border-box;
    outline: none;

    font-size: 1.6rem;
    font-weight: 300;
    color: ${(props) => Colors.primaryText};

    :focus ~ span,
    :valid ~ span {
      transform: translateX(-0.6rem) translateY(-2rem);
      transition: 0.2s;
    }
  }
`;

export const Label = styled.span`
  position: absolute;
  top: 1rem;
  left: 0.9rem;
  padding: 0.5rem;
  display: inline-block;
  font-size: 1.4rem;
  color: ${(props) => Colors.borderColorInput};
  pointer-events: none;
  z-index: 10;
  background-color: white;
`;

export const Error = styled.h6`
  position: absolute;
  z-index: 11;
  color: ${(props) => Colors.red};
  bottom: -4px;
  left: 5px;
`;
