import styled from "styled-components";
import Colors from "../../../../styles/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  border-bottom: 2px solid ${(props) => Colors.lightFundo};
`;

export const UserName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 1.8rem;
`;

export const Data = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  padding-top: 1rem;
`;

export const InfoTransction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Status = styled.span`
  font-size: 1.6rem;
  color: gray;
`;

export const Value = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
  padding-top: 1rem;
`;
