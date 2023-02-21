import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display:flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  height: 6.5rem;
  width: 100%;
  padding: 2rem 3rem;

  >div{
    max-width: 1440px ;
    >div{
    display:flex;
    flex-direction: row;
    gap: 1rem;

    >a{
      display:flex;
      align-items: center;
      align-content: center;
      flex-direction: row;
      gap: 0.5rem;
      padding: 0.5rem;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      border-radius: 8px;
      font-weight: 400;
      font-size: 0.875rem;
    }

    >a:last-child{
      background: ${(props) => props.theme['yellow-light']};
    }
  }
  }
 
`