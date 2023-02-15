import { Footer } from "./styles";
import LogoGit from '../../assets/LogoGit.jpeg'
import LogoLinkedin from '../../assets/LogoLinkedin.png'
import LogoGmail from '../../assets/LogoGmail.png'

export const Footers = () => {
  return(
    <Footer>
      <span>© 2023 by Italo Moraes</span> 
      <a href="https://github.com/italomoraess" target='_blank'><img src={LogoGit} alt="" /></a>
      <a href="https://www.linkedin.com/in/italo-moraess/" target='_blank'><img src={LogoLinkedin} alt="" /></a>
      <a href="" target='_blank'><img src={LogoGmail} alt="" /></a>
    </Footer>
  );
}