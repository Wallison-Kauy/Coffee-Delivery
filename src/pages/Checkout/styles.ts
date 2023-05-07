import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;

`;

export const Container = styled.div`
  max-width: 1330px;
  width:100% ;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  >div{
    width: 100%;
  }

  @media screen and(max-width: 800px){
    flex-direction: column;
    gap: 0;
  }

  .botaoConfirma{
      margin-top: 1rem ;
      background:${(props) => props.theme["yellow"]};
      padding: 8px 12px; 
      color: ${(props) => props.theme["white"]};
      height:46px;
      font-weight: bold;
      width: 100% ;
    }

  @media screen and (max-width: 1130px) {
    flex-direction: column;
    align-items:center;
    }

  .coffelist{
    display:flex;
    width:100% ;
    flex-direction:column ;
    overflow-x: hidden;
    gap: 1.5rem;
    width: max-content;
  }

  .enderecoEntrega{
    background: ${(props) => props.theme["base-card"]};
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    padding: 40px;
    max-width: 560px;
    max-height: 372px;
  }

  .InfoEnderecoEnetrega{
    display: flex;
    flex-direction: row;
    padding-bottom: 32px;
    gap: 8px;

    img{
      width:22px ;
      height: 22px;
    }

    p{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme["base-text"]};
    }
  }
  
  .form {
    display: flex;
    flex-direction: column;
    max-width: 640px;
    max-height: 591px;
    gap: 16px;

    h4{
      font-size: 18px;
      color: ${(props) => props.theme["base-subtitle"]};
      font-weight: 700;
      padding-bottom: 1rem;
    }

    
    

    form{
      display: flex;
      flex-direction: column ;
      gap: 1rem;
    }

    input{
      padding: 12px;
      gap: 4px;
      background: #EEEDED;
      border: 1px solid #E6E5E5;
      border-radius: 4px;

      color: #8D8686;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
    }

    .trincaporcento{
      display:flex;
      flex-direction:row ;
      gap: 16px;
      input{
        width: 200px;
      }
      input:last-child{
        max-width:348px;
      }

      @media screen and (max-width: 1130px) {
        display: none;
      }
    }
  }
  
  .cafesSelecionados {
    display: flex;
    width:100% ;
    flex-direction: column;
    max-width: 448px;
    max-height: 591px;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px 44px 6px 44px;
    padding: 2.5rem;
    gap: 1.5rem;
  }

  .resumoItems{
    width:100% ;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    >div{
      display:flex;
      flex-direction: row;
      justify-content: space-between;

      
    }
    > button{
      margin-top: 1rem ;
      background:${(props) => props.theme["yellow"]};
      padding: 8px 12px; 
      color: ${(props) => props.theme["white"]};
      height:46px;
      font-weight: bold;
    }
  }
`