import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 6rem;
  background-color: ${props => Colors.lightFundo};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const ContentIcon = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;
`;

export const Icon = styled.div`
  color: ${(props) => Colors.buttonBackground};
  cursor: pointer;
`;

export const Label = styled.span`
  display: flex;
  flex: 2;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 500;
`;
