import styled from "styled-components";
import Colors from "../../styles/Colors";

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

export const Spinner = styled.div`
    width: 5rem;
    height: 5rem;
    display: inline-block;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: ${props => Colors.white};
    margin-bottom: 10rem;
    animation: 1s spin infinite ease-in-out;
    @keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
`;