import styled from "styled-components";


export const Wrapper = styled.div `

  background-color: #ffffff;
  display:flex;
  flex-direction: column;
  width:100%;
  padding-top: 5rem;
  height: 100vh;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`

export const LoginForm = styled.div `

  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height:100%;
  max-width: 384px;
  padding: 1rem;
  

  h1{
    font-size: 24px;
    font-family: 'Inter', sans-serif;
  }

  > form{
    width: 100%;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    

    input{
      display:flex ;
      height: 56px;
    
      padding: 16px;
      border: 1px solid #CED4DA;
      border-radius: 8px;
      font-family: 'Inter', sans-serif;
    }

    button{
      //display:flex ;
      height: 48px;
    max-width: 384px;
      flex-shrink: 0;
      background: #343A40;
      border-radius: 8px;
      padding: 8px 20px;
      text-align:center;
      color: #FFFFFF;

      font-family: 'Inter', sans-serif;
      font-weight: 600;
      font-style: normal;
     // font-weight: 600;
      font-size: 16px;
      line-height: 19px;
    }
  }

` 