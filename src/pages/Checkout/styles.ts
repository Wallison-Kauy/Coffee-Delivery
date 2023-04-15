import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1330px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

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
    flex-direction:column ;
    overflow-x: hidden;
    gap: 1.5rem;
    width: max-content;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    width: 640px;
    height: 591px;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
  }
  
  .cafesSelecionados {
    display: flex;
    flex-direction: column;
    width: 448px;
    height: 591px;
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