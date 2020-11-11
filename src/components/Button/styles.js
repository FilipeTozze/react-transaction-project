import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.disabled ? Colors.buttonDisabled  : Colors.buttonBackground};
  height: 5rem;
  color: ${(props) => props.disabled ? '#72737A' : Colors.white};
  border-radius: 1rem;
  :hover {
    ${props => !props.disabled && "opacity: 0.6; cursor: pointer;"}
    
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-sizing: none;
  outline: none;
  background-color: transparent;
  color: ${(props) => props.disabled ? '#72737A' : Colors.white};
  :hover {
    ${props => !props.disabled && "cursor: pointer;"}
  }
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
 
  
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.5rem;
  font-size: 2rem;
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 500;
`;
