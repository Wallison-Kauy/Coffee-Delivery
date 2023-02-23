import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5rem;
  width: 100%;

  div.container {
    display: flex;
    width: 1220px;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (max-width: 1139px) {
      padding: 0 1rem;
    }

    > div {
      display: flex;
      flex-direction: row;
      gap: 1rem;

      > a {
        display: flex;
        align-items: center;
        align-content: center;
        flex-direction: row;
        gap: 0.5rem;
        padding: 0.5rem;
        background: ${(props) => props.theme["purple-light"]};
        color: ${(props) => props.theme["purple-dark"]};
        border-radius: 8px;
        font-weight: 400;
        font-size: 0.875rem;
      }

      div.circulo {
        display: flex;
        background: ${(props) => props.theme["yellow-dark"]};
        color: ${(props) => props.theme["white"]};
        border-radius: 50%;
        width: 20px;
        height: 20px;
        justify-content: center;
        align-content: center;
        //isolation: isolate;
        right: 25px;
        position: relative;
        bottom: 7px;
      }

      > a.carrinho {
        background: ${(props) => props.theme["yellow-light"]};
      }
    }
  }
`;
