import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 5rem 0px;
  height: 100vh;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
  }

  a,
  span {
    font-family: "Inter", sans-serif;
  }
`;

export const LoginForm = styled.div`
  gap: 1rem;
  max-width: 384px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h1 {
    font-size: 24px;
    font-family: "Inter", sans-serif;
  }

  > form {
    width: 100%;
    height: 270px;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    gap: 1rem;

    input {
      display: flex;
      height: 56px;
      width: 100%;
      padding: 16px;
      border: 1px solid #ced4da;
      border-radius: 8px;
      font-family: "Inter", sans-serif;
    }

    button {
      height: 48px;
      width: 100%;
      flex-shrink: 0;
      background: #343a40;
      border-radius: 8px;
      padding: 8px 20px;
      text-align: center;
      color: #ffffff;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;
