import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => Colors.white};
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => Colors.buttonBackground};
  color: ${(props) => Colors.white};
  height: 5rem;
  border-radius: 1rem;
  width: 35rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
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
