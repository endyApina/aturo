import styled from 'styled-components/native';
import { Button } from 'react-native-paper'; 

export const InputViewContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-self: center;
    background-color: ${({ bgcolor }) => bgcolor};
    max-width: ${({ width }) => width};
    width:100%;
    border: ${({ border }) => border?border:'none'};
    border-bottom-color: ${({ underline }) => underline ? underline: 'transparent'};
    border-radius: ${({ radius }) => radius};
    margin: ${({ space }) => space ? space: '0px'};
    padding: ${({ pad }) => pad ? pad: '0px'};
`;

export const TextInputContainer = styled.TextInput` 
    width: 100%;
    padding: 10px;
    border-radius: ${({ radius }) => radius};
    color: ${({ txtcolor }) => txtcolor ? txtcolor : '#000'};
    padding-left: ${({ paddingLeft }) => paddingLeft ? paddingLeft : '25px'};
    background-color: transparent;
    elevation: 0;
    height: ${({inputHeight}) => inputHeight ? inputHeight : '45px'};
`;
