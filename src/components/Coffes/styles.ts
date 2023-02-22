import styled from "styled-components";

export const Wrapper = styled.div`
  width:256px;
  height:310px;
  background: ${(props) => props.theme['base-card']};
  display:flex;
  align-items:center ;
  flex-direction:column ;
  text-align:center ;
  padding: 0.8rem;
  border-radius: 6px 36px 6px 36px;
  gap: 0.5rem; 

  >img{
    display: flex;
    margin-top: -44px;
  }

  div.description{
    margin-top: 0.5rem;
    gap: 0.5rem;
    display:flex;
    flex-direction: column;
    margin-bottom: 25px;
     
    h2{
      font-size:20px;
      font-size: 20px;  
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p{
      color: ${(props) => props.theme['base-label']};
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      text-align: center;
    }


  }

  div.infos{
    display:flex;
    flex-direction:row;
    align-items: center;
    gap: 0.5rem;
    text-align: center;

    >p>span{
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }

    div.count{
      background:${(props) => props.theme['base-button']};
      padding: 0.5rem;
      display: flex;
      gap: 0.5rem;
      flex-direction:row;
      border-radius:6px ;
      height: 38px;
    }

    a.carrinho{
      background:${(props) => props.theme['purple-dark']};
      padding: 0.5rem;
      border-radius: 6px;
      display:flex;
      align-items:center;
      height: 38px;
    }
  }

`