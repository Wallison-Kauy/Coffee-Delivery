import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;

  .form {
    display: flex;
    width: 640px;
    height: 591px;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px;
  }

  .cafesSelecionados {
    display: flex;
    flex-direction: column;
    width: 448px;
    height: 498px;
    background: ${(props) => props.theme["base-card"]};
    border-radius: 6px 44px 6px 44px;
  }
`;
