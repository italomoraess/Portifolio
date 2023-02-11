import { Header, Logo, Menu } from "./styles";
import LogoImage from '../../assets/logo.png'

export const Headers = () => {
  return(
    <Header>
      <a href="/"><Logo src={LogoImage} /></a>
      <Menu>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#skills">Habilidades</a></li>
      </Menu>
    </Header>
  );
}