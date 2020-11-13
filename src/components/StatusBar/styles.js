import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  height: 2.5rem;
  background-color: ${(props) => Colors.lightFundo};
  padding: 0 0.5rem 0 0.5rem;
`;

export const SignalInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const Signal = styled.div`
  display: flex;
  justify-content: start;
  margin-right: 1rem;
`;

export const Name = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 1rem;
`;

export const Wifi = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 1rem;
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-weight: 600;
`;

export const BatteryInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  font-size: 1.5rem;
`;

export const Battery = styled.div`
  margin-left: 0.3rem;
  font-size: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
