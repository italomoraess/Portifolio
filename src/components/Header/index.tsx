import { Header, Logo, Menu } from "./styles";
import LogoImage from '../../assets/logo.png'

export const Headers = () => {
  return(
    <Header>
      <a href="/"><Logo src={LogoImage} /></a>
      <Menu>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="/">PROJECTS</a></li>
        <li><a href="/">CONTACT</a></li>
      </Menu>
    </Header>
  );
}