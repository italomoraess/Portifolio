import { HomeSection } from "./styles";
import HomePNG from '../../assets/Home.png'

export const Home = () => {
  return (
    <HomeSection>
      <img src={HomePNG} alt="" />
    </HomeSection>
  );
}