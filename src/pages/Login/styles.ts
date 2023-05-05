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
  span,
  p {
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
  }

  a {
    color: #343b40;

    &:hover {
      color: #212529;
    }
  }
`;

export const LoginForm = styled.div`
  gap: 1rem;
  max-width: 24rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  h1 {
    font-size: 1.5rem;
    font-family: "Inter", sans-serif;
  }

  > form {
    width: 100%;
    height: 16.875rem;
    display: flex;
    flex-direction: column;
    //justify-content: center;
    gap: 1rem;

    input {
      display: flex;
      font-size: 0.875rem;
      height: 3.5rem;
      width: 100%;
      padding: 1rem;
      border: 1px solid #ced4da;
      border-radius: 8px;
      font-family: "Inter", sans-serif;
    }

    button {
      height: 3rem;
      width: 100%;
      flex-shrink: 0;
      background: #343a40;
      border-radius: 8px;
      padding: 0.5rem 1.25rem;
      text-align: center;
      color: #ffffff;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 0.875rem;
      line-height: 1.188rem;

      transition: background 0.3s ease-in-out;

      &:hover {
        background: #212529;
      }
    }
  }
`;
