import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 70px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color: ${(props) => props.theme['gray-dark']};
`;

export const NavigationHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    width: 40px;
    height: 40px;
    outline: 0;
    border: 1px solid ${(props) => props.theme.blue};
    background: ${(props) => props.theme['gray-light']};
    border-radius: 5px;

    :hover {
        border: 1px solid ${(props) => props.theme.blue};
        background: ${(props) => props.theme.blue};
    }
`;
