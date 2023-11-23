import styled from "styled-components";


export default function Logo({placeholderImagePath}){
    return(
        <LogoContainer>
            <ImageElem source={placeholderImagePath}/>
        </LogoContainer>
    );
}



const ImageElem = styled.Image`
    width: 320px;
    height: 150px;
    object-fit: contain;
`;

const LogoContainer = styled.View`
margin: 40px 0;
  background-color: #3399ff;
  width: 320px;
  height: 180px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;