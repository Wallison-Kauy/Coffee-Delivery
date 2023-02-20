import styled from "styled-components";
import backbround from "../../../assets/Background.png"

export const MainContainer = styled.div`
  display:flex;
  flex-direction: row;
  max-width:100%;
  max-height: 600px;
  align-items: center;
  background-image:url(${backbround});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-evenly;
`

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  max-width: 700px ;
  height: 100%;
  gap: 1rem 0.5rem;
  padding: 0 0.5rem;

  h1{
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color:  ${(props) => props.theme['base-title']}
  }

  p{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color:  ${(props) => props.theme['base-subtitle']}
  }
  
  >div{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.1rem;
    margin-top: 66px;
    margin-bottom: 20px; ;

    >div{
      display: flex;
      flex-direction:row;
      gap: 0.5rem;
      align-items: center ;

      p{
        font-weight: 400;
        font-size: 16px;
        color:  ${(props) => props.theme['base-text']}
      }

    }
  }

`
