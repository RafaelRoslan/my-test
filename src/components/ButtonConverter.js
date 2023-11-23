import styled from "styled-components";




export default function ButtonConverter({onPressFunc, label}){
    return(
        <ButtonElem onPress={onPressFunc}>
            <Label>{label}</Label>
        </ButtonElem>
    );
}

const ButtonElem = styled.TouchableOpacity`
    margin: 30px 0;
  width: 320px;
  height: 64px;
  background-color: #3399ff;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
    font-family: sans-serif;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
`;