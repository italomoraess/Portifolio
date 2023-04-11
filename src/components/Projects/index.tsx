import { ContainerProjects, StyleProject } from "./styles";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import projects from "../../projects.json"
import '@splidejs/react-splide/css/sea-green';


export const Projects = () => {
  return (
    <ContainerProjects id="projects">
      <h1>Projetos</h1>
      <Splide
        options={{
          rewind: true,
          width : 1050,
          gap   : '1rem',
        }}
      >
        { 
          projects.map((project, index) => {
            return <SplideSlide className="">
              <StyleProject>
                <a href={project.link} target="_blank">{project.name}</a>
                <img src={project.image} alt="" />
              </StyleProject>
            </SplideSlide>
        })
      }
      </Splide> 
    </ContainerProjects>
  );
};