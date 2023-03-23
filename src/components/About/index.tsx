import { ContainerAbout, ContainerContacts, ContainerGeral, ContainerLogo, Logo, ContainerLink } from "./styles";
import LogoGit from '../../assets/LogoGit.jpeg'
import LogoLinkedin from '../../assets/LogoLinkedin.png'
import LogoGmail from '../../assets/LogoGmail.png'
import LogoPessoal from '../../assets/EU.jpeg'
import LogoCv from '../../assets/cv.png'

export const About = () => {
  return (
    <ContainerAbout id="about">
      <h1>Sobre</h1>
      <ContainerGeral>
        <p>
        Me chamo Italo Moraes, tenho 26 anos e tecnologia é o que me faz brilhar os olhos. Sou apaixonado por linhas de códigos e 
        muito curioso por assuntos relacionados à tecnologia. Atualmente estou em busca de conquistar o sonho de trabalhar com desenvolvimento 
        web e me especializar, a fim de alcançar a senioridade.<br />
        Domino habilidades como Javascript, Typescript, Node.js, React, HTML, CSS entre outras que você pode conferir na página <ContainerLink href="#skills">
        habilidades</ContainerLink>, venho adquirindo tais conhecimentos, desde o ingresso no curso técnico em Redes de Computadores, dando continuidade com a 
        formação na Trybe, como também na formação acadêmica em análise e desenvolvimento de sistemas. Além disso, estou sempre em busca de crescer
        e aperfeiçoar minhas habilidades profissionais e pessoais, para ser alguém cada vez melhor.
        </p>
        
          <ContainerLogo>
              <Logo src={LogoPessoal} alt="" />
            <ContainerContacts>
              <a href="https://github.com/italomoraess" target='_blank'><img src={LogoGit} alt="" /></a>
              <a href="https://www.linkedin.com/in/italo-moraess/" target='_blank'><img src={LogoLinkedin} alt="" /></a>
              <a href="" target='_blank'><img src={LogoGmail} alt="" /></a>
              <a href="https://drive.google.com/file/d/1aiw4zS7Y27-k0k3CrWClbsE4vhxEXrsj/view?usp=sharing" target='_blank'><img src={LogoCv} alt="" /></a>
            </ContainerContacts>
          </ContainerLogo>
      </ContainerGeral>
    </ContainerAbout>
  );
}