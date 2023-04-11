import { Header, Logo, Menu } from "./styles";
import LogoImage from '../../assets/logo.png'
import { useState } from "react";

export const Headers = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const menuMobile = () => {
    setActiveMenu(!activeMenu);
  }
  return(
    <Header>
      <a href="/"><Logo src={LogoImage} /></a>
      <Menu>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="https://drive.google.com/file/d/1aiw4zS7Y27-k0k3CrWClbsE4vhxEXrsj/view?usp=sharing" target="_blank">
              CV
              <img 
                src="https://cdn-icons-png.flaticon.com/512/6776/6776017.png"
                alt=""
              />
            </a>
        </li>
      </Menu>
    </Header>
  );
}