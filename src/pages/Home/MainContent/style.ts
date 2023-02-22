import styled from "styled-components";
import backbround from "../../../assets/Background.png"

export const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-image:url(${backbround});
  background-repeat: no-repeat;
  background-size: cover;
  flex-wrap: wrap;


  @media screen and (min-width: 1140px) {
    width: 100%;
  }

  @media screen and (max-width: 1139px) {
    gap: 16px;
    width: 100vw;
  }

  div.container{
    display:flex;
    flex-direction:row;
    align-items: center;
    gap: 4rem;
    margin-top: 94px;
    margin-bottom: 108px;
    padding: 1rem;

    @media screen and (min-width: 1140px) {
      max-width: 1250px;
    }

    > img{
      width:100%;
      height:auto;
    }

    @media screen and (max-width: 1139px) {
      width:100%;
      display:flex;
      flex-direction:column;
      margin-top: 0px;
    }

  div.infoHome{
    width: 800px;
    width:100%;
    gap: 16px;
    display:flex ;
    flex-direction: column;
    flex-wrap: wrap;

    div.infoText{
      display:flex ;
      flex-direction: column;
      flex-wrap: wrap;
      width:100%;
      height: 100%;

      h1{
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;
      color:  ${(props) => props.theme['base-title']};
      margin-bottom: 16px;
      }

      @media screen and (max-width: 500px) {
        
        h1{
          font-size: 36px;
        }
      }


    p{
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      color:  ${(props) => props.theme['base-subtitle']}
    }
    }
  }
  }

`
export const Info = styled.div`
  display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.1rem;
    row-gap: 1rem;
    margin-top: 66px;

    >div{
      display: flex;
      flex-direction:row;
      gap: 0.5rem;
      align-items: center ;
      height: auto;

      p{
        font-weight: 400;
        font-size: 16px;
        color:  ${(props) => props.theme['base-text']}
      }
    }

    @media (max-width: 580px) {
      grid-template-columns: repeat(1, 1fr);
      margin-top: 16px;
      margin-bottom: 0px;
    }
`
