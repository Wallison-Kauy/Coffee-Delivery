import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 800px;
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
  width: 1330px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-row-gap: 50px;
`;
