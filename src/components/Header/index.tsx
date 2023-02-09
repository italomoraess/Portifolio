import { Header, Logo, Menu } from "./styles";
import LogoImage from '../../assets/logo.png'

export const Headers = () => {
  return(
    <Header>
      <a href="/"><Logo src={LogoImage} /></a>
      <Menu>
        <li><a href="#">HOME</a></li>
        <li><a href="#">SOBRE</a></li>
        <li><a href="#skills">HABILIDADES</a></li>
        <li><a href="/">PROJETOS</a></li>
        <li><a href="/">CONTATOS</a></li>
      </Menu>
    </Header>
  );
}