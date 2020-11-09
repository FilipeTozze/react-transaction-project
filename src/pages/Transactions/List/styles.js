import styled from "styled-components";
import Colors from "../../../styles/Colors";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    background-color: ${props => Colors.white};
    width: 50rem;
    height: 70vh;
`;

export const TransactionsInfo = styled.div`
    background-color: ${props => Colors.lightFundo};
    padding: 1.5rem;
`;

export const TransactionItems = styled.div`
    background-color: ${props => Colors.white};
    
`;


