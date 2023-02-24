import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-height: 2500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  h2 {
    font-weight: 800;
    font-size: 32px;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Container = styled.div`
  padding: 1rem;
  max-width: 1330px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-row-gap: 50px;
  grid-column-gap: 35px;

  @media screen and (max-width: 1300px) {
    // width: 1100px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 950px) {
    //width: 800px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 630px) {
    //width: 600px;
    grid-template-columns: repeat(1, 1fr);
  }
`;
