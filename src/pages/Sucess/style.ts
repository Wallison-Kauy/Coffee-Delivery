import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
`;

export const Container = styled.div`
max-width: 1120px;
gap: 48px;
display: flex;
justify-content: center;
@media screen and (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }


  .informacoes{
    width:100%;
    margin-top: 120px;
    display: flex;
    gap: 16px;
    flex-direction: column;

    h1{
      font-size: 32px;
      color: ${(props) => props.theme["yellow-dark"]};
    }
    span{
      font-size: 20px;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  .info{
    display:flex;
    position: relative;
    max-width: 526px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 40px;
    gap: 24px;

    >div{
      display:flex;
      gap: 8px;
      align-items:center;

    }
  }

  .info::after{
    content: "";
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  border-radius: 6px 36px; 
  border: 1px solid transparent;
  background: linear-gradient(45deg,purple,orange) border-box;
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  }

  .imagembanner{
    margin-top: 120px;
    > img {
      width: 150%;
      height: auto;
    }
    
    @media screen and (max-width: 1100px) {
      margin-top: 0px;
      > img {
      width: 100%;

    }
    }
  }
`