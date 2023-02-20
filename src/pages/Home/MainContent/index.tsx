import cafe from '../../../assets/cafe.svg'
import { MainContainer,Container } from './style'

import compra from '../../../assets/compra.svg'
import timer from '../../../assets/timer.svg'
import cafe2 from '../../../assets/cafe2.svg'
import embalagem from '../../../assets/embalagem.svg'


export function MainContent(){
  return(
    <MainContainer>
      <Container>
       <h1>Encontre o café perfeito para qualquer hora do dia</h1>
       <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        <div>
          <div> <img src={compra} alt="" /> <p>Compra simples e segura</p></div>
          <div>  <img src={timer} alt="" /><p>Entrega rápida e rastreada</p></div>
          <div>  <img src={embalagem} alt="" /><p>Embalagem mantém o café intacto</p></div>
          <div>  <img src={cafe2} alt="" /><p>O café chega fresquinho até você</p></div>
        </div>
      </Container>
      <Container>
        <img src={cafe} alt="" />
      </Container>
    </MainContainer>
  )
}