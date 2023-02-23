import styled from "styled-components";

export const Wrapper = styled.div`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme["base-card"]};
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0.4rem;
  border-radius: 6px 36px 6px 36px;
  gap: 0.5rem;

  > img {
    display: flex;
    margin-top: -34px;

    img:hover {
      transform: scale(1.8);
    }
  }

  div.tags {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;

    > div {
      padding: 0.5rem;
      background: ${(props) => props.theme["yellow-light"]};
      border-radius: 100px;
      display: flex;
      height: 21px;
      width: auto;
      align-items: center;
      justify-content: center;

      p {
        font-weight: 700;
        font-size: 10px;
        color: ${(props) => props.theme["yellow-dark"]};
      }
    }
  }

  div.description {
    margin-top: 0.5rem;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    height: 85px;

    h2 {
      font-size: 20px;
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

    a.carrinho {
      background: ${(props) => props.theme["purple-dark"]};
      padding: 0.5rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      height: 38px;
    }
  }
`;
