import { Header } from "../../components/Header";
import { CoffeList } from "./CoffeList";
import { MainContent } from "./MainContent";
import { Wrapper } from "./style";

export function Home (){
  return(
    <Wrapper>
     <MainContent />
     <CoffeList />
    </Wrapper>
  )
}