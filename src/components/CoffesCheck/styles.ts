import styled from "styled-components";

export const Wrapper = styled.div`
  width: 368px;
  height: 80px;
  //background: ${(props) => props.theme["base-card"]};
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row;
  text-align: center;
  padding: 0.4rem;
  //border-radius: 6px 36px 6px 36px;
  gap: 1.2rem;
  align-items: flex-start;

  .hr {
    width: 100%;
    border-top: 1px solid #8c8b8b;
  }

  > img {
    width: 64px;
    height: 64px;
    display: flex;
    transition: 0.4s;
  }
  > img:hover {
    transform: scale(1.2);
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  div.description {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      color: ${(props) => props.theme["base-label"]};
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      text-align: center;
      height: 36px;
    }
  }

  div.infos {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    text-align: center;

    p {
      color: ${(props) => props.theme["base-text"]};
    }

    > p > span {
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;
      color: ${(props) => props.theme["base-text"]};
    }

    div.count {
      background: ${(props) => props.theme["base-button"]};
      padding: 0.5rem;
      display: flex;
      gap: 0.5rem;
      flex-direction: row;
      border-radius: 6px;
      height: 38px;
      //align-items: center;

      p {
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: ${(props) => props.theme["base-title"]};
      }

      button {
        padding: 0;
        background: none;
      }
    }
  }
`;
