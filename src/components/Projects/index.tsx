import { ContainerProjects, StylesProjects, StyleProject } from "./styles";
import projects from "../../projects.json"
import Tcf from "../../assets/TFC.png" 

export const Projects = () => {
  return (
    <ContainerProjects id="projects">
      <h1>Projetos</h1>
      <StylesProjects>
        { 
          projects.map((project, index) => {
            return <StyleProject>
              <img src={Tcf} alt="" />
              <a href={project.link}>{project.name}</a>
            </StyleProject>
          })
        }
      </StylesProjects>
    </ContainerProjects>
  );
};