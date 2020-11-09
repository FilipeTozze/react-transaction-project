import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: .5rem 0 2.5rem 0;
`;

export const Label = styled.span`
    color: ${props => Colors.black};
    font-size: 1.6rem;
    font-weight: 600;
`;

export const Value = styled.span`
    color: ${props => Colors.primary};
    font-size: 2.3rem;
    font-weight: bold;
    padding-top: 1rem;
`;