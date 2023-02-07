import { Header, Logo, Menu } from "./styles";
import LogoImage from '../../assets/Logo.png'

export const Headers = () => {
  return(
    <Header>
      <a href="/"><Logo src={LogoImage} /></a>
      <Menu>
        <li><a href="/">Home</a></li>
        <li><a href="/">Sobre</a></li>
        <li><a href="/">Projetos</a></li>
        <li><a href="/">Contatos</a></li>
      </Menu>
    </Header>
  );
}