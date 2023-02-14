import { ContainerAbout, ContainerContacts, ContainerGeral, ContainerLogo, Logo } from "./styles";
import LogoGit from '../../assets/LogoGit.jpeg'
import LogoLinkedin from '../../assets/LogoLinkedin.png'
import LogoGmail from '../../assets/LogoGmail.png'
import LogoPessoal from '../../assets/EU.jpeg'

export const About = () => {
  return (
    <ContainerAbout id="about">
      <h1>Sobre</h1>
      <ContainerGeral>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum elit a nibh dictum, non sagittis urna congue.
          Praesent fringilla dignissim ipsum eget porta. Proin finibus dictum placerat. Quisque accumsan tempor ex, quis commodo dolor
          accumsan in. Vestibulum quis bibendum est. Nunc nibh ligula, volutpat ut pharetra ac, vehicula feugiat diam. Proin dignissim
          ante vel arcu mattis porta. Aenean mollis dolor ac lorem imperdiet, sit amet pulvinar libero varius. Nam viverra, sapien nec
          ullamcorper feugiat, eros diam dictum ex, a ullamcorper mi nunc sed nulla. Fusce commodo, erat ut commodo laoreet, justo odio
          mollis augue, quis efficitur lectus risus ornare nulla. Vestibulum ex sem, interdum sed mauris eget, egestas commodo augue.
          Aliquam varius lacus sit amet urna volutpat tristique. Donec sed condimentum massa, eu placerat tellus.<br />

          Me chamo Italo Moraes, tenho 26 anos e tecnologia é o que me faz brilhar os olhos, sou apaixonado por linhas de codigos
          e muito curioso por assuntos relacionados a tecnologia
        </p>
        
          <ContainerLogo>
              <Logo src={LogoPessoal} alt="" />
            <ContainerContacts>
              <a href=""><img src={LogoGit} alt="" /></a>
              <a href=""><img src={LogoLinkedin} alt="" /></a>
              <a href=""><img src={LogoGmail} alt="" /></a>
            </ContainerContacts>
          </ContainerLogo>
      </ContainerGeral>
    </ContainerAbout>
  );
}