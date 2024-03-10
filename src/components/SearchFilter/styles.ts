import styled from 'styled-components';

export const InputLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

export const TextInput = styled.input`
    padding: 7px;
    border: 1px solid ${(props) => props.theme.blue};
    border-radius: 15px;
`;
