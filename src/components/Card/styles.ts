import styled from 'styled-components';

export const Container = styled.div<{hasNavigation: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: 1px solid ${(props) => props.theme.blue};
    background: ${(props) => props.theme['gray-light']};
    color: ${(props) => props.theme['gray-dark']};
    padding: 15px 10px;
    width: 280px;
    max-height: 200px;
    cursor: ${props => (props.hasNavigation ? 'pointer' : 'default')};
    margin: 5px;

    :hover {
        border: 1px solid ${(props) => props.theme.blue};
        background: ${(props) => props.theme.blue};
        color: ${(props) => props.theme.white};
    }
`;
